---
layout: post
title: "From PV to MDR: The Cross-Domain Safety Reporting Guide Nobody Gave You"
date: 2026-06-08
description: "Translate pharmacovigilance skills to medical device reporting. Covers ICSR validity, 21 CFR Part 803, EU MDR 2017/745, reporting timelines, signal detection, and cross-domain comparisons."
image: /images/blog/pv_mdr.jpg
tags:
  - Pharmacovigilance
  - Medical Device
  - Regulatory Affairs
  - Drug Safety
interactive: true
---

## Introduction

*When I started my masters in Regulatory Affairs at Northeastern, I had already spent years in pharmacovigilance. Processing ICSRs, coding MedDRA terms, writing aggregate reports. I thought I knew safety reporting. Then I encountered medical device regulatory requirements for the first time, and my first instinct was that this was a completely different world.*

*It is not. And that realization changed how I think about both domains.*

*This guide is for anyone with a PV background who has looked at 21 CFR Part 803 or EU MDR 2017/745 and felt lost. I want to show you that the foundation you already have in pharmacovigilance translates further than you think, and where the real differences lie.*

Pharmacovigilance and Medical Device Reporting are often treated as two separate disciplines. One deals with drugs. The other deals with devices. The acronyms are different. The regulators speak differently. Even the forms look different. But the underlying mission is identical. Detect harm. Assess it systematically. Report it accurately. Get it to the right authority on time. Prevent it from happening again.

By the end of this article, you will be able to map your existing PV knowledge directly onto the medical device reporting framework, understand where the two systems genuinely diverge, and know exactly which regulations and concepts to focus on if you are building cross-domain expertise.


<div class="pv-section-label">Section 1 — Pharmacovigilance</div>

## What is pharmacovigilance?

<div class="pv-definition-callout">
  <div class="pv-callout-label">WHO Definition</div>
  <p>"Pharmacovigilance is the science and activities relating to the detection, assessment, understanding and prevention of adverse effects or any other medicine-related problem." — World Health Organization</p>
</div>

### Key regulations governing PV

<div class="pv-reg-cards">
  <div class="pv-reg-card">
    <div class="pv-reg-card-title">21 CFR 312.32</div>
    <div class="pv-reg-card-subtitle">US FDA — IND safety reporting</div>
    <p>Governs IND safety reporting during clinical trials. Covers expedited reporting of SUSARs.</p>
    <a class="pv-reg-card-link" href="https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-312/subpart-B/section-312.32" target="_blank" rel="noopener">View on eCFR →</a>
  </div>
  <div class="pv-reg-card">
    <div class="pv-reg-card-title">21 CFR 314.80</div>
    <div class="pv-reg-card-subtitle">US FDA — post-marketing reporting</div>
    <p>Governs post-marketing adverse drug experience reporting. Defines 15-day expedited and periodic reporting obligations.</p>
    <a class="pv-reg-card-link" href="https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-314/subpart-G/section-314.80" target="_blank" rel="noopener">View on eCFR →</a>
  </div>
  <div class="pv-reg-card">
    <div class="pv-reg-card-title">21 CFR 314.81</div>
    <div class="pv-reg-card-subtitle">US FDA — periodic reports</div>
    <p>Covers PADERs. Quarterly reports for first 3 years post-approval, then annual reporting.</p>
    <a class="pv-reg-card-link" href="https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-314/subpart-G/section-314.81" target="_blank" rel="noopener">View on eCFR →</a>
  </div>
</div>

<div class="pv-definition-callout">
  <div class="pv-callout-label">EU Framework: GVP Module VI</div>
  <p>Guideline on good pharmacovigilance practices — Module VI governs collection, management and submission of reports of suspected adverse reactions. Rev 2, in effect 22 November 2017. EMA/873138/2011.
  <a href="https://www.ema.europa.eu/en/documents/regulatory-procedural-guideline/guideline-good-pharmacovigilance-practices-gvp-module-vi-collection-management-submission-reports-suspected-adverse-reactions-medicinal-products-rev-2_en.pdf" target="_blank">Refer to EMA GVP Module VI →</a>
  </p>
</div>

### The 4 elements of a valid ICSR

Not every report that lands in your safety database is a valid ICSR. Under ICH E2B and GVP Module VI, a case must contain at minimum four elements. Missing even one means the case cannot be processed or submitted.

