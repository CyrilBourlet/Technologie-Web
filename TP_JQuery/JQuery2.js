$(document).ready(function() {
    // Agrandir le texte
    $("#agrandissement").click(function() {
        $("p").first().addClass("grand"); // Ajoute la classe 'grand' pour agrandir le texte
    });

    // Réduire le texte
    $("#reduction").click(function() {
        $("p").first().removeClass("petit"); // Supprime la classe 'grand' pour réduire le texte
    });

    // Copier le texte de l'input dans le paragraphe
    $("button").click(function() {
        $("p").first().text($("#texte").val()); // Copie la valeur de l'input dans le premier <p>
        $("#texte").val(""); // Vide l'input après le clic
    });
});
