/* Post Interactive Components — vanilla JS, no dependencies */
(function () {
  'use strict';

  /* ─── Reporting Timeline ─────────────────────────────────────────────── */
  var TIMELINE_RULES = [
    {
      seriousness: 'serious',
      expectedness: 'unexpected',
      days: 15,
      label: '15-Day Expedited Report',
      color: '#dc2626',
      explanation: 'A serious AND unexpected adverse drug reaction requires an expedited 15-day report to the FDA (21 CFR 314.80(c)(1)(i)) and a 15-day SUSAR report under ICH E2D / EMA GVP Module VI.',
      citation: '21 CFR 314.80(c)(1)(i) · ICH E2D · GVP Module VI Rev.2'
    },
    {
      seriousness: 'serious',
      expectedness: 'expected',
      days: null,
      periodicLabel: 'Periodic Reporting',
      label: 'Periodic Report (PADER/PSUR)',
      color: '#d97706',
      explanation: 'A serious but expected adverse reaction, one already described in the Reference Safety Information (RSI/CCDS/PI), is not subject to expedited reporting. It is captured in the next periodic safety report (PADER quarterly/annually; PSUR per ICH E2C).',
      citation: '21 CFR 314.81(b)(2) · ICH E2C(R2) · GVP Module VII'
    },
    {
      seriousness: 'non-serious',
      expectedness: 'unexpected',
      days: null,
      periodicLabel: 'Periodic Reporting',
      label: 'Periodic Report',
      color: '#2563eb',
      explanation: 'Non-serious adverse reactions, regardless of expectedness, are not subject to expedited reporting. They are included in periodic aggregate reports.',
      citation: '21 CFR 314.80(c)(2) · GVP Module VI Rev.2 §VI.C.2'
    },
    {
      seriousness: 'non-serious',
      expectedness: 'expected',
      days: null,
      periodicLabel: 'Periodic Reporting',
      label: 'Periodic Report',
      color: '#2563eb',
      explanation: 'Non-serious expected adverse reactions have the lowest reporting urgency. They are captured in periodic aggregate safety reports only.',
      citation: '21 CFR 314.80(c)(2) · GVP Module VI Rev.2 §VI.C.2'
    }
  ];

  function getRule(seriousness, expectedness) {
    return TIMELINE_RULES.find(function (r) {
      return r.seriousness === seriousness && r.expectedness === expectedness;
    });
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

    var PAD_L = 28, PAD_R = 28;
    var axisY = 50;
    var trackW = W - PAD_L - PAD_R;

    /* axis line */
    svg.appendChild(el('line', { x1: PAD_L, y1: axisY, x2: W - PAD_R, y2: axisY, stroke: '#d1d5db', 'stroke-width': 2 }));

    /* tick marks and labels */
    var ticks = [
      { day: 0,   pct: 0,    label: '0' },
      { day: 7,   pct: 0.12, label: '7d' },
      { day: 15,  pct: 0.25, label: '15d' },
      { day: 30,  pct: 0.44, label: '30d' },
      { day: 90,  pct: 0.70, label: '90d' },
      { day: 365, pct: 1.0,  label: '1yr' }
    ];

    ticks.forEach(function (t) {
      var x = PAD_L + t.pct * trackW;
      svg.appendChild(el('line', { x1: x, y1: axisY - 5, x2: x, y2: axisY + 5, stroke: '#9ca3af', 'stroke-width': 1.5 }));
      var txt = el('text', { x: x, y: axisY + 18, 'text-anchor': 'middle', 'font-size': '10', fill: '#6b7280', 'font-family': 'Helvetica, Arial, sans-serif' });
      txt.textContent = t.label;
      svg.appendChild(txt);
    });

    /* highlight marker */
    if (rule.days) {
      var targetTick = ticks.find(function (t) { return t.day === rule.days; });
      if (targetTick) {
        var mx = PAD_L + targetTick.pct * trackW;
        /* filled segment from 0 to deadline */
        svg.appendChild(el('rect', { x: PAD_L, y: axisY - 7, width: targetTick.pct * trackW, height: 14, fill: rule.color, opacity: '0.15', rx: '3' }));
        /* vertical marker line */
        svg.appendChild(el('line', { x1: mx, y1: axisY - 22, x2: mx, y2: axisY + 5, stroke: rule.color, 'stroke-width': 2.5, 'stroke-dasharray': '4,3' }));
        /* triangle pointer */
        var triH = 8, triW = 7;
        svg.appendChild(el('polygon', { points: mx + ',' + (axisY - 22 - triH) + ' ' + (mx - triW / 2) + ',' + (axisY - 22) + ' ' + (mx + triW / 2) + ',' + (axisY - 22), fill: rule.color }));
        /* deadline label */
        var labelX = Math.min(mx, W - PAD_R - 80);
        var lblBg = el('rect', { x: labelX - 50, y: axisY - 44, width: 100, height: 18, rx: '4', fill: rule.color });
        svg.appendChild(lblBg);
        var lbl = el('text', { x: labelX, y: axisY - 31, 'text-anchor': 'middle', 'font-size': '11', fill: '#fff', 'font-weight': 'bold', 'font-family': 'Helvetica, Arial, sans-serif' });
        lbl.textContent = rule.label;
        svg.appendChild(lbl);
      }
    } else {
      /* periodic — show a calendar icon area to the right */
      var px = W - PAD_R - 4;
      svg.appendChild(el('rect', { x: PAD_L + trackW * 0.44, y: axisY - 7, width: trackW * 0.56, height: 14, fill: rule.color, opacity: '0.12', rx: '3' }));
      var plblBg = el('rect', { x: px - 100, y: axisY - 44, width: 104, height: 18, rx: '4', fill: rule.color });
      svg.appendChild(plblBg);
      var plbl = el('text', { x: px - 48, y: axisY - 31, 'text-anchor': 'middle', 'font-size': '11', fill: '#fff', 'font-weight': 'bold', 'font-family': 'Helvetica, Arial, sans-serif' });
      plbl.textContent = rule.periodicLabel;
      svg.appendChild(plbl);
    }
  }

  function initReportingTimeline(root) {
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

  /* ─── Signal Detection (PRR) ─────────────────────────────────────────── */
  function computePRR(a, b, c, d) {
    /* a = drug+event, b = drug+no_event, c = no_drug+event, d = no_drug+no_event */
    if (a <= 0 || b <= 0 || c <= 0 || d <= 0) return null;
    var prr = (a / (a + b)) / (c / (c + d));
    /* chi-squared (Yates) for 2x2 */
    var n = a + b + c + d;
    var chi2 = (n * Math.pow(Math.abs(a * d - b * c) - n / 2, 2)) / ((a + b) * (c + d) * (a + c) * (b + d));
    /* 95% CI on log scale */
    var logPRR = Math.log(prr);
    var se = Math.sqrt(1 / a - 1 / (a + b) + 1 / c - 1 / (c + d));
    var lo = Math.exp(logPRR - 1.96 * se);
    var hi = Math.exp(logPRR + 1.96 * se);
    return { prr: prr, chi2: chi2, lo: lo, hi: hi };
  }

  function signalLevel(result) {
    if (!result) return 'invalid';
    /* Evans criteria: PRR ≥ 2, chi² ≥ 4, n(a) ≥ 3 */
    if (result.prr >= 2 && result.chi2 >= 4) return 'signal';
    if (result.prr >= 1.5) return 'watch';
    return 'none';
  }

  function initSignalDetection(root) {
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

    function fmt(n) { return isNaN(n) ? '—' : n.toFixed(2); }

    function update() {
      var a = parseFloat(inputs.a.value);
      var b = parseFloat(inputs.b.value);
      var c = parseFloat(inputs.c.value);
      var d = parseFloat(inputs.d.value);
      var result = computePRR(a, b, c, d);
      var level = signalLevel(result);

      if (result) {
        prrOut.textContent = fmt(result.prr);
        ciOut.textContent = '(' + fmt(result.lo) + ' – ' + fmt(result.hi) + ')';
        chi2Out.textContent = fmt(result.chi2);
      } else {
        prrOut.textContent = '—';
        ciOut.textContent = '—';
        chi2Out.textContent = '—';
      }

      var COLORS = { signal: '#dc2626', watch: '#d97706', none: '#16a34a', invalid: '#9ca3af' };
      var LABELS = { signal: 'Signal Detected', watch: 'Watch List', none: 'No Signal', invalid: 'Invalid Input' };
      badge.textContent = LABELS[level];
      badge.style.background = COLORS[level];

      /* bar width: cap PRR display at 6 for bar scaling */
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

  /* ─── GAIP Principles Checklist ──────────────────────────────────────── */
  function initGaipChecklist(root) {
    var items = root.querySelectorAll('[data-principle]');
    var progressFill = root.querySelector('[data-role="progress-fill"]');
    var progressCount = root.querySelector('[data-role="progress-count"]');
    var addressedCount = root.querySelector('[data-role="addressed-count"]');
    var progressCountSum = root.querySelector('[data-role="progress-count-summary"]');
    var noneCount = root.querySelector('[data-role="none-count"]');

    function getStatuses() {
      var stats = { addressed: 0, progress: 0, none: 0 };
      items.forEach(function (item) {
        var badge = item.querySelector('[data-role="status-badge"]');
        var status = badge.getAttribute('data-status') || 'none';
        stats[status]++;
      });
      return stats;
    }

    function getRecommendation(stats) {
      var total = items.length;
      var a = stats.addressed, p = stats.progress;
      if (a === total) {
        return { level: 'full', label: 'Fully Aligned', text: 'Excellent. Your AI governance program addresses all 10 GAIP principles. You are well positioned for regulatory interactions regarding AI use in drug development. Maintain this alignment as the framework evolves and ensure ongoing monitoring for continued compliance.' };
      }
      if (a >= 7) {
        var missing = total - a;
        return { level: 'strong', label: 'Strong Progress', text: 'Strong progress. You have addressed ' + a + ' of ' + total + ' GAIP principles with ' + p + ' still in progress. Focus on closing the remaining ' + missing + ' principle' + (missing > 1 ? 's' : '') + ' to achieve full alignment. Pay particular attention to principles related to data governance and model lifecycle management, which regulators often scrutinize most closely.' };
      }
      if (a >= 4) {
        var inProgress = p > 0 ? ' You have ' + p + ' in progress.' : '';
        return { level: 'building', label: 'Building Foundation', text: 'Good foundation. You have addressed ' + a + ' of ' + total + ' GAIP principles.' + inProgress + ' Prioritize the remaining principles, starting with data governance, clear context of use, and risk-based performance assessment. These form the core that regulators will evaluate first.' };
      }
      if (a > 0 || p >= 5) {
        return { level: 'early', label: 'Early Stage', text: 'Early stage. You have addressed ' + a + ' of ' + total + ' GAIP principles' + (p > 0 ? ' with ' + p + ' in progress' : '') + '. Begin with the foundational principles: human-centric design, risk-based approach, and adherence to standards. These establish the governance structure that the remaining principles build upon.' };
      }
      if (p > 0) {
        return { level: 'started', label: 'Getting Started', text: 'You have started working on ' + p + ' GAIP principles. Continue building momentum by focusing on the principles most relevant to your current AI use cases. The GAIP framework is designed to be adopted incrementally, not all at once.' };
      }
      return { level: 'none', label: 'Not Started', text: 'No principles addressed yet. The GAIP framework provides a clear roadmap for AI governance in drug development. Start by reviewing the 10 principles and identifying which ones apply to your current AI initiatives. Even partial adoption of the framework demonstrates proactive regulatory alignment.' };
    }

    function updateUI() {
      var stats = getStatuses();
      var total = items.length;
      var pct = (stats.addressed / total) * 100;
      progressFill.style.width = pct + '%';
      progressCount.textContent = stats.addressed + ' / ' + total + ' Addressed';
      addressedCount.textContent = stats.addressed;
      progressCountSum.textContent = stats.progress;
      noneCount.textContent = stats.none;
      var rec = getRecommendation(stats);
      var recContainer = root.querySelector('[data-role="recommendation"]');
      var recBadge = root.querySelector('[data-role="rec-badge"]');
      var recText = root.querySelector('[data-role="rec-text"]');
      recContainer.setAttribute('data-level', rec.level);
      recBadge.textContent = rec.label;
      recText.textContent = rec.text;
    }

    /* toggle item open/close */
    items.forEach(function (item) {
      var header = item.querySelector('.gaip-item-header');
      header.addEventListener('click', function (e) {
        if (e.target.closest('.gaip-btn')) return;
        item.classList.toggle('is-open');
      });

      /* status buttons */
      var buttons = item.querySelectorAll('.gaip-btn');
      var badge = item.querySelector('[data-role="status-badge"]');
      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          buttons.forEach(function (b) { b.classList.remove('is-active'); });
          btn.classList.add('is-active');
          var status = btn.getAttribute('data-action');
          badge.setAttribute('data-status', status);
          var LABELS = { addressed: 'Addressed', progress: 'In Progress', none: 'Not Started' };
          badge.textContent = LABELS[status];
          updateUI();
        });
      });
    });

    updateUI();
  }

  /* ─── Bootstrap ──────────────────────────────────────────────────────── */
  function init() {
    document.querySelectorAll('[data-interactive="reporting-timeline"]').forEach(initReportingTimeline);
    document.querySelectorAll('[data-interactive="signal-detection"]').forEach(initSignalDetection);
    document.querySelectorAll('[data-interactive="gaip-checklist"]').forEach(initGaipChecklist);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
