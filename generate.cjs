const fs = require('fs');

const imgPath = 'C:/Users/ezekiel/.gemini/antigravity/brain/2f22508f-fa75-4ebb-9fb0-c91a2ce6d0f2/.user_uploaded/media_1794980629053_56c46074.jpg';
const imgBase64 = fs.readFileSync(imgPath).toString('base64');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Resume - Kris Charls M. Anore</title>
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
    line-height: 1.4;
  }
  .page {
    width: 210mm;
    height: 297mm;
    padding: 16mm 20mm 16mm 20mm;
    margin: 0 auto;
    position: relative;
    page-break-after: always;
    overflow: hidden;
    background: #fff;
    display: flex;
    flex-direction: column;
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
    margin-bottom: 14px;
  }
  
  /* Split Header */
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 18px;
    margin-bottom: 12px;
  }
  .header-left {
    flex: 1;
  }
  .full-name {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: -0.3px;
    color: #000000;
    margin-bottom: 2px;
  }
  .target-title {
    font-size: 12.5px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #000000;
    margin-bottom: 12px;
  }
  .section-title {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    color: #000000;
    margin-top: 14px;
    margin-bottom: 6px;
    letter-spacing: 0.2px;
  }
  .header-left .section-title {
    margin-top: 0;
    margin-bottom: 5px;
  }
  .profile-text {
    font-size: 11.5px;
    line-height: 1.4;
    text-align: justify;
    color: #000000;
  }
  
  /* Photo Box */
  .header-right {
    flex-shrink: 0;
  }
  .photo-frame {
    width: 115px;
    height: 140px;
    border: 1px solid #000000;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f7;
  }
  .photo-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  /* Dividers */
  .section-divider {
    border: none;
    border-bottom: 1px solid #000000;
    margin: 16px 0 14px 0;
  }
  .projects-divider {
    border: none;
    border-bottom: 1.5px solid #000000;
    margin-top: 5px;
    margin-bottom: 14px;
  }
  
  /* Item Formatting */
  .item-group {
    margin-bottom: 10px;
  }
  .bullet-title {
    font-size: 11.5px;
    font-weight: bold;
    color: #000000;
  }
  .bullet-title-upper {
    font-size: 11.5px;
    font-weight: bold;
    text-transform: uppercase;
    color: #000000;
  }
  .item-subtext {
    font-size: 11px;
    color: #000000;
    margin-left: 14px;
    margin-top: 2px;
    line-height: 1.35;
  }
  .bullet-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .bullet-list li {
    position: relative;
    padding-left: 14px;
    margin-bottom: 5px;
    font-size: 11.5px;
    line-height: 1.4;
    color: #000000;
  }
  .bullet-list li::before {
    content: "\u2022";
    position: absolute;
    left: 0;
    font-weight: bold;
    font-size: 13px;
  }
  
  /* Personal Info Grid */
  .personal-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 4px;
    column-gap: 24px;
    margin-bottom: 6px;
  }
  .personal-grid div {
    position: relative;
    padding-left: 14px;
    font-size: 11.5px;
  }
  .personal-grid div::before {
    content: "\u2022";
    position: absolute;
    left: 0;
    font-weight: bold;
    font-size: 13px;
  }
  
  /* Affiliation Entry on Page 2 */
  .affiliation-item {
    margin-bottom: 12px;
  }
  .affiliation-title {
    font-size: 11.5px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 3px;
  }
  .affiliation-item .bullet-list li {
    margin-bottom: 3px;
  }
</style>
</head>
<body>

