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
    color: #222222;
    background-color: #ffffff;
    font-size: 11pt;
    line-height: 1.5;
  }
  .page {
    width: 210mm;
    height: 297mm;
    max-height: 297mm;
    padding: 24mm 24mm 20mm 24mm;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background: #fff;
    box-sizing: border-box;
  }
  
  .sender-block {
    margin-bottom: 20pt;
    line-height: 1.45;
    font-size: 11pt;
    color: #222222;
  }
  .sender-block .name {
    font-size: 11pt;
    color: #222222;
  }
  
  .date-block {
    margin-bottom: 20pt;
    font-size: 11pt;
    color: #222222;
  }
  
  .recipient-block {
    margin-bottom: 20pt;
    font-size: 11pt;
    line-height: 1.45;
    color: #222222;
  }
  
  .salutation {
    margin-bottom: 16pt;
    font-size: 11pt;
    color: #222222;
  }
  
  .body-content p {
    margin-bottom: 15pt;
    font-size: 10.5pt;
    line-height: 1.55;
    color: #222222;
    text-align: justify;
  }
  
  .closing-block {
    margin-top: 24pt;
    font-size: 11pt;
    color: #222222;
  }
  .closing-block .signature-space {
    height: 42pt;
  }
  .closing-block .sign-name {
    font-size: 11pt;
    color: #222222;
  }
</style>
</head>
<body>

<div class="page">
  <!-- Sender Block -->
  <div class="sender-block">
    <div class="name">Kris Charls M. Anore</div>
    <div>Burgundy homes , San Jose patag</div>
    <div>Sta maria Bulacan 3022</div>
    <div style="margin-top: 4pt;">09672918967</div>
    <div>kmanore3010val@student.fatima.edu.ph</div>
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

fs.writeFileSync('c:/Users/ezekiel/Desktop/WebPortfolio/Kris_Charls_Anore_Application_Letter.html', htmlContent);
console.log('No-photo HTML written successfully');