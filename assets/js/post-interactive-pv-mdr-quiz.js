(function () {
  const QUESTIONS = [
    {
      q: "Which four elements make an ICSR valid under ICH E2B(R3)?",
      options: [
        "Patient, physician, suspect drug, MedDRA code",
        "Reporter, serious criteria, suspect drug, narrative",
        "Patient, reporter, suspect drug, adverse event",
        "Patient, dose, adverse event, causality score"
      ],
      correct: 2,
      explanation: "All four elements — identifiable patient, identifiable reporter, at least one suspect drug, and at least one adverse event — must be present. Missing any single element makes the case incomplete and it cannot be submitted."
    },
    {
      q: "Under 21 CFR 314.80, what two conditions must BOTH be met to trigger a 15-day expedited report?",
      options: [
        "Serious and fatal",
        "Unexpected and non-serious",
        "Fatal and unlisted in the label",
        "Serious and unexpected"
      ],
      correct: 3,
      explanation: "The 15-day expedited report is triggered only when the event is both serious (meets one of the six seriousness criteria) AND unexpected (not listed in the RSI/CCDS). A serious but expected event goes into periodic reporting only."
    },
    {
      q: "Under 21 CFR Part 803, a manufacturer must report a device malfunction within 30 days even when no patient was harmed. What is the key condition?",
      options: [
        "The device is Class III",
        "The malfunction would likely cause death or serious injury if it recurred",
        "The malfunction was reported by a hospital",
        "The device caused a near-miss event"
      ],
      correct: 1,
      explanation: "Under 21 CFR 803.50(a)(2), a manufacturer must report a malfunction if it would likely cause or contribute to death or serious injury if the malfunction were to recur — regardless of whether anyone was actually harmed. This predictive rule has no direct PV equivalent."
    },
    {
      q: "Under EU MDR 2017/745 Article 87, what is the reporting timeline for a serious public health threat?",
      options: [
        "Within 30 calendar days",
        "Within 15 calendar days",
        "Within 10 calendar days",
        "Within 2 calendar days"
      ],
      correct: 3,
      explanation: "EU MDR Article 87 sets a 2-calendar-day deadline for serious public health threats, 10 days for death or unanticipated serious deterioration, and 15 days for any other reportable serious incident."
    },
    {
      q: "Which US submission form is used for BOTH mandatory drug adverse event reporting AND mandatory medical device reporting?",
      options: [
        "CIOMS I form",
        "MedWatch 3500A",
        "ICH E2B XML",
        "MedWatch 3500B"
      ],
      correct: 1,
      explanation: "MedWatch 3500A is the mandatory reporting form for manufacturers, MAHs, importers, and user facilities — used for both drugs and devices. MedWatch 3500B is the voluntary form used by healthcare professionals and patients."
    },
    {
      q: "Which of the following is unique to Medical Device Reporting and has NO direct equivalent in pharmaceutical pharmacovigilance?",
      options: [
        "Expectedness assessment against labeling",
        "MedDRA coding for adverse events",
        "15-day expedited reporting",
        "Malfunction reporting with no patient harm"
      ],
      correct: 3,
      explanation: "Malfunction reporting — filing a report for a device failure that caused no harm, but would likely cause death or serious injury if it recurred — is unique to MDR. Pharmacovigilance only requires reporting of harm that has already occurred to a patient."
    },
  ];

  function init() {
    const widget = document.querySelector('[data-interactive="pv-mdr-quiz"]');
    if (!widget) return;

    let current = 0;
    let score = 0;
    let answered = false;

    const progressBar   = widget.querySelector('[data-role="progress-bar"]');
    const progressLabel = widget.querySelector('[data-role="progress-label"]');
    const questionText  = widget.querySelector('[data-role="question-text"]');
    const optionsEl     = widget.querySelector('[data-role="options"]');
    const feedbackEl    = widget.querySelector('[data-role="feedback"]');
    const nextBtn       = widget.querySelector('[data-role="next-btn"]');
    const questionBlock = widget.querySelector('[data-role="question-block"]');
    const resultsEl     = widget.querySelector('[data-role="results"]');
    const scoreCircle   = widget.querySelector('[data-role="score-circle"]');
    const resultsLabel  = widget.querySelector('[data-role="results-label"]');
    const restartBtn    = widget.querySelector('[data-role="restart-btn"]');

    function renderQuestion() {
      answered = false;
      feedbackEl.innerHTML = '';
      feedbackEl.className = 'quiz-feedback';
      nextBtn.style.display = 'none';

      const q = QUESTIONS[current];
      progressLabel.textContent = 'Question ' + (current + 1) + ' of ' + QUESTIONS.length;
      progressBar.style.width = ((current / QUESTIONS.length) * 100) + '%';
      questionText.textContent = q.q;

      optionsEl.innerHTML = '';
      q.options.forEach(function (opt, i) {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.textContent = opt;
        btn.addEventListener('click', function () { selectAnswer(i); });
        optionsEl.appendChild(btn);
      });
    }

    function selectAnswer(index) {
      if (answered) return;
      answered = true;

      const q = QUESTIONS[current];
      const isCorrect = index === q.correct;
      if (isCorrect) score++;

      const btns = optionsEl.querySelectorAll('.quiz-option-btn');
      btns.forEach(function (btn, i) {
        if (i === q.correct) btn.classList.add('quiz-option-correct');
        else if (i === index && !isCorrect) btn.classList.add('quiz-option-wrong');
        btn.disabled = true;
      });

      feedbackEl.className = 'quiz-feedback ' + (isCorrect ? 'quiz-feedback-correct' : 'quiz-feedback-wrong');
      feedbackEl.innerHTML = '<strong>' + (isCorrect ? 'Correct.' : 'Not quite.') + '</strong> ' + q.explanation;

      nextBtn.style.display = 'inline-block';
      nextBtn.textContent = current < QUESTIONS.length - 1 ? 'Next question →' : 'See results';
    }

    nextBtn.addEventListener('click', function () {
      current++;
      if (current < QUESTIONS.length) {
        renderQuestion();
      } else {
        showResults();
      }
    });

    restartBtn.addEventListener('click', function () {
      current = 0;
      score = 0;
      answered = false;
      resultsEl.style.display = 'none';
      questionBlock.style.display = 'block';
      progressBar.style.width = '0%';
      renderQuestion();
    });

    function showResults() {
      questionBlock.style.display = 'none';
      resultsEl.style.display = 'block';
      progressBar.style.width = '100%';
      progressLabel.textContent = 'Complete';

      const pct = Math.round((score / QUESTIONS.length) * 100);
      scoreCircle.textContent = score + '/' + QUESTIONS.length;
      scoreCircle.className = 'quiz-score-circle ' + (pct >= 75 ? 'score-pass' : 'score-retry');

      var msg = pct === 100
        ? 'Perfect score — excellent work.'
        : pct >= 75
        ? 'Strong result. You have a solid grasp of both frameworks.'
        : pct >= 50
        ? 'Good start. Review the sections above on the questions you missed.'
        : 'Keep going — revisit the key sections above and retake the quiz.';
      resultsLabel.textContent = msg;
    }

    renderQuestion();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
