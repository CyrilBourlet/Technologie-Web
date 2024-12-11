
$(document).ready(function() {
    $("button:first").click(function() {
        $("img").fadeOut(1000); // Masque l'image en 1 seconde
    });

    $("button:last").click(function() {
        $("img").fadeIn(1000); // Affiche l'image en 1 seconde
    });
});