<div class="pv-elements-grid">
  <div class="pv-element-card">
    <div class="pv-element-num">Element 01</div>
    <div class="pv-element-title">Patient</div>
    <div class="pv-element-subtitle">An identifiable patient</div>
    <p>At least one piece of information to identify a unique patient. Full name not required.</p>
    <div class="pv-element-tags"><span class="tag-pill">Initials</span> <span class="tag-pill">Age / DOB</span> <span class="tag-pill">Sex</span> <span class="tag-pill">Patient ID</span></div>
  </div>
  <div class="pv-element-card">
    <div class="pv-element-num">Element 02</div>
    <div class="pv-element-title">Reporter</div>
    <div class="pv-element-subtitle">An identifiable reporter</div>
    <p>At least one identifiable person who reported the reaction. HCP, patient, consumer, or lawyer.</p>
    <div class="pv-element-tags"><span class="tag-pill">Physician</span> <span class="tag-pill">Pharmacist</span> <span class="tag-pill">Patient</span> <span class="tag-pill">Lawyer</span></div>
  </div>
  <div class="pv-element-card">
    <div class="pv-element-num">Element 03</div>
    <div class="pv-element-title">Suspect drug</div>
    <div class="pv-element-subtitle">At least one suspect product</div>
    <p>At least one medicinal product suspected to have caused or contributed to the adverse reaction.</p>
    <div class="pv-element-tags"><span class="tag-pill">Brand / generic name</span> <span class="tag-pill">Dose / route</span> <span class="tag-pill">Product list check</span></div>
  </div>
  <div class="pv-element-card">
    <div class="pv-element-num">Element 04</div>
    <div class="pv-element-title">Adverse event</div>
    <div class="pv-element-subtitle">At least one adverse reaction</div>
    <p>At least one adverse reaction described. Coded using MedDRA PT under the appropriate SOC.</p>
    <div class="pv-element-tags"><span class="tag-pill">MedDRA PT</span> <span class="tag-pill">MedDRA SOC</span> <span class="tag-pill">Verbatim term</span></div>
  </div>
</div>

<div class="pv-rule-callout">
  <div class="pv-callout-label">Minimum Validity Rule</div>
  <p>All four elements must be present for a case to be considered valid under ICH E2B(R3) and GVP Module VI. If any one element is missing, the case is incomplete and must be followed up before processing or submission.</p>
</div>

### Seriousness and expectedness

An adverse drug reaction is classified as serious if it meets any one of the following six criteria:

<div class="pv-criteria-box">
  <ul>
    <li>Death</li>
    <li>Life-threatening (risk of death at time of event)</li>
    <li>Hospitalization (initial or prolonged inpatient stay)</li>
    <li>Persistent disability (significant disruption of normal life)</li>
    <li>Congenital anomaly (birth defect in offspring)</li>
    <li>Medically significant (important medical event per investigator judgment)</li>
  </ul>
</div>

<div class="pv-trigger-grid">
  <div class="pv-trigger-cell">
    <div class="pv-trigger-label">Serious + Unexpected</div>
    <div class="pv-trigger-value">15-day expedited report</div>
  </div>
  <div class="pv-trigger-cell">
    <div class="pv-trigger-label">Serious + Expected</div>
    <div class="pv-trigger-value">Periodic reporting only</div>
  </div>
  <div class="pv-trigger-cell">
    <div class="pv-trigger-label">Non-serious</div>
    <div class="pv-trigger-value">Periodic reporting only</div>
  </div>
</div>

<div class="pv-rule-callout">
  <div class="pv-callout-label">15-Day Expedited Report Rule — 21 CFR 314.80(c)(1)(i)</div>
  <p>A case must be BOTH serious AND unexpected (not listed in the RSI) to trigger a 15-day expedited report. A serious but expected event goes into periodic reporting. A non-serious event goes into periodic reporting regardless of expectedness. Expectedness is assessed against the RSI, typically the CCDS or local Product Information (PI).</p>
</div>

{% include interactive/reporting-timeline.html %}

### The Argus ICSR processing workflow

<div class="pv-workflow">
  <div class="pv-workflow-steps">
    <div class="pv-workflow-step">Case Receipt</div>
    <div class="pv-workflow-arrow">›</div>
    <div class="pv-workflow-step">Duplicate Check</div>
    <div class="pv-workflow-arrow">›</div>
    <div class="pv-workflow-step">Case Check-in</div>
    <div class="pv-workflow-arrow">›</div>
    <div class="pv-workflow-step">Data Entry</div>
    <div class="pv-workflow-arrow">›</div>
    <div class="pv-workflow-step">Quality Control</div>
    <div class="pv-workflow-arrow">›</div>
    <div class="pv-workflow-step">Medical Review</div>
    <div class="pv-workflow-arrow">›</div>
    <div class="pv-workflow-step pv-workflow-final">Submission FAERS</div>
  </div>
  <p class="pv-workflow-note">QC fail loop: cases that fail QC return to Data Entry for correction before proceeding.</p>
