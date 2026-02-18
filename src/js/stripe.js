// Unika Rings — Stripe Checkout

async function handleCheckout() {
  const btn = document.getElementById('checkout-btn');
  btn.classList.add('btn-loading');
  btn.disabled = true;

  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    const { sessionId, url } = await res.json();

    // Track initiate checkout
    if (typeof gtag === 'function') gtag('event', 'begin_checkout', { value: 1.00, currency: 'USD' });
    if (typeof fbq === 'function') fbq('track', 'InitiateCheckout', { value: 1.00, currency: 'USD' });

    // Redirect to Stripe Checkout
    if (url) {
      window.location.href = url;
    } else {
      // Fallback: use Stripe.js redirect
      const stripe = Stripe(window.STRIPE_PK);
      await stripe.redirectToCheckout({ sessionId });
    }
  } catch (err) {
    console.error('Checkout error:', err);
    alert('Something went wrong. Please try again.');
  } finally {
    btn.classList.remove('btn-loading');
    btn.disabled = false;
  }
}