<!-- PAGE 1 -->
<div class="page">
  <!-- Top Bar -->
  <div class="top-bar">
    <span>(+639) 67 291 8968</span>
    <span>Sta. Maria, Bulacan</span>
    <span>kmanore3010val@student.fatima.edu.ph</span>
    <span>September 06, 2005</span>
  </div>
  <div class="top-divider"></div>

  <!-- Header: Name, Title, Objective & Photo -->
  <div class="header-container">
    <div class="header-left">
      <div class="full-name">Kris Charls M. Anore</div>
      <div class="target-title">STAFF NURSE</div>
      
      <div class="section-title">CAREER OBJECTIVE</div>
      <div class="profile-text">
        Dedicated Bachelor of Science in Nursing graduate seeking a Staff Nurse position at FUMC Hospital. Committed to utilizing comprehensive clinical training across Operating Room, Delivery Room, Medical-Surgical, Emergency, Psychiatric, and Geriatric units to uphold institutional standards of safety, clinical excellence, and patient-centered care.
      </div>
    </div>
    <div class="header-right">
      <div class="photo-frame">
        <img src="data:image/jpeg;base64,` + imgBase64 + `" alt="Kris Charls M. Anore" />
      </div>
    </div>
  </div>

  <!-- Personal Information -->
  <div class="section-title">PERSONAL INFORMATION</div>
  <div class="personal-grid">
    <div><strong>Date of Birth:</strong> September 6, 2005</div>
    <div><strong>Civil Status:</strong> Single</div>
    <div><strong>Age:</strong> 21</div>
    <div><strong>Nationality:</strong> Filipino</div>
    <div><strong>Sex:</strong> Female</div>
    <div><strong>Address:</strong> Burgundy Homes, Sta. Maria, Bulacan</div>
  </div>

  <!-- Educational Background -->
  <div class="section-title" style="margin-top: 15px;">EDUCATIONAL BACKGROUND</div>
  
  <div class="item-group">
    <div class="bullet-title-upper">• BACHELOR OF SCIENCE IN NURSING, 2023 – 2027</div>
    <div class="item-subtext">Our Lady of Fatima University – Valenzuela Campus</div>
  </div>

  <div class="item-group" style="margin-bottom: 4px;">
    <div class="bullet-title-upper">• SCIENCE, TECHNOLOGY, ENGINEERING, AND MATHEMATICS (STEM), GRADUATED</div>
    <div class="item-subtext">Immaculate Conception Polytechnic – Sta. Maria, Bulacan</div>
  </div>

  <!-- Divider -->
  <div class="section-divider"></div>

  <!-- Nursing Skills and Competencies -->
  <div class="section-title" style="margin-top: 4px;">NURSING SKILLS AND COMPETENCIES</div>
  <ul class="bullet-list">
    <li><strong>Clinical & Technical Skills:</strong> Vital signs monitoring, medication administration (under supervision), aseptic technique, wound care, geriatric and bedside patient assessment, and accurate clinical documentation.</li>
    <li><strong>Time Management & Punctuality:</strong> Highly punctual and dependable; consistently arrives ahead of shift schedules to ensure thorough endorsement and seamless patient care transitions.</li>
    <li><strong>Interpersonal & Soft Skills:</strong> Empathetic patient communication, active listening, adaptability across diverse clinical settings, and strong teamwork with multidisciplinary healthcare staff.</li>
  </ul>

  <!-- Seminars, Trainings, and Certifications -->
  <div class="section-title" style="margin-top: 16px;">SEMINARS, TRAININGS, AND CERTIFICATIONS</div>
  <div class="item-group" style="margin-bottom: 0;">
    <div class="bullet-title">• First Aid / Basic Life Support (BLS) Training</div>
    <div class="item-subtext">Philippine Red Cross | 2026 | Certified Healthcare Provider</div>
  </div>
</div>

