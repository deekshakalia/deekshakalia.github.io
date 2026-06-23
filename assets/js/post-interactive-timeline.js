/* Interactive: Adverse Event Reporting Timeline */
(function () {
  'use strict';

  var TIMELINE_RULES = [
    { seriousness: 'serious', expectedness: 'unexpected', days: 15, label: '15-Day Expedited Report', color: '#dc2626', explanation: 'A serious AND unexpected adverse drug reaction requires an expedited 15-day report to the FDA (21 CFR 314.80(c)(1)(i)) and a 15-day SUSAR report under ICH E2D / EMA GVP Module VI.', citation: '21 CFR 314.80(c)(1)(i) · ICH E2D · GVP Module VI Rev.2' },
    { seriousness: 'serious', expectedness: 'expected', days: null, periodicLabel: 'Periodic Reporting', label: 'Periodic Report (PADER/PSUR)', color: '#d97706', explanation: 'A serious but expected adverse reaction, one already described in the Reference Safety Information (RSI/CCDS/PI), is not subject to expedited reporting. It is captured in the next periodic safety report (PADER quarterly/annually; PSUR per ICH E2C).', citation: '21 CFR 314.81(b)(2) · ICH E2C(R2) · GVP Module VII' },
    { seriousness: 'non-serious', expectedness: 'unexpected', days: null, periodicLabel: 'Periodic Reporting', label: 'Periodic Report', color: '#2563eb', explanation: 'Non-serious adverse reactions, regardless of expectedness, are not subject to expedited reporting. They are included in periodic aggregate reports.', citation: '21 CFR 314.80(c)(2) · GVP Module VI Rev.2 §VI.C.2' },
    { seriousness: 'non-serious', expectedness: 'expected', days: null, periodicLabel: 'Periodic Reporting', label: 'Periodic Report', color: '#2563eb', explanation: 'Non-serious expected adverse reactions have the lowest reporting urgency. They are captured in periodic aggregate safety reports only.', citation: '21 CFR 314.80(c)(2) · GVP Module VI Rev.2 §VI.C.2' }
  ];

  function getRule(seriousness, expectedness) {
    return TIMELINE_RULES.find(function (r) { return r.seriousness === seriousness && r.expectedness === expectedness; });
  }

  function renderTimeline(svg, rule) {
    var W = svg.clientWidth || 560;
    var H = 90;
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.innerHTML = '';

    function el(tag, attrs) {
      var e = document.createElementNS('http://www.w3.org/2000/svg', tag);
      Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
      return e;
    }

    var PAD_L = 28, PAD_R = 28, axisY = 50, trackW = W - PAD_L - PAD_R;

    svg.appendChild(el('line', { x1: PAD_L, y1: axisY, x2: W - PAD_R, y2: axisY, stroke: '#d1d5db', 'stroke-width': 2 }));

    var ticks = [
      { day: 0, pct: 0, label: '0' },
      { day: 7, pct: 0.12, label: '7d' },
      { day: 15, pct: 0.25, label: '15d' },
      { day: 30, pct: 0.44, label: '30d' },
      { day: 90, pct: 0.70, label: '90d' },
      { day: 365, pct: 1.0, label: '1yr' }
    ];

    ticks.forEach(function (t) {
      var x = PAD_L + t.pct * trackW;
      svg.appendChild(el('line', { x1: x, y1: axisY - 5, x2: x, y2: axisY + 5, stroke: '#9ca3af', 'stroke-width': 1.5 }));
      var txt = el('text', { x: x, y: axisY + 18, 'text-anchor': 'middle', 'font-size': '10', fill: '#6b7280', 'font-family': 'Helvetica, Arial, sans-serif' });
      txt.textContent = t.label;
      svg.appendChild(txt);
    });

    if (rule.days) {
      var targetTick = ticks.find(function (t) { return t.day === rule.days; });
      if (targetTick) {
        var mx = PAD_L + targetTick.pct * trackW;
        svg.appendChild(el('rect', { x: PAD_L, y: axisY - 7, width: targetTick.pct * trackW, height: 14, fill: rule.color, opacity: '0.15', rx: '3' }));
        svg.appendChild(el('line', { x1: mx, y1: axisY - 22, x2: mx, y2: axisY + 5, stroke: rule.color, 'stroke-width': 2.5, 'stroke-dasharray': '4,3' }));
        var triH = 8, triW = 7;
        svg.appendChild(el('polygon', { points: mx + ',' + (axisY - 22 - triH) + ' ' + (mx - triW / 2) + ',' + (axisY - 22) + ' ' + (mx + triW / 2) + ',' + (axisY - 22), fill: rule.color }));
        var labelX = Math.min(mx, W - PAD_R - 80);
        svg.appendChild(el('rect', { x: labelX - 50, y: axisY - 44, width: 100, height: 18, rx: '4', fill: rule.color }));
        var lbl = el('text', { x: labelX, y: axisY - 31, 'text-anchor': 'middle', 'font-size': '11', fill: '#fff', 'font-weight': 'bold', 'font-family': 'Helvetica, Arial, sans-serif' });
        lbl.textContent = rule.label;
        svg.appendChild(lbl);
      }
    } else {
      var px = W - PAD_R - 4;
      svg.appendChild(el('rect', { x: PAD_L + trackW * 0.44, y: axisY - 7, width: trackW * 0.56, height: 14, fill: rule.color, opacity: '0.12', rx: '3' }));
      svg.appendChild(el('rect', { x: px - 100, y: axisY - 44, width: 104, height: 18, rx: '4', fill: rule.color }));
      var plbl = el('text', { x: px - 48, y: axisY - 31, 'text-anchor': 'middle', 'font-size': '11', fill: '#fff', 'font-weight': 'bold', 'font-family': 'Helvetica, Arial, sans-serif' });
      plbl.textContent = rule.periodicLabel;
      svg.appendChild(plbl);
    }
  }

  function init(root) {
    var seriousnessEl = root.querySelector('[data-role="seriousness"]');
    var expectednessEl = root.querySelector('[data-role="expectedness"]');
    var svg = root.querySelector('[data-role="timeline-svg"]');
    var explanationEl = root.querySelector('[data-role="explanation"]');
    var citationEl = root.querySelector('[data-role="citation"]');
    var deadlineBadge = root.querySelector('[data-role="deadline-badge"]');

    function update() {
      var rule = getRule(seriousnessEl.value, expectednessEl.value);
      renderTimeline(svg, rule);
      explanationEl.textContent = rule.explanation;
      citationEl.textContent = rule.citation;
      deadlineBadge.textContent = rule.label;
      deadlineBadge.style.background = rule.color;
    }

    seriousnessEl.addEventListener('change', update);
    expectednessEl.addEventListener('change', update);
    window.addEventListener('resize', update);
    update();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('[data-interactive="reporting-timeline"]').forEach(init);
    });
  } else {
    document.querySelectorAll('[data-interactive="reporting-timeline"]').forEach(init);
  }
})();
