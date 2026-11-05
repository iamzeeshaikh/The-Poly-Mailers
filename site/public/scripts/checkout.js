/* Checkout: order lines from localStorage (plus ?add=&qty= from the order box),
   live totals, cash-on-delivery rule by country, and a POST to /api/order/.
   The server re-prices every line; the totals here are a preview only. */
(function () {
  'use strict';
  var C = window.TPM_CHECKOUT;
  var KEY = 'tpm-cart';
  var LOADED = Date.now();
  var form = document.getElementById('checkout-form');
  if (!form || !C) return;

  var linesEl = form.querySelector('[data-lines]');
  var grandEl = form.querySelector('[data-grand]');
  var countEl = form.querySelector('[data-order-count]');
  var statusEl = form.querySelector('[data-status]');
  var button = form.querySelector('[data-place]');
  var unit = Number(C.unit) || 0.3;
  var pack = Number(C.pack) || 100;
  var max = Number(C.max) || 5000;
  var phone = C.phone || '';

  var money = function (n) { return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var snap = function (n) {
    n = Math.round(Number(n));
    if (!isFinite(n) || n <= 0) return 0;
    return Math.min(max, Math.max(pack, Math.round(n / pack) * pack));
  };

  var cart = [];
  try { cart = JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (error) { cart = []; }
  if (!Array.isArray(cart)) cart = [];
  var params = new URLSearchParams(window.location.search);
  var add = params.get('add');
  if (add && C.catalog[add]) {
    var qty = snap(params.get('qty')) || pack;
    var hit = cart.filter(function (line) { return line && line.slug === add; })[0];
    if (hit) hit.qty = qty; else cart.push({ slug: add, qty: qty });
    try { history.replaceState(null, '', '/checkout/'); } catch (error) { /* ignore */ }
  }
  cart = cart
    .filter(function (line) { return line && C.catalog[line.slug]; })
    .map(function (line) { return { slug: line.slug, qty: snap(line.qty) || pack }; });
  var save = function () { try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (error) { /* ignore */ } };
  save();

  function options(selected) {
    var html = '';
    for (var n = pack; n <= max; n += pack) {
      html += '<option value="' + n + '"' + (n === selected ? ' selected' : '') + '>' + n.toLocaleString('en-US') + ' units</option>';
    }
    return html;
  }

  function render() {
    if (!cart.length) {
      linesEl.innerHTML = '<tr><td colspan="2" class="olines-empty">Your order is empty. <a href="/poly-mailers/">Choose a poly mailer</a> to add it here.</td></tr>';
      grandEl.textContent = money(0);
      if (countEl) countEl.textContent = '0 units';
      button.disabled = true;
      return;
    }
    var total = 0, units = 0;
    linesEl.innerHTML = cart.map(function (line, i) {
      var name = C.catalog[line.slug];
      var sum = Math.round(line.qty * unit * 100) / 100;
      total += sum; units += line.qty;
      return '<tr><td>' +
        '<a href="/' + esc(line.slug) + '/">' + esc(name) + '</a>' +
        '<span class="olines-unit">' + money(unit) + ' per piece</span>' +
        '<span class="olines-ctl"><select data-i="' + i + '" aria-label="Quantity for ' + esc(name) + '">' + options(line.qty) + '</select>' +
        '<button type="button" class="olines-rm" data-rm="' + i + '" aria-label="Remove ' + esc(name) + '">Remove</button></span>' +
        '</td><td class="r">' + money(sum) + '</td></tr>';
    }).join('');
    grandEl.textContent = money(total);
    if (countEl) countEl.textContent = units.toLocaleString('en-US') + ' units';
    button.disabled = false;
  }

  linesEl.addEventListener('change', function (event) {
    var i = event.target.getAttribute('data-i');
    if (i === null) return;
    cart[+i].qty = snap(event.target.value) || pack;
    save(); render();
  });
  linesEl.addEventListener('click', function (event) {
    var target = event.target.closest('[data-rm]');
    if (!target) return;
    cart.splice(+target.getAttribute('data-rm'), 1);
    save(); render();
  });
  render();

  /* Cash on delivery only where we offer it (US and Canada). */
  var countryEl = form.querySelector('#co-country');
  var codIn = form.querySelector('input[name="payment"][value="cod"]');
  function codRule() {
    if (!countryEl || !codIn) return;
    var ok = (C.cod || ['US', 'CA']).indexOf(countryEl.value) >= 0;
    var box = codIn.closest('label');
    codIn.disabled = !ok;
    if (box) { if (ok) box.removeAttribute('data-off'); else box.setAttribute('data-off', ''); }
    if (!ok && codIn.checked) {
      var paypal = form.querySelector('input[name="payment"][value="paypal"]');
      if (paypal) paypal.checked = true;
    }
  }
  if (countryEl) { countryEl.addEventListener('change', codRule); codRule(); }

  form.addEventListener('input', function (event) {
    if (event.target.getAttribute && event.target.getAttribute('aria-invalid') === 'true') {
      event.target.setAttribute('aria-invalid', 'false');
      var err = event.target.closest('.field') && event.target.closest('.field').querySelector('.err');
      if (err) { err.hidden = true; err.textContent = ''; }
    }
  });

  function showStatus(state, text) {
    if (!statusEl) return;
    if (!state) { statusEl.hidden = true; statusEl.className = 'err form-err'; statusEl.textContent = ''; return; }
    statusEl.hidden = false;
    statusEl.className = 'err form-err ' + (state === 'error' ? 'is-error' : 'is-busy');
    statusEl.textContent = text;
  }

  function labelFor(field) {
    var label = field.id ? form.querySelector('label[for="' + field.id + '"]') : null;
    return label ? label.textContent.replace('*', '').trim() : 'This field';
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    showStatus(null);
    if (!cart.length) { showStatus('error', 'Your order is empty. Choose a poly mailer first.'); return; }

    var bad = [];
    Array.prototype.forEach.call(form.querySelectorAll('[required]'), function (field) {
      var value = String(field.value || '').trim();
      var ok = value && (field.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value));
      var wrap = field.closest('.field');
      var err = wrap && wrap.querySelector('.err');
      if (!ok) {
        field.setAttribute('aria-invalid', 'true');
        if (err) {
          err.textContent = field.type === 'email' && value ? 'Enter an email address in the format name@example.com.' : 'Enter your ' + labelFor(field).toLowerCase() + '.';
          err.hidden = false;
        }
        bad.push(field);
      } else {
        field.setAttribute('aria-invalid', 'false');
        if (err) { err.hidden = true; err.textContent = ''; }
      }
    });
    if (bad.length) { showStatus('error', 'Please fill in the highlighted fields.'); bad[0].focus(); return; }

    var fileField = form.querySelector('input[name="artwork"]');
    var file = fileField && fileField.files && fileField.files[0];
    if (file && file.size > 12 * 1024 * 1024) { showStatus('error', 'The artwork file is over 12 MB. Place the order without it and email the file to ' + (C.email || 'us') + '.'); return; }

    var data = new FormData(form);
    data.set('items', JSON.stringify(cart));
    data.set('submitted_at', String(LOADED));
    data.set('source_url', window.location.href);
    var total = cart.reduce(function (sum, line) { return sum + line.qty * unit; }, 0);

    button.disabled = true;
    button.setAttribute('aria-disabled', 'true');
    button.dataset.label = button.textContent;
    button.textContent = 'Placing your order…';
    showStatus('sending', 'Placing your order…');
    if (window.gtag) window.gtag('event', 'begin_checkout', { currency: 'USD', value: Math.round(total * 100) / 100 });

    fetch('/api/order/', { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      .then(function (response) {
        return response.json().catch(function () { return { ok: false, error: 'We could not place the order just now' }; });
      })
      .then(function (result) {
        if (!result || !result.ok) throw new Error((result && result.error) || 'We could not place the order just now');
        if (window.gtag) window.gtag('event', 'purchase', { transaction_id: result.ref, currency: 'USD', value: result.total });
        try { localStorage.removeItem(KEY); } catch (error) { /* ignore */ }
        window.location.assign('/order-confirmed/?ref=' + encodeURIComponent(result.ref) + '&pay=' + encodeURIComponent(result.payment));
      })
      .catch(function (error) {
        showStatus('error', (error.message || 'We could not place the order just now') + '. Please try again' + (phone ? ', or message us on WhatsApp at ' + phone : '') + '.');
        button.disabled = false;
        button.removeAttribute('aria-disabled');
        button.textContent = button.dataset.label || 'Place order';
      });
  });
})();