<!-- PAGE 2 -->
<div class="page">
  <div class="section-title" style="margin-top: 0;">CLINICAL AFFILIATIONS / RELATED EXPERIENCE</div>
  <div class="projects-divider"></div>

  <!-- Affiliation 1 -->
  <div class="affiliation-item">
    <div class="affiliation-title">Emergency Room (ER) Duty – ACE Medical Center - Sta. Maria (2026)</div>
    <ul class="bullet-list">
      <li>Assisted with triage assessments, vital signs monitoring, and acute clinical interventions.</li>
      <li>Supported emergency healthcare personnel in rapid patient stabilization, IV setup, and diagnostic endorsements.</li>
    </ul>
  </div>

  <!-- Affiliation 2 -->
  <div class="affiliation-item">
    <div class="affiliation-title">Delivery Room (DR) Duty – Bulacan Medical Center (2026)</div>
    <ul class="bullet-list">
      <li>Assisted in intrapartum and postpartum maternal care, newborn assessment, and delivery room preparation.</li>
      <li>Monitored labor progression, vital parameters, and enforced strict infection control and sterile field procedures.</li>
    </ul>
  </div>

  <!-- Affiliation 3 -->
  <div class="affiliation-item">
    <div class="affiliation-title">Psychiatric Nursing Duty – National Center for Mental Health (2025)</div>
    <ul class="bullet-list">
      <li>Conducted therapeutic communication, patient orientation, and structured therapeutic activities.</li>
      <li>Observed behavioral patterns, documented mood state changes, and supported patient milieu therapy goals.</li>
    </ul>
  </div>

  <!-- Affiliation 4 -->
  <div class="affiliation-item">
    <div class="affiliation-title">Medical-Surgical (MS) Ward Duty – Veterans Memorial Medical Center (2025)</div>
    <ul class="bullet-list">
      <li>Performed bedside nursing care, medication administration under supervision, wound care, and patient charting.</li>
      <li>Conducted routine patient assessments, pre- and post-operative monitoring, and interdisciplinary shift endorsements.</li>
    </ul>
  </div>

  <!-- Affiliation 5 -->
  <div class="affiliation-item">
    <div class="affiliation-title">Operating Room (OR) Duty – Fatima University Medical Center (2025)</div>
    <ul class="bullet-list">
      <li>Practiced strict aseptic techniques, surgical instrument preparation, and perioperative patient monitoring.</li>
      <li>Assisted scrub and circulating nurses, maintained sterile fields, and verified accurate surgical count checklists.</li>
    </ul>
  </div>

  <!-- Affiliation 6 -->
  <div class="affiliation-item">
    <div class="affiliation-title">Delivery Room (DR) Duty – Meycauayan Doctors Hospital (2024)</div>
    <ul class="bullet-list">
      <li>Supported laboring mothers, monitored fetal heart tones, and assisted in immediate newborn care.</li>
      <li>Provided immediate postpartum maternal monitoring, initial newborn latching, and APGAR assessment support.</li>
    </ul>
  </div>

  <!-- Affiliation 7 -->
  <div class="affiliation-item">
    <div class="affiliation-title">Operating Room (OR) Duty – St. Michael’s Medical Center – Marilao, Bulacan (2024)</div>
    <ul class="bullet-list">
      <li>Assisted in pre-operative and post-operative care and maintained sterile field protocols.</li>
      <li>Prepared sterile drapes and surgical instrument trays while assisting during routine elective surgical cases.</li>
    </ul>
  </div>

  <!-- Affiliation 8 -->
  <div class="affiliation-item">
    <div class="affiliation-title">Geriatric Nursing Duty – Golden Reception and Action Center for the Elderly (GRACES) (2024)</div>
    <ul class="bullet-list">
      <li>Provided holistic elderly care, assisted with activities of daily living (ADLs), and monitored vital signs.</li>
      <li>Facilitated recreational and rehabilitative activities to enhance psychosocial and physical well-being.</li>
    </ul>
  </div>

  <!-- Character References -->
  <div class="section-title" style="margin-top: 18px;">CHARACTER REFERENCES</div>
  <div class="item-group" style="margin-bottom: 0;">
    <div class="bullet-title">• Chen Go Masayon</div>
    <div class="item-subtext">Professor, College of Nursing – Our Lady of Fatima University</div>
  </div>
</div>

</body>
</html>`;

fs.writeFileSync('c:/Users/ezekiel/Desktop/WebPortfolio/Kris_Charls_Anore_Resume.html', htmlContent);
console.log('HTML written successfully');