</div>

<div class="pv-section-label">Section 2: Medical Device Reporting</div>

## What is medical device reporting?

Medical Device Reporting (MDR) is the mandatory system by which manufacturers, importers, and device user facilities report device-related deaths, serious injuries, and malfunctions to regulatory authorities. Just like PV in pharma, the goal is to detect safety signals, protect patients, and trigger corrective action where needed.

<div class="pv-definition-callout">
  <div class="pv-callout-label">FDA Definition</div>
  <p>"The MDR regulation contains mandatory requirements for manufacturers, importers, and device user facilities to report certain device-related adverse events and product problems to the FDA." — U.S. FDA, 21 CFR Part 803</p>
</div>

### Key regulations governing MDR

<div class="pv-reg-cards">
  <div class="pv-reg-card">
    <div class="pv-reg-card-title">21 CFR Part 803</div>
    <div class="pv-reg-card-subtitle">US FDA — MDR regulation</div>
    <p>Primary US regulation. Covers manufacturers (30-day and 5-work-day reports), importers, and device user facilities (10-day).</p>
    <a class="pv-reg-card-link" href="https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-803" target="_blank" rel="noopener">View on eCFR →</a>
  </div>
  <div class="pv-reg-card">
    <div class="pv-reg-card-title">EU MDR 2017/745</div>
    <div class="pv-reg-card-subtitle">EU — medical devices regulation</div>
    <p>Article 87 governs serious incident reporting timelines. Submission via EUDAMED to national CAs and Notified Body.</p>
    <a class="pv-reg-card-link" href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0745" target="_blank" rel="noopener">View on EUR-Lex →</a>
  </div>
  <div class="pv-reg-card">
    <div class="pv-reg-card-title">FDA MDR Guidance</div>
    <div class="pv-reg-card-subtitle">US FDA — how to report</div>
    <p>Covers MedWatch 3500A, MAUDE database submission, and mandatory vs voluntary reporting.</p>
    <a class="pv-reg-card-link" href="https://www.fda.gov/medical-devices/medical-device-safety/medical-device-reporting-mdr-how-report-medical-device-problems" target="_blank" rel="noopener">View on FDA.gov →</a>
  </div>
</div>

### Who must report under 21 CFR Part 803?

Unlike PV where the MAH bears primary responsibility, MDR splits obligations across three distinct groups:

<div class="pv-compare-cols">
  <div class="pv-compare-col pv-col-left">
    <div class="pv-compare-col-title">Manufacturers</div>
    <ul>
      <li>Report death, serious injury, and malfunctions within 30 calendar days</li>
      <li>Urgent events within 5 work days</li>
      <li>Most comprehensive obligations under Part 803</li>
    </ul>
  </div>
  <div class="pv-compare-col pv-col-right">
    <div class="pv-compare-col-title">Importers</div>
    <ul>
      <li>Report death and serious injury to FDA and manufacturer within 30 days</li>
      <li>Report malfunctions to manufacturer only</li>
      <li>Governed by 21 CFR 803.40</li>
    </ul>
  </div>
</div>

<div class="pv-rule-callout">
  <div class="pv-callout-label">Device User Facilities</div>
  <p>Hospitals and health care centers report deaths to FDA and manufacturer, serious injuries to manufacturer only, within 10 work days. Governed by 21 CFR 803.30.</p>
</div>

### EU MDR 2017/745 Article 87 — reporting timelines

<table class="pv-mdr-timeline-table">
  <thead>
    <tr>
      <th>Event type</th>
      <th>Timeline</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Serious public health threat</td>
      <td><strong>Within 2 calendar days</strong></td>
    </tr>
    <tr>
      <td>Death or unanticipated serious deterioration</td>
      <td><strong>Within 10 calendar days</strong></td>
    </tr>
    <tr>
      <td>Any other reportable serious incident</td>
      <td><strong>Within 15 calendar days</strong></td>
    </tr>
    <tr>
      <td>Field safety corrective action (FSCA)</td>
      <td><strong>In advance of action</strong></td>
    </tr>
    <tr>
      <td>Submission platform</td>
      <td><strong>EUDAMED</strong> (national CAs until fully operational)</td>
    </tr>
    <tr>
      <td>Also notify</td>
      <td><strong>Notified Body</strong> for Class IIa, IIb, III devices</td>
    </tr>
  </tbody>
