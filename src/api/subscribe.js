// Serverless function: Email signup (pre-Stripe, landing page capture)

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body || {};
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  try {
    // Add to MailerLite
    const mlRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`
      },
      body: JSON.stringify({
        email,
        groups: [process.env.MAILERLITE_GROUP_ID],
        status: 'active'
      })
    });

    if (!mlRes.ok) {
      const err = await mlRes.json();
      console.error('MailerLite error:', err);
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    // Still return success to not block the UX
    res.status(200).json({ success: true });
  }
};
