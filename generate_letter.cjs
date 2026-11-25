const fs = require('fs');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Application Letter - Kris Charls M. Anore</title>
<style>
  @page {
    size: A4 portrait;
    margin: 0;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    color: #000000;
    background-color: #ffffff;
    font-size: 11.5px;
    line-height: 1.5;
  }
  .page {
    width: 210mm;
    height: 297mm;
    padding: 20mm 22mm 20mm 22mm;
    margin: 0 auto;
    position: relative;
    page-break-after: always;
    overflow: hidden;
    background: #fff;
  }
  
  /* Top contact bar */
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    letter-spacing: 0.1px;
  }
  .top-divider {
    border: none;
    border-bottom: 1.5px solid #000000;
    margin-top: 6px;
    margin-bottom: 22px;
  }
  
  .sender-info {
    margin-bottom: 20px;
  }
  .sender-name {
    font-size: 20px;
    font-weight: bold;
    color: #000000;
  }
  .sender-role {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #000000;
    margin-top: 2px;
  }
  
  .letter-date {
    font-size: 11.5px;
    margin-bottom: 18px;
    color: #000000;
  }
  
  .recipient-block {
    margin-bottom: 20px;
    font-size: 11.5px;
    line-height: 1.45;
    color: #000000;
  }
  
  .salutation {
    font-size: 11.5px;
    font-weight: bold;
    margin-bottom: 14px;
    color: #000000;
  }
  
  .letter-body p {
    margin-bottom: 14px;
    text-align: justify;
    font-size: 11.5px;
    line-height: 1.55;
    color: #000000;
  }
  
  .sign-off {
    margin-top: 24px;
    font-size: 11.5px;
    color: #000000;
  }
  .sign-name {
    margin-top: 45px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    color: #000000;
  }
  .sign-title {
    font-size: 11px;
    color: #000000;
  }
</style>
</head>
<body>

<div class="page">
  <!-- Top Bar -->
  <div class="top-bar">
    <span>(+639) 67 291 8968</span>
    <span>Sta. Maria, Bulacan</span>
    <span>kmanore3010val@student.fatima.edu.ph</span>
    <span>September 06, 2005</span>
  </div>
  <div class="top-divider"></div>

  <div class="sender-info">
    <div class="sender-name">Kris Charls M. Anore</div>
    <div class="sender-role">Applicant – Staff Nurse Position</div>
  </div>

  <div class="letter-date">November 18, 2026</div>

  <div class="recipient-block">
    <strong>PROF. CHEN GO MASAYON, RN, MAN</strong><br>
    Hiring Manager / Human Resources Department<br>
    Fatima University Medical Center (FUMC)<br>
    MacArthur Highway, Marulas, Valenzuela City, Metro Manila
  </div>

  <div class="salutation">Dear Prof. Masayon,</div>

  <div class="letter-body">
    <p>
      I am writing to formally submit my application for the <strong>Staff Nurse</strong> position at Fatima University Medical Center (FUMC Hospital). As a dedicated Bachelor of Science in Nursing graduate from Our Lady of Fatima University – Valenzuela Campus, I am eager to contribute my clinical competencies, disciplined patient care ethic, and foundational values of empathy and precision to your esteemed healthcare institution.
    </p>

    <p>
      Throughout my comprehensive undergraduate clinical training, I completed rigorous duty rotations across diverse healthcare settings. My experience includes triage assessment and acute interventions in the Emergency Room at ACE Medical Center; maternal and immediate newborn care in the Delivery Rooms of Bulacan Medical Center and Meycauayan Doctors Hospital; bedside monitoring, wound care, and medication administration at Veterans Memorial Medical Center; and therapeutic psychiatric communication at the National Center for Mental Health. Furthermore, during my Operating Room rotation at Fatima University Medical Center, I developed profound respect for strict aseptic techniques, sterile field integrity, and collaborative surgical safety checklists.
    </p>

    <p>
      In addition to my bedside clinical competencies, I hold validated First Aid and Basic Life Support (BLS) training from the Philippine Red Cross. I pride myself on exceptional punctuality, emotional maturity, adaptable teamwork, and strict adherence to hospital protocols. Having experienced FUMC’s commitment to patient-centered clinical excellence firsthand during my clinical affiliations, I am deeply inspired to uphold your hospital's reputation for compassionate and safe patient care.
    </p>

    <p>
      Enclosed with this letter is my complete resume detailing my academic background, clinical rotations, skills, and professional certifications. Thank you very much for your time and kind consideration. I welcome the opportunity for an interview to discuss how my qualifications align with the nursing team at Fatima University Medical Center.
    </p>
  </div>

  <div class="sign-off">
    Respectfully yours,
    <div class="sign-name">Kris Charls M. Anore, BSN</div>
    <div class="sign-title">Applicant</div>
  </div>
</div>

</body>
</html>`;

fs.writeFileSync('c:/Users/ezekiel/Desktop/WebPortfolio/Kris_Charls_Anore_Application_Letter.html', htmlContent);
console.log('Application letter written successfully');