</table>

### MDR reportability criteria

Under 21 CFR Part 803, a device event is reportable when:

- The device may have caused or contributed to **death** (30-day report)
- The device may have caused or contributed to **serious injury** (30-day report)
- The device **malfunctioned** AND would likely cause death or serious injury if the malfunction recurred (30-day report)
- Remedial action is required to prevent unreasonable risk to public health (**5 work-day report**)

<div class="pv-rule-callout">
  <div class="pv-callout-label">The Malfunction Rule — Unique to MDR</div>
  <p>Under 21 CFR 803.50(a)(2), a manufacturer must report a malfunction even if no patient was harmed, as long as the malfunction would likely cause or contribute to death or serious injury if it were to recur. This predictive, risk-based reporting has no direct equivalent in pharmaceutical PV.</p>
</div>

<div class="pv-rule-callout">
  <div class="pv-callout-label">Certainty Not Required</div>
  <p>The reporting threshold is whether information "reasonably suggests" device involvement, not whether the device definitively caused the event. This mirrors the PV principle that all suspected reactions should be reported regardless of confirmed causality.</p>
</div>

### The MDR event reporting workflow

<div class="pv-workflow">
  <div class="pv-workflow-steps">
    <div class="pv-workflow-step">Event Receipt</div>
    <div class="pv-workflow-arrow">›</div>
    <div class="pv-workflow-step">Reportability Assessment</div>
    <div class="pv-workflow-arrow">›</div>
    <div class="pv-workflow-step">Event Investigation</div>
    <div class="pv-workflow-arrow">›</div>
    <div class="pv-workflow-step">QMS Data Entry</div>
    <div class="pv-workflow-arrow">›</div>
    <div class="pv-workflow-step">Quality Review</div>
    <div class="pv-workflow-arrow">›</div>
    <div class="pv-workflow-step">Regulatory Review</div>
    <div class="pv-workflow-arrow">›</div>
    <div class="pv-workflow-step pv-workflow-final">Submission MAUDE</div>
  </div>
  <p class="pv-workflow-note">Review fail loop: cases that fail quality review return to QMS data entry for correction.</p>
</div>

<div class="pv-systems-grid">
  <div class="pv-systems-col">
    <div class="pv-systems-title">Drug PV processing systems</div>
    <ul>
      <li>Argus Safety (Oracle)</li>
      <li>Veeva Vault Safety</li>
      <li>ArisGlobal LifeSphere</li>
      <li>Destination: FAERS / EudraVigilance</li>
    </ul>
  </div>
  <div class="pv-systems-col">
    <div class="pv-systems-title">Medical device processing systems</div>
    <ul>
      <li>Greenlight Guru</li>
      <li>MasterControl</li>
      <li>Veeva Vault QualityDocs</li>
      <li>Destination: MAUDE / EUDAMED</li>
    </ul>
  </div>
</div>

<div class="pv-section-label">Section 3 — Where They Diverge</div>

## Key differences you need to know

The frameworks are parallel but they are not identical. Here are the five most important differences between pharmacovigilance and medical device reporting.

<div class="pv-diff-item">
  <h4>1. Malfunction reporting is unique to MDR</h4>
  <p>In PV, you report harm that already happened to a patient. In MDR, you also report device malfunctions that have not yet caused harm but would likely cause death or serious injury if they recurred. This predictive, risk-based reporting requirement has no equivalent in pharmaceutical PV.</p>
  <div class="pv-compare-cols">
    <div class="pv-compare-col pv-col-left">
      <div class="pv-compare-col-title">PV</div>
      <ul>
        <li>Report adverse reactions only</li>
        <li>No harm, no report</li>
      </ul>
    </div>
    <div class="pv-compare-col pv-col-right">
      <div class="pv-compare-col-title">MDR</div>
      <ul>
        <li>Report harm AND malfunctions</li>
        <li>Reportable even with no patient harmed yet</li>
      </ul>
    </div>
  </div>
</div>

