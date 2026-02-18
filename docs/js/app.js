/* ============================================
   UNIKA RINGS — App JavaScript
   ============================================ */

// ===== CONFIG (replace with env vars in production) =====
const CONFIG = {
  STRIPE_PK: '', // Set in production: pk_live_xxx
  GA_ID: '',     // Set in production: G-XXXXXXXXXX
  PIXEL_ID: '',  // Set in production: your Meta Pixel ID
  API_BASE: '',  // Set in production: https://unikarings.com
};

// ===== NAV SCROLL EFFECT =====
const nav = document.getElementById('nav');
if (nav) {
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    nav.classList.toggle('scrolled', scrollY > 50);
    lastScroll = scrollY;
  }, { passive: true });
}

// ===== MOBILE MENU =====
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenu) {
  mobileMenu.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    if (links) links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  });
}

// ===== SCROLL ANIMATIONS =====
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

// ===== FAQ TOGGLE =====
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    // Close others
    document.querySelectorAll('.faq-item.active').forEach(i => {
      if (i !== item) i.classList.remove('active');
    });
    item.classList.toggle('active');
  });
});

// ===== EMAIL FORMS =====
document.querySelectorAll('#cta-form, #email-form').forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const btn = form.querySelector('button');
    const email = input.value.trim();
    if (!email) return;

    btn.classList.add('btn-loading');
    btn.disabled = true;

    try {
      // Try API call
      if (CONFIG.API_BASE) {
        await fetch(`${CONFIG.API_BASE}/api/subscribe`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
      }
      // Track
      if (typeof gtag === 'function') gtag('event', 'sign_up', { method: 'email' });
      if (typeof fbq === 'function') fbq('track', 'Lead');
    } catch (err) {
      console.log('Email capture fallback — redirecting anyway');
    }

    // Always redirect to reserve page
    window.location.href = '/reserve';
  });
});

// ===== STRIPE CHECKOUT =====
window.handleCheckout = async function() {
  const btn = document.getElementById('checkout-btn');
  if (!btn) return;
  btn.classList.add('btn-loading');
  btn.disabled = true;

  try {
    if (CONFIG.API_BASE) {
      const res = await fetch(`${CONFIG.API_BASE}/api/checkout`, { method: 'POST' });
      const data = await res.json();
      
      if (typeof gtag === 'function') gtag('event', 'begin_checkout', { value: 1.00, currency: 'USD' });
      if (typeof fbq === 'function') fbq('track', 'InitiateCheckout', { value: 1.00, currency: 'USD' });

      if (data.url) {
        window.location.href = data.url;
        return;
      }
    }
    
    // Fallback: show coming soon
    alert('🚀 Reservations open soon! We\'ll email you when we\'re ready.');
    btn.classList.remove('btn-loading');
    btn.disabled = false;
  } catch (err) {
    console.error('Checkout error:', err);
    alert('🚀 Reservations open soon! We\'ll email you when we\'re ready.');
    btn.classList.remove('btn-loading');
    btn.disabled = false;
  }
};

// ===== GOOGLE ANALYTICS =====
if (CONFIG.GA_ID) {
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.GA_ID}`;
  document.head.appendChild(gaScript);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', CONFIG.GA_ID);
}

// ===== META PIXEL =====
if (CONFIG.PIXEL_ID) {
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
  (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', CONFIG.PIXEL_ID);
  fbq('track', 'PageView');
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

console.log('✨ Unika Rings loaded');
