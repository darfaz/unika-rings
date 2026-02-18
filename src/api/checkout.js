// Serverless function: Create Stripe Checkout session
// Works on Vercel, Netlify, or any Node.js serverless platform

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Unika Rings — VIP Reservation',
            description: 'Reserve your 40% VIP discount. Fully refundable before production.',
            images: ['https://unikarings.com/public/product-hero.jpg'],
          },
          unit_amount: 100, // $1.00 in cents
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${process.env.SITE_URL}/confirmed?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.SITE_URL}/reserve`,
      // Collect customer info for email follow-up
      customer_creation: 'always',
      payment_intent_data: {
        metadata: {
          type: 'vip_reservation',
          source: 'prelaunch_funnel'
        }
      },
      // Enable Apple Pay / Google Pay
      payment_method_options: {
        card: { request_three_d_secure: 'automatic' }
      }
    });

    res.status(200).json({ sessionId: session.id, url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
};