<div class="pv-diff-item">
  <h4>2. Who bears reporting responsibility</h4>
  <p>In PV, the MAH bears primary reporting responsibility. Under 21 CFR Part 803, obligations are split across three distinct groups with separate timelines and submission targets. Device user facilities like hospitals have their own independent reporting obligations that do not exist in pharmaceutical PV.</p>
  <div class="pv-compare-cols">
    <div class="pv-compare-col pv-col-left">
      <div class="pv-compare-col-title">PV</div>
      <ul>
        <li>MAH is primary responsible party</li>
        <li>Single reporting obligation</li>
      </ul>
    </div>
    <div class="pv-compare-col pv-col-right">
      <div class="pv-compare-col-title">MDR</div>
      <ul>
        <li>Manufacturer + importer + device user facility</li>
        <li>Three separate obligations and timelines</li>
      </ul>
    </div>
  </div>
</div>

<div class="pv-diff-item">
  <h4>3. Notified Bodies are a device-specific layer</h4>
  <p>Under EU MDR 2017/745, Class IIa, IIb, and III devices require independent third-party assessment by a Notified Body before CE marking. There is no equivalent in EU pharmaceutical regulation.</p>
  <div class="pv-compare-cols">
    <div class="pv-compare-col pv-col-left">
      <div class="pv-compare-col-title">PV (EU)</div>
      <ul>
        <li>EMA and national CAs are direct regulators</li>
        <li>No third-party certification required</li>
      </ul>
    </div>
    <div class="pv-compare-col pv-col-right">
      <div class="pv-compare-col-title">MDR (EU)</div>
      <ul>
        <li>Notified Body independently assesses and certifies</li>
        <li>Vigilance reports also go to Notified Body</li>
      </ul>
    </div>
  </div>
</div>

<div class="pv-diff-item">
  <h4>4. Causality assessment approach</h4>
  <p>In PV, causality is assessed using standardized scales such as Naranjo and WHO-UMC. In MDR, the question is more engineering-focused: did the device malfunction, and did that malfunction cause or contribute to the event?</p>
  <div class="pv-compare-cols">
    <div class="pv-compare-col pv-col-left">
      <div class="pv-compare-col-title">PV</div>
      <ul>
        <li>Naranjo / WHO-UMC causality scales</li>
        <li>Clinical judgment on drug-reaction relationship</li>
      </ul>
    </div>
    <div class="pv-compare-col pv-col-right">
      <div class="pv-compare-col-title">MDR</div>
      <ul>
        <li>Engineering and clinical judgment combined</li>
        <li>Did device malfunction? Did it contribute to harm?</li>
      </ul>
    </div>
  </div>
</div>

<div class="pv-diff-item">
  <h4>5. Reporting timelines and triggers</h4>
  <p>PV expedited reporting is triggered by seriousness AND unexpectedness. MDR has no expectedness assessment. If reportable, the 30-day clock starts regardless of whether the event was anticipated in the device labeling.</p>
  <div class="pv-compare-cols">
    <div class="pv-compare-col pv-col-left">
      <div class="pv-compare-col-title">PV</div>
      <ul>
        <li>Serious AND unexpected = 15-day expedited</li>
        <li>Serious but expected = periodic only</li>
      </ul>
    </div>
    <div class="pv-compare-col pv-col-right">
      <div class="pv-compare-col-title">MDR</div>
      <ul>
        <li>Reportable event = 30-day report</li>
        <li>No expectedness filter applied</li>
      </ul>
    </div>
  </div>
</div>

<div class="pv-section-label">Section 4 — Where They Meet</div>

## The common ground

Despite their differences, PV and MDR share more than most professionals realize.

<div class="pv-common-grid">
  <div class="pv-common-card">
    <div class="pv-common-card-title">Same submission form</div>
    <p>MedWatch 3500A is used for both drug and device reporting in the US. Same form, same FDA portal.</p>
  </div>
  <div class="pv-common-card">
    <div class="pv-common-card-title">Same aggregate report name</div>
    <p>PSUR exists in both frameworks. EU MDR requires Periodic Safety Update Reports for devices.</p>
  </div>
  <div class="pv-common-card">
    <div class="pv-common-card-title">Same core mission</div>
    <p>Detect harm. Assess it. Report it. Prevent it. The product changes. The mission does not.</p>
  </div>
  <div class="pv-common-card">
    <div class="pv-common-card-title">MedDRA convergence</div>
    <p>MedDRA coding is increasingly adopted in device safety databases, especially for combination products and SaMD.</p>
  </div>
  <div class="pv-common-card">
    <div class="pv-common-card-title">Post-market surveillance</div>
    <p>Both systems require structured PMS plans. EU MDR Article 83 mirrors the pharma PMS framework.</p>
  </div>
  <div class="pv-common-card">
    <div class="pv-common-card-title">Signal detection</div>
    <p>Both FAERS and MAUDE are used for signal detection by FDA using the same analytical methodology.</p>
  </div>
