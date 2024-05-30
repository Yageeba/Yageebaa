// Hier wird die URL des PDFs definiert
const pdfURL = 'C:\Users\Berra\Desktop\Hauptbahnhof\Soziale Netzwerke.pdf';

// Event Listener für das Klicken auf den Download-Link
document.getElementById('download-link').addEventListener('click', function(event) {
  event.preventDefault(); // Verhindert das Standardverhalten des Links

  // Erstelle ein unsichtbares <a>-Element
  const link = document.createElement('a');
  link.style.display = 'none';
  document.body.appendChild(link);

  // Setze die URL des PDFs als href-Attribut des Links
  link.href = pdfURL;

  // Setze den Download-Attribut, damit das PDF automatisch heruntergeladen wird
  link.setAttribute('download', '');

  // Simuliere das Klicken des Links
  link.click();

  // Entferne das <a>-Element
  document.body.removeChild(link);
});
