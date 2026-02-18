// Serverless function: Stripe webhook handler
// Handles successful payments → adds to email list, tracks conversion

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// For MailerLite integration
async function addToEmailList(email, name) {
  const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`
    },
    body: JSON.stringify({
      email,
      fields: { name: name || '' },
      groups: [process.env.MAILERLITE_GROUP_ID],
      status: 'active'
    })
  });
  return res.json();
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];
  let event;

  try {
    // Verify webhook signature
    const rawBody = req.body; // May need raw body depending on platform
    event = stripe.webhooks.constructEvent(
      typeof rawBody === 'string' ? rawBody : JSON.stringify(rawBody),
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return res.status(400).json({ error: 'Invalid signature' });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      const customerEmail = session.customer_details?.email;
      const customerName = session.customer_details?.name;

      console.log(`✅ Reservation received: ${customerEmail}`);

      // Add to email list with "VIP Reservation" tag
      if (customerEmail) {
        try {
          await addToEmailList(customerEmail, customerName);
          console.log(`📧 Added ${customerEmail} to email list`);
        } catch (err) {
          console.error('Failed to add to email list:', err);
        }
      }
      break;
    }

    case 'charge.refunded': {
      const charge = event.data.object;
      console.log(`🔄 Refund processed: ${charge.receipt_email}`);
      // Optionally: update email list tag, send cancellation email
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  res.status(200).json({ received: true });
};
