//$(Sélecteur).événement(fonctionAnonyme(){...})
$(document).ready(function () //Fonction anonyme
{
    //Déclanchement d'une fonction lors d'un événement
/*
    $("#p1").mouseenter(function () { //mouseenter, mouseleave
        $('#p5').hide();
    });
    $("#p1").mouseleave(function () { //mouseenter, mouseleave
        $('#p5').show();
    });
*/

    //Fonction hover qui prend 2 fonctions : 1 quand le curseur est sur l'élément, 1 lorsqu'il n'y est pas
/*
    $("#p1").hover(
        function () {
            $("#p5").hide();
        },
        function () {
            $("#p5").show();
        }
    )
*/

    //Utilisation de la fonction liée à l'événement OU de la fonction on avec une string désignant le nom de l'événement
    /*$("#p1").click(function () { //EQUIVALENT A $("#p1").on("click", function () {
        $('#p5').hide();
    });
    */

    //Création d'un objet, qui exécute 1 fonction par propriété
    $("#p1").on({
        mouseenter: function () {
            $("#p5").hide();
        },
        mouseleave: function () {
            $("#p5").show();
        },
        click: function () {
            $("#p4").hide();
        }
    })
});