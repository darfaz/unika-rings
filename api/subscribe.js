export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email } = req.body || {};
  if (!email?.includes('@')) return res.status(400).json({ error: 'Valid email required' });

  try {
    if (process.env.MAILERLITE_API_KEY) {
      await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`
        },
        body: JSON.stringify({
          email,
          groups: process.env.MAILERLITE_GROUP_ID ? [process.env.MAILERLITE_GROUP_ID] : [],
          status: 'active'
        })
      });
    }
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    res.status(200).json({ success: true }); // Don't block UX
  }
}
