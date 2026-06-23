/* Interactive: GAIP Principles Checklist */
(function () {
  'use strict';

  function init(root) {
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

    items.forEach(function (item) {
      var header = item.querySelector('.gaip-item-header');
      header.addEventListener('click', function (e) {
        if (e.target.closest('.gaip-btn')) return;
        item.classList.toggle('is-open');
      });

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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('[data-interactive="gaip-checklist"]').forEach(init);
    });
  } else {
    document.querySelectorAll('[data-interactive="gaip-checklist"]').forEach(init);
  }
})();
