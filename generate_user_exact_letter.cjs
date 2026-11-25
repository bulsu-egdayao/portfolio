const fs = require('fs');

const imgPath = 'C:/Users/ezekiel/.gemini/antigravity/brain/2f22508f-fa75-4ebb-9fb0-c91a2ce6d0f2/.user_uploaded/media_1794980629053_56c46074.jpg';
const imgBase64 = fs.readFileSync(imgPath).toString('base64');

// Version 1: With formal picture in upper right
const htmlWithPhoto = `<!DOCTYPE html>
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
    padding: 18mm 22mm 15mm 22mm;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background: #fff;
    box-sizing: border-box;
  }
  
  .header-flex {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 14pt;
  }
  .sender-block {
    line-height: 1.4;
    font-size: 10.5pt;
    color: #222222;
  }
  .sender-block .name {
    font-size: 11pt;
    font-weight: bold;
    color: #000000;
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
    margin-bottom: 12pt;
    font-size: 10.5pt;
    color: #222222;
  }
  
  .body-content p {
    margin-bottom: 11pt;
    font-size: 10pt;
    line-height: 1.45;
    color: #222222;
    text-align: justify;
  }
  
  .closing-block {
    margin-top: 16pt;
    font-size: 10.5pt;
    color: #222222;
  }
  .closing-block .signature-space {
    height: 35pt;
  }
  .closing-block .sign-name {
    font-size: 10.5pt;
    color: #000000;
  }
</style>
</head>
<body>

<div class="page">
  <!-- Sender & Photo -->
  <div class="header-flex">
    <div class="sender-block">
      <div class="name">Kris Charls M. Anore</div>
      <div>Burgundy homes , San Jose patag</div>
      <div>Sta maria Bulacan 3022</div>
      <div style="margin-top: 5pt;">09672918967</div>
      <div>kmanore3010val@student.fatima.edu.ph</div>
    </div>
    <div class="photo-frame">
      <img src="data:image/jpeg;base64,` + imgBase64 + `" alt="Kris Charls M. Anore" />
    </div>
  </div>

  <!-- Date -->
  <div class="date-block">
    November 18, 2026
  </div>

  <!-- Recipient Block -->
  <div class="recipient-block">
    <div>Chen Go-Masayon</div>
    <div>Hiring Manager</div>
    <div>FUMC Hospital</div>
    <div>Valenzuela City, Metro Manila</div>
  </div>

  <!-- Salutation -->
  <div class="salutation">
    Dear Mrs. Chen Go Masayon,
  </div>

  <!-- Letter Body -->
  <div class="body-content">
    <p>
      My name is Kris Charls M. Anore, and I am writing to express my strong interest in the Staff Nurse position at FUMC Hospital. Having earned my Bachelor of Science in Nursing from Our Lady of Fatima University, I am eager to bring my clinical training, reliability, and dedication to providing the safe, high-quality, and patient-centered care that FUMC Hospital is known for.
    </p>

    <p>
      Throughout my clinical rotations across various healthcare institutions—including Fatima University Medical Center, Veterans Memorial Medical Center, and Bulacan Medical Center—I developed a solid foundation in patient assessment, wound care, aseptic technique, and supervised medication administration. My experience in high-acuity areas such as the Operating Room, Delivery Room, and Emergency Room trained me to remain composed under pressure, prioritize tasks efficiently, and collaborate seamlessly with multidisciplinary teams. Additionally, my rotations at the National Center for Mental Health and GRACES were especially meaningful, as working with psychiatric and geriatric patients deepened my empathy, active listening, and patience. Alongside my Philippine Red Cross training, I pride myself on consistent punctuality, always arriving ahead of shift schedules to ensure thorough patient endorsements.
    </p>

    <p>
      Joining FUMC Hospital represents a rewarding opportunity to grow within a respected healthcare institution while making a meaningful contribution to patient recovery. I am confident that my clinical preparedness, strong work ethic, and genuine passion for nursing make me a strong fit for your team. Thank you for considering my application; I look forward to the opportunity to discuss my qualifications further.
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

// Version 2: Exact left-aligned matching Jane Wright template, with picture float in top right
fs.writeFileSync('c:/Users/ezekiel/Desktop/WebPortfolio/Kris_Charls_Anore_Application_Letter.html', htmlWithPhoto);
console.log('User exact letter HTML written successfully');