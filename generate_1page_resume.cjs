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
    font-size: 9.5pt;
    line-height: 1.28;
  }
  .page {
    width: 210mm;
    height: 297mm;
    max-height: 297mm;
    padding: 12mm 16mm 10mm 16mm;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background: #fff;
    box-sizing: border-box;
  }
  
  /* Top contact bar */
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 8.5pt;
    letter-spacing: 0.1px;
  }
  .top-divider {
    border: none;
    border-bottom: 1.5px solid #000000;
    margin-top: 3px;
    margin-bottom: 8px;
  }
  
  /* Split Header */
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 6px;
  }
  .header-left {
    flex: 1;
  }
  .full-name {
    font-size: 19pt;
    font-weight: bold;
    letter-spacing: -0.3px;
    color: #000000;
    line-height: 1.1;
    margin-bottom: 2px;
  }
  .target-title {
    font-size: 10pt;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #000000;
    margin-bottom: 6px;
  }
  .section-title {
    font-size: 9.5pt;
    font-weight: bold;
    text-transform: uppercase;
    color: #000000;
    margin-top: 6px;
    margin-bottom: 3px;
    letter-spacing: 0.2px;
    border-bottom: 1px solid #000000;
    padding-bottom: 1px;
  }
  .header-left .section-title {
    margin-top: 0;
    margin-bottom: 2px;
    border-bottom: none;
    padding-bottom: 0;
  }
  .profile-text {
    font-size: 9pt;
    line-height: 1.25;
    text-align: justify;
    color: #000000;
  }
  
  /* Photo Box */
  .header-right {
    flex-shrink: 0;
  }
  .photo-frame {
    width: 90px;
    height: 110px;
    border: 1px solid #000000;
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
  
  /* Personal Info Grid */
  .personal-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2px;
    column-gap: 16px;
    font-size: 8.8pt;
    margin-bottom: 4px;
  }
  .personal-grid div {
    position: relative;
    padding-left: 11px;
  }
  .personal-grid div::before {
    content: "•";
    position: absolute;
    left: 0;
    font-weight: bold;
    font-size: 10pt;
  }

  /* Education */
  .edu-item {
    margin-bottom: 3px;
  }
  .edu-degree {
    font-size: 9pt;
    font-weight: bold;
    text-transform: uppercase;
  }
  .edu-school {
    font-size: 8.8pt;
    margin-left: 11px;
    color: #222;
  }

  /* Skills & Lists */
  .bullet-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .bullet-list li {
    position: relative;
    padding-left: 11px;
    margin-bottom: 2.5px;
    font-size: 8.8pt;
    line-height: 1.25;
  }
  .bullet-list li::before {
    content: "•";
    position: absolute;
    left: 0;
    font-weight: bold;
    font-size: 10pt;
  }

  /* Clinical Affiliations Table / List */
  .affiliations-grid {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 3px;
    margin-bottom: 4px;
  }
  .affil-entry {
    position: relative;
    padding-left: 11px;
    font-size: 8.6pt;
    line-height: 1.22;
  }
  .affil-entry::before {
    content: "•";
    position: absolute;
    left: 0;
    font-weight: bold;
    font-size: 10pt;
  }
  .affil-name {
    font-weight: bold;
    color: #000;
  }
  .affil-desc {
    color: #222;
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
  <div class="section-title">EDUCATIONAL BACKGROUND</div>
  <div class="edu-item">
    <div class="edu-degree">• BACHELOR OF SCIENCE IN NURSING, 2023 – 2027</div>
    <div class="edu-school">Our Lady of Fatima University – Valenzuela Campus</div>
  </div>
  <div class="edu-item">
    <div class="edu-degree">• STEM STRAND – SENIOR HIGH SCHOOL, GRADUATED</div>
    <div class="edu-school">Immaculate Conception Polytechnic – Sta. Maria, Bulacan</div>
  </div>

  <!-- Clinical Affiliations / Related Experience -->
  <div class="section-title">CLINICAL AFFILIATIONS / RELATED EXPERIENCE</div>
  <div class="affiliations-grid">
    <div class="affil-entry">
      <span class="affil-name">Emergency Room (ER) Duty – ACE Medical Center, Sta. Maria (2026):</span>
      <span class="affil-desc"> Assisted with triage assessments, vital signs monitoring, and acute clinical interventions.</span>
    </div>
    <div class="affil-entry">
      <span class="affil-name">Delivery Room (DR) Duty – Bulacan Medical Center (2026):</span>
      <span class="affil-desc"> Assisted in intrapartum/postpartum maternal care, newborn assessment, and delivery room preparation.</span>
    </div>
    <div class="affil-entry">
      <span class="affil-name">Psychiatric Nursing Duty – National Center for Mental Health (2025):</span>
      <span class="affil-desc"> Conducted therapeutic communication, patient orientation, and structured therapeutic activities.</span>
    </div>
    <div class="affil-entry">
      <span class="affil-name">Medical-Surgical (MS) Ward Duty – Veterans Memorial Medical Center (2025):</span>
      <span class="affil-desc"> Performed bedside nursing care, supervised medication administration, wound care, and patient charting.</span>
    </div>
    <div class="affil-entry">
      <span class="affil-name">Operating Room (OR) Duty – Fatima University Medical Center (2025):</span>
      <span class="affil-desc"> Practiced strict aseptic techniques, surgical instrument preparation, and perioperative monitoring.</span>
    </div>
    <div class="affil-entry">
      <span class="affil-name">Delivery Room (DR) Duty – Meycauayan Doctors Hospital (2024):</span>
      <span class="affil-desc"> Supported laboring mothers, monitored fetal heart tones, and assisted in immediate newborn care.</span>
    </div>
    <div class="affil-entry">
      <span class="affil-name">Operating Room (OR) Duty – St. Michael’s Medical Center, Marilao (2024):</span>
      <span class="affil-desc"> Assisted in pre- and post-operative care, surgical counts, and maintained sterile field protocols.</span>
    </div>
    <div class="affil-entry">
      <span class="affil-name">Geriatric Nursing Duty – GRACES (2024):</span>
      <span class="affil-desc"> Provided holistic elderly care, assisted with ADLs, monitored vital signs, and facilitated rehabilitative activities.</span>
    </div>
  </div>

  <!-- Nursing Skills and Competencies -->
  <div class="section-title">NURSING SKILLS AND COMPETENCIES</div>
  <ul class="bullet-list">
    <li><strong>Clinical & Technical Skills:</strong> Vital signs monitoring, medication administration (under supervision), aseptic technique, wound care, geriatric and bedside assessment, and accurate clinical documentation.</li>
    <li><strong>Time Management & Punctuality:</strong> Highly punctual and dependable; consistently arrives ahead of shift schedules to ensure thorough endorsement and seamless patient care transitions.</li>
    <li><strong>Interpersonal & Soft Skills:</strong> Empathetic patient communication, active listening, adaptability across clinical units, and strong teamwork with multidisciplinary healthcare staff.</li>
  </ul>

  <!-- Seminars, Trainings, and Certifications -->
  <div class="section-title">SEMINARS, TRAININGS, AND CERTIFICATIONS</div>
  <ul class="bullet-list">
    <li><strong>First Aid / Basic Life Support (BLS) Training:</strong> Philippine Red Cross | Validated 2026 | Certified Healthcare Provider</li>
  </ul>

  <!-- Character References -->
  <div class="section-title">CHARACTER REFERENCES</div>
  <ul class="bullet-list">
    <li><strong>Chen Go Masayon:</strong> Professor, College of Nursing – Our Lady of Fatima University</li>
  </ul>
</div>

</body>
</html>`;

fs.writeFileSync('c:/Users/ezekiel/Desktop/WebPortfolio/Kris_Charls_Anore_Resume_1Page.html', htmlContent);
console.log('1-Page Resume HTML written successfully');