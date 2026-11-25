/**
 * Triggers direct download of Ezekiel Dayao's official 2-page PDF CV.
 */
export function downloadResume() {
  const anchor = document.createElement('a');
  anchor.href = '/Ezekiel_Dayao_CV.pdf';
  anchor.download = 'Ezekiel_Dayao_CV.pdf';
  anchor.target = '_blank';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
