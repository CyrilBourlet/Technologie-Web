

// $(document).ready(function() {
//     $("body").append("<h1>Hello World avec jQuery</h1>");
// });

//$(document).ready(function() {...}); : Cette fonction garantit que le code à l'intérieur 
//sera exécuté seulement après que le DOM (Document Object Model) soit complètement chargé.

//$("body").append("<h1>Hello World avec jQuery</h1>"); : Cette ligne ajoute un élément <h1> avec le texte 
//"Hello World avec jQuery" à l'élément <body> de la page.

$(document).ready(function() {
    $("body").append("<h1>Hello World avec jQuery</h1>");
    let compteur = 1;
   
    $("#ajouter").click(function() {
    $("#listeTaches").append('<li>Tâche ' + compteur+ '</li>');
    compteur ++;
    });
   
    });

$(document).ready(function() {
    $("#agrandissement").click(function() {
        $("p").addClass("grand"); // Ajoute la classe 'grand' pour agrandir le texte
    });

    $("#reduction").click(function() {
        $("p").removeClass("grand"); // Supprime la classe 'grand' pour réduire le texte
    });
});


$(document).ready(function() {
    $("button").click(function() {
        $("p").first().text($("#texte").val()); // Copie la valeur de l'input dans le premier <p>
        $("#texte").val(""); // Vide l'input après le clic
    });
});



$(document).ready(function() {
    $("button:first").click(function() {
        $("img").fadeOut(1000); // Masque l'image en 1 seconde
    });

    $("button:last").click(function() {
        $("img").fadeIn(1000); // Affiche l'image en 1 seconde
    });
});

