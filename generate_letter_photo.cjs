const fs = require('fs');

const imgPath = 'C:/Users/ezekiel/.gemini/antigravity/brain/2f22508f-fa75-4ebb-9fb0-c91a2ce6d0f2/.user_uploaded/media_1794980629053_56c46074.jpg';
const imgBase64 = fs.readFileSync(imgPath).toString('base64');

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
    color: #222222;
    background-color: #ffffff;
    font-size: 10.5pt;
    line-height: 1.45;
  }
  .page {
    width: 210mm;
    height: 297mm;
    max-height: 297mm;
    padding: 16mm 22mm 15mm 22mm;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background: #fff;
    box-sizing: border-box;
  }
  
  /* Top contact row with photo */
  .header-flex {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 14pt;
  }
  .sender-block {
    line-height: 1.4;
  }
  .sender-block .name {
    font-size: 14pt;
    font-weight: bold;
    color: #000000;
    margin-bottom: 2pt;
  }
  
  .photo-frame {
    width: 85px;
    height: 105px;
    border: 1px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f7;
    flex-shrink: 0;
  }
  .photo-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  .divider {
    border: none;
    border-bottom: 1px solid #000000;
    margin-top: 4pt;
    margin-bottom: 14pt;
  }
  
  .date-block {
    margin-bottom: 14pt;
    font-size: 10.5pt;
    color: #222222;
  }
  
  .recipient-block {
    margin-bottom: 14pt;
    font-size: 10.5pt;
    line-height: 1.4;
    color: #222222;
  }
  
  .salutation {
    margin-bottom: 10pt;
    font-size: 10.5pt;
    font-weight: bold;
    color: #222222;
  }
  
  .body-content p {
    margin-bottom: 10pt;
    font-size: 10pt;
    line-height: 1.42;
    color: #222222;
    text-align: justify;
  }
  
  .closing-block {
    margin-top: 14pt;
    font-size: 10.5pt;
    color: #222222;
  }
  .closing-block .signature-space {
    height: 30pt;
  }
  .closing-block .sign-name {
    font-size: 10.5pt;
    font-weight: bold;
    color: #000000;
  }
</style>
</head>
<body>

<div class="page">
  <!-- Header: Sender Info & Photo -->
  <div class="header-flex">
    <div class="sender-block">
      <div class="name">Kris Charls M. Anore</div>
      <div>Burgundy Homes, Sta. Maria, Bulacan</div>
      <div>Bulacan, Philippines 3022</div>
      <div>(+639) 67 291 8968</div>
      <div>kmanore3010val@student.fatima.edu.ph</div>
    </div>
    <div class="photo-frame">
      <img src="data:image/jpeg;base64,` + imgBase64 + `" alt="Kris Charls M. Anore" />
    </div>
  </div>

  <div class="divider"></div>

  <!-- Date -->
  <div class="date-block">
    November 18, 2026
  </div>

  <!-- Recipient Block -->
  <div class="recipient-block">
    <div><strong>Prof. Chen Go Masayon</strong></div>
    <div>Recruitment Manager / Hiring Manager</div>
    <div>Fatima University Medical Center (FUMC)</div>
    <div>Valenzuela City, Metro Manila</div>
  </div>

  <!-- Salutation -->
  <div class="salutation">
    Dear Prof. Masayon,
  </div>

  <!-- Letter Body -->
  <div class="body-content">
    <p>
      My name is Kris Charls M. Anore, and I am writing to express my strong interest in the entry-level Staff Nurse position at Fatima University Medical Center (FUMC Hospital). I recently completed my Bachelor of Science in Nursing at Our Lady of Fatima University – Valenzuela Campus and am eager to apply my hands-on clinical education to provide the high-quality, patient-centered care FUMC is known for.
    </p>

    <p>
      During my clinical rotations, I built a strong foundation in patient assessment, wound care, administering medications under supervision, and healthcare team collaboration. Across specialized hospital postings—including Emergency Room duty at ACE Medical Center, maternal and newborn care at Bulacan Medical Center, and psychiatric therapeutic care at the National Center for Mental Health—I gained valuable experience in fast-paced clinical settings and learned to multitask and stay calm under pressure. Furthermore, completing Operating Room duty directly at Fatima University Medical Center gave me profound appreciation for strict aseptic technique and surgical safety protocols. Working with elderly patients at GRACES was particularly rewarding, as it deepened my empathy, communication, and patience.
    </p>

    <p>
      Joining Fatima University Medical Center is an exciting opportunity to grow within a respected institution and contribute directly to exceptional patient care. I hold certified Basic Life Support (BLS) and First Aid credentials from the Philippine Red Cross, and I am confident that my clinical skills, punctuality, dedication, and passion for nursing make me a strong fit for this role. Thank you for considering my application; I look forward to discussing my qualifications further.
    </p>
  </div>

  <!-- Closing -->
  <div class="closing-block">
    <div>Sincerely,</div>
    <div class="signature-space"></div>
    <div class="sign-name">Kris Charls M. Anore</div>
  </div>
</div>

</body>
</html>`;

fs.writeFileSync('c:/Users/ezekiel/Desktop/WebPortfolio/Kris_Charls_Anore_Application_Letter_With_Photo.html', htmlContent);
console.log('Application letter with photo HTML written successfully');