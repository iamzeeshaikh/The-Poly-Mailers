/* Product-page order box: "Add to order" keeps the line in localStorage and
   opens /checkout/. Without JavaScript the form submits as a GET to
   /checkout/?add=<slug>&qty=<n>, which the checkout reads the same way. */
(function () {
  'use strict';
  var KEY = 'tpm-cart';

  function readCart() {
    try {
      var cart = JSON.parse(localStorage.getItem(KEY) || '[]');
      return Array.isArray(cart) ? cart : [];
    } catch (error) { return []; }
  }

  document.querySelectorAll('form[data-order-box]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var slug = form.getAttribute('data-slug');
      var unit = Number(form.getAttribute('data-unit')) || 0.3;
      var select = form.querySelector('[data-order-qty]');
      var qty = parseInt(select && select.value, 10) || 100;
      var cart = readCart().filter(function (line) { return line && line.slug; });
      var line = cart.filter(function (item) { return item.slug === slug; })[0];
      if (line) line.qty = qty; else cart.push({ slug: slug, qty: qty });
      try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (error) { /* private mode: the URL carries the line */ }
      var button = form.querySelector('[data-order-add]');
      if (button) { button.setAttribute('aria-disabled', 'true'); button.textContent = 'Added, opening checkout…'; }
      if (window.gtag) {
        window.gtag('event', 'add_to_cart', {
          currency: 'USD',
          value: Math.round(qty * unit * 100) / 100,
          items: [{ item_id: slug, quantity: qty, price: unit }],
        });
      }
      window.location.href = '/checkout/?add=' + encodeURIComponent(slug) + '&qty=' + qty;
    });
  });
})();
