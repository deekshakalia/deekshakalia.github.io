/* Interactive: PRR Signal Detection Explorer */
(function () {
  'use strict';

  function computePRR(a, b, c, d) {
    if (a <= 0 || b <= 0 || c <= 0 || d <= 0) return null;
    var prr = (a / (a + b)) / (c / (c + d));
    var n = a + b + c + d;
    var chi2 = (n * Math.pow(Math.abs(a * d - b * c) - n / 2, 2)) / ((a + b) * (c + d) * (a + c) * (b + d));
    var logPRR = Math.log(prr);
    var se = Math.sqrt(1 / a - 1 / (a + b) + 1 / c - 1 / (c + d));
    var lo = Math.exp(logPRR - 1.96 * se);
    var hi = Math.exp(logPRR + 1.96 * se);
    return { prr: prr, chi2: chi2, lo: lo, hi: hi };
  }

  function signalLevel(result) {
    if (!result) return 'invalid';
    if (result.prr >= 2 && result.chi2 >= 4) return 'signal';
    if (result.prr >= 1.5) return 'watch';
    return 'none';
  }

  function init(root) {
    var inputs = {
      a: root.querySelector('[data-cell="a"]'),
      b: root.querySelector('[data-cell="b"]'),
      c: root.querySelector('[data-cell="c"]'),
      d: root.querySelector('[data-cell="d"]')
    };
    var prrOut = root.querySelector('[data-role="prr-value"]');
    var ciOut = root.querySelector('[data-role="ci-value"]');
    var chi2Out = root.querySelector('[data-role="chi2-value"]');
    var badge = root.querySelector('[data-role="signal-badge"]');
    var bar = root.querySelector('[data-role="prr-bar"]');

    function fmt(n) { return isNaN(n) ? '\u2014' : n.toFixed(2); }

    function update() {
      var a = parseFloat(inputs.a.value);
      var b = parseFloat(inputs.b.value);
      var c = parseFloat(inputs.c.value);
      var d = parseFloat(inputs.d.value);
      var result = computePRR(a, b, c, d);
      var level = signalLevel(result);

      if (result) {
        prrOut.textContent = fmt(result.prr);
        ciOut.textContent = '(' + fmt(result.lo) + ' \u2013 ' + fmt(result.hi) + ')';
        chi2Out.textContent = fmt(result.chi2);
      } else {
        prrOut.textContent = '\u2014';
        ciOut.textContent = '\u2014';
        chi2Out.textContent = '\u2014';
      }

      var COLORS = { signal: '#dc2626', watch: '#d97706', none: '#16a34a', invalid: '#9ca3af' };
      var LABELS = { signal: 'Signal Detected', watch: 'Watch List', none: 'No Signal', invalid: 'Invalid Input' };
      badge.textContent = LABELS[level];
      badge.style.background = COLORS[level];

      if (result) {
        var pct = Math.min(result.prr / 6, 1) * 100;
        bar.style.width = pct + '%';
        bar.style.background = COLORS[level];
      } else {
        bar.style.width = '0%';
      }
    }

    Object.values(inputs).forEach(function (inp) { inp.addEventListener('input', update); });
    update();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('[data-interactive="signal-detection"]').forEach(init);
    });
  } else {
    document.querySelectorAll('[data-interactive="signal-detection"]').forEach(init);
  }
})();
