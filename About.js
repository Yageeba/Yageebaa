// JavaScript zum Umschalten der Sprache
document.querySelectorAll('.dropdown-menu li a').forEach(item => {
    item.addEventListener('click', function() {
        // Hier kannst du die Sprache basierend auf dem ausgewählten Link ändern
        // Zum Beispiel die Seite entsprechend neu laden
        location.reload();
    });
});
