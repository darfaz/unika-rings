// Unika Rings — Email Capture

async function handleEmailSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const emailInput = form.querySelector('input[type="email"]');
  const button = form.querySelector('button');
  const email = emailInput.value.trim();

  if (!email) return;

  button.classList.add('btn-loading');
  button.disabled = true;

  try {
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    if (res.ok) {
      // Track conversion
      if (typeof gtag === 'function') gtag('event', 'sign_up', { method: 'email' });
      if (typeof fbq === 'function') fbq('track', 'Lead');

      // Redirect to reservation page
      window.location.href = '/reserve';
    } else {
      throw new Error('Signup failed');
    }
  } catch (err) {
    console.error('Email signup error:', err);
    // Fallback: still redirect (capture email server-side via webhook later)
    window.location.href = '/reserve';
  } finally {
    button.classList.remove('btn-loading');
    button.disabled = false;
  }
}

// Bind to all email forms on the page
document.querySelectorAll('#email-form, #email-form-bottom').forEach(form => {
  form.addEventListener('submit', handleEmailSubmit);
});