</div>

{% include interactive/signal-detection.html %}

<div class="pv-combo-box">
  <h4>Combination products: where both worlds collide</h4>
  <p>Combination products sit at the exact intersection of PV and MDR. A drug-device combination must comply with both frameworks simultaneously. As combination products grow in the market, professionals with fluency in both systems will be increasingly rare and valuable.</p>
  <div class="pv-combo-tags"><span class="tag-pill">Drug-eluting stent</span> <span class="tag-pill">Prefilled syringe</span> <span class="tag-pill">Drug-device inhaler</span> <span class="tag-pill">Insulin pen</span> <span class="tag-pill">Transdermal patch</span> <span class="tag-pill">Drug-coated balloon</span></div>
</div>

<div class="pv-did-you-know">
  <div class="pv-dyk-label">Did You Know?</div>
  <h4>There are two MedWatch forms — and they work together</h4>
  <p>MedWatch 3500A is the mandatory form used by manufacturers, MAHs, importers, and user facilities. But many of those reports are triggered by a MedWatch 3500B, the voluntary form used by healthcare professionals, patients, and consumers. The 3500B is how real-world safety signals first enter the system.</p>
  <div class="pv-medwatch-flow">
    <div class="pv-medwatch-card">
      <div class="pv-medwatch-title">MedWatch 3500B</div>
      <div class="pv-medwatch-sub">Voluntary reporting</div>
      <div class="pv-medwatch-sub">HCPs / patients / consumers</div>
    </div>
    <div class="pv-medwatch-arrow">&lt;</div>
    <div class="pv-medwatch-card">
      <div class="pv-medwatch-title">MedWatch 3500A</div>
      <div class="pv-medwatch-sub">Mandatory reporting</div>
      <div class="pv-medwatch-sub">Manufacturers / MAHs</div>
    </div>
  </div>
</div>

<div class="pv-section-label">Section 5 — Translation Dictionary</div>

## PV to MDR: side by side

If you know pharmacovigilance, you already speak most of the MDR language. Here is your direct translation guide.

<div class="pv-translation-table-wrap">
<table class="pv-translation-table">
  <thead>
    <tr>
      <th>PV — Drugs and biologics</th>
      <th></th>
      <th>MDR — Medical devices</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="pv-tt-label">Core Reporting Unit</span><span class="pv-tt-value">ICSR — Individual Case Safety Report</span></td>
      <td>=</td>
      <td><span class="pv-tt-label">Core Reporting Unit</span><span class="pv-tt-value">MDR — Medical Device Report</span></td>
    </tr>
    <tr>
      <td><span class="pv-tt-label">US Regulation</span><span class="pv-tt-value">21 CFR 312.32 / 314.80 / 314.81</span></td>
      <td>=</td>
      <td><span class="pv-tt-label">US Regulation</span><span class="pv-tt-value">21 CFR Part 803</span></td>
    </tr>
    <tr>
      <td><span class="pv-tt-label">EU Regulation</span><span class="pv-tt-value">GVP Module VI</span></td>
      <td>=</td>
      <td><span class="pv-tt-label">EU Regulation</span><span class="pv-tt-value">EU MDR 2017/745 Article 87</span></td>
    </tr>
    <tr>
      <td><span class="pv-tt-label">Global Standard</span><span class="pv-tt-value">ICH E2A / ICH E2B(R3)</span></td>
      <td>=</td>
      <td><span class="pv-tt-label">Global Standard</span><span class="pv-tt-value">IMDRF guidelines</span></td>
    </tr>
    <tr>
      <td><span class="pv-tt-label">Processing System</span><span class="pv-tt-value">Argus Safety / Veeva Vault Safety / ArisGlobal</span></td>
      <td>≠</td>
      <td><span class="pv-tt-label">Processing System</span><span class="pv-tt-value">QMS: Greenlight Guru / MasterControl / Veeva Vault</span></td>
    </tr>
    <tr>
      <td><span class="pv-tt-label">Expedited Timeline</span><span class="pv-tt-value">15 calendar days (serious + unexpected)</span></td>
      <td>≈</td>
      <td><span class="pv-tt-label">Standard Timeline</span><span class="pv-tt-value">30 calendar days (death, serious injury, malfunction)</span></td>
    </tr>
    <tr>
      <td><span class="pv-tt-label">Urgent Timeline</span><span class="pv-tt-value">7-day IND report (fatal / life-threatening SUSAR)</span></td>
      <td>≈</td>
      <td><span class="pv-tt-label">Urgent Timeline</span><span class="pv-tt-value">5 work days (unreasonable risk to public health)</span></td>
    </tr>
    <tr>
      <td><span class="pv-tt-label">Expectedness Reference</span><span class="pv-tt-value">RSI — CCDS / Product Information (PI)</span></td>
      <td>≈</td>
      <td><span class="pv-tt-label">Expectedness Reference</span><span class="pv-tt-value">Device labeling / Instructions for Use (IFU)</span></td>
    </tr>
    <tr>
      <td><span class="pv-tt-label">Primary Responsible Party</span><span class="pv-tt-value">MAH — Marketing Authorization Holder</span></td>
      <td>=</td>
      <td><span class="pv-tt-label">Primary Responsible Party</span><span class="pv-tt-value">Manufacturer + importer + user facility</span></td>
    </tr>
    <tr>
      <td><span class="pv-tt-label">US Safety Database</span><span class="pv-tt-value">FAERS — FDA Adverse Event Reporting System</span></td>
      <td>≠</td>
      <td><span class="pv-tt-label">US Safety Database</span><span class="pv-tt-value">MAUDE — Manufacturer and User Facility Device Experience</span></td>
    </tr>
    <tr>
      <td><span class="pv-tt-label">EU Safety Database</span><span class="pv-tt-value">EudraVigilance</span></td>
      <td>≠</td>
      <td><span class="pv-tt-label">EU Safety Database</span><span class="pv-tt-value">EUDAMED</span></td>
    </tr>
    <tr>
      <td><span class="pv-tt-label">Submission Form (US)</span><span class="pv-tt-value">MedWatch 3500A</span></td>
      <td>=</td>
      <td><span class="pv-tt-label">Submission Form (US)</span><span class="pv-tt-value">MedWatch 3500A</span></td>
    </tr>
    <tr>
      <td><span class="pv-tt-label">Coding Terminology</span><span class="pv-tt-value">MedDRA — PT and SOC</span></td>
      <td>≈</td>
      <td><span class="pv-tt-label">Coding Terminology</span><span class="pv-tt-value">Device problem codes / MedDRA (increasingly adopted)</span></td>
    </tr>
    <tr>
      <td><span class="pv-tt-label">Aggregate Reporting</span><span class="pv-tt-value">PSUR / PBRER / PADER</span></td>
      <td>≈</td>
      <td><span class="pv-tt-label">Aggregate Reporting</span><span class="pv-tt-value">PSUR (EU MDR) / Annual MDR summary reports (US)</span></td>
    </tr>
    <tr>
      <td><span class="pv-tt-label">Post-Market Surveillance</span><span class="pv-tt-value">Post-Marketing Surveillance / RMP</span></td>
      <td>=</td>
      <td><span class="pv-tt-label">Post-Market Surveillance</span><span class="pv-tt-value">Post-Market Surveillance plan (EU MDR Article 83)</span></td>
    </tr>
  </tbody>
</table>
</div>

<p class="pv-symbol-key"><em>Symbol key: = identical &nbsp;&nbsp; ≈ equivalent &nbsp;&nbsp; ≠ different</em></p>

<div class="pv-unique-grid">
  <div class="pv-unique-col">
    <div class="pv-unique-title pv-side">Unique to PV — no MDR equivalent</div>
    <ul>
      <li>Expectedness against RSI — listed vs unlisted drives reporting obligation</li>
      <li>MedDRA coding — PT, SOC, HLT, HLGT hierarchy for signal detection</li>
      <li>Causality scales — Naranjo, WHO-UMC for drug-event relationship</li>
      <li>Case narrative — structured chronological summary in standardized format per ICH E2B</li>
      <li>ICH E2B(R3) XML format for electronic ICSR transmission</li>
    </ul>
  </div>
  <div class="pv-unique-col">
    <div class="pv-unique-title mdr-side">Unique to MDR — no PV equivalent</div>
    <ul>
      <li>Malfunction reporting — reportable even when no patient was harmed yet</li>
      <li>Three reporter types — manufacturer, importer, device user facility</li>
      <li>Notified Body involvement for Class IIa, IIb, III devices (EU)</li>
      <li>Field Safety Corrective Actions (FSCAs) — device recalls reported separately</li>
      <li>MDR event file — retained for device expected life plus 2 years</li>
    </ul>
  </div>
</div>

---

## Two systems. One mission.

*When I started my masters in Regulatory Affairs at Northeastern, I had already spent years in pharmacovigilance. Processing ICSRs, coding MedDRA terms, writing aggregate reports. I thought I knew safety reporting. Then I encountered medical device regulatory requirements for the first time, and my first instinct was that this was a completely different world.*

*It is not. And that realization changed how I think about both domains.*

The regulations are different. The timelines are different. The terminology is different. But the underlying logic, detect harm, assess it systematically, report it accurately, prevent it from happening again, is identical. That logic does not change whether you are processing an ICSR in Argus or assessing a device malfunction under 21 CFR Part 803.

If you come from pharmacovigilance, you are not starting from zero when you look at medical device reporting. You are translating. And translation is a skill you already have. The 4 elements of a valid ICSR map directly onto the MDR event file. The seriousness criteria in PV mirror the reportability triggers in MDR. Even the submission form is the same, MedWatch 3500A on both sides.

The field is moving toward convergence. Combination products, AI-enabled devices, drug-device combinations require PV and MDR expertise simultaneously. Professionals who can operate fluently in both domains will be increasingly rare and increasingly valuable.

<div class="pv-definition-callout">
  <p><em>Patient safety is patient safety. The product changes. The mission does not.</em></p>
</div>

This article is the starting point. The regulations, the flowcharts, the translation dictionary, use them. Go deeper into 21 CFR Part 803. Read EU MDR 2017/745 Article 87. The frameworks are not as intimidating as they first appear, especially when you already speak the language underneath.

---

## References

1. 21 CFR Part 312.32 — IND Safety Reporting. [https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D)
2. 21 CFR Part 314.80 — Postmarketing reporting of adverse drug experiences. [https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D)
3. 21 CFR Part 314.81 — Other postmarketing reports. [https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D)
4. 21 CFR Part 803 — Medical Device Reporting. [https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H)
5. EMA. Guideline on good pharmacovigilance practices (GVP) Module VI Rev 2. EMA/873138/2011. [https://www.ema.europa.eu/en/documents/regulatory-procedural-guideline/guideline-good-pharmacovigilance-practices-gvp-module-vi-collection-management-and-submission-reports_en.pdf](https://www.ema.europa.eu/en/documents/regulatory-procedural-guideline/guideline-good-pharmacovigilance-practices-gvp-module-vi-collection-management-and-submission-reports_en.pdf)
6. Regulation (EU) 2017/745 on medical devices. Official Journal of the European Union. [https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0745](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0745)
7. FDA. Medical Device Reporting (MDR): How to Report Medical Device Problems. [https://www.fda.gov/medical-devices/medical-device-safety/medical-device-reporting-mdr-how-report-medical-device-problems](https://www.fda.gov/medical-devices/medical-device-safety/medical-device-reporting-mdr-how-report-medical-device-problems)
8. FDA. Mandatory Reporting Requirements: Manufacturers, Importers and Device User Facilities. [https://www.fda.gov/medical-devices/postmarket-requirements-devices/mandatory-reporting-requirements-manufacturers-importers-and-device-user-facilities](https://www.fda.gov/medical-devices/postmarket-requirements-devices/mandatory-reporting-requirements-manufacturers-importers-and-device-user-facilities)
9. ICH E2A: Clinical Safety Data Management. [https://www.ich.org/page/safety-guidelines](https://www.ich.org/page/safety-guidelines)
10. ICH E2B(R3): Electronic Transmission of Individual Case Safety Reports. [https://www.ich.org/page/safety-guidelines](https://www.ich.org/page/safety-guidelines)
11. International Medical Device Regulators Forum (IMDRF). Guidelines. [http://www.imdrf.org/](http://www.imdrf.org/)
12. WHO. The Importance of Pharmacovigilance. Geneva: World Health Organization.
13. FDA. FAERS Public Dashboard. [https://www.fda.gov/drugs/questions-and-answers-fdas-adverse-event-reporting-system-faers/fda-adverse-event-reporting-system-faers-public-dashboard](https://www.fda.gov/drugs/questions-and-answers-fdas-adverse-event-reporting-system-faers/fda-adverse-event-reporting-system-faers-public-dashboard)
14. FDA. MAUDE Adverse Event Reporting. [https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfmaude/search.cfm](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfmaude/search.cfm)
15. European Commission. EUDAMED European Database on Medical Devices. [https://ec.europa.eu/tools/eudamed](https://ec.europa.eu/tools/eudamed)
