//$(Sélecteur).événement(fonctionAnonyme(){...})
$(document).ready(function () //Fonction anonyme
{
    //$("#p5").fadeOut(3000);

    $("#p1").click(function () {
        //$('#p5').hide();
        //$('#p5').hide("slow");
        //$('#p5').hide("fast");
        //$('#p5').hide(5000); //ms

        //F° de callback : f° appelée une fois l'action effectuée
        /*
        $("#p2").hide(3000, function () {
            $("#p3").hide(3000, function () {
                $("#p4").hide(3000);
            });
        });
        */

        //$("#p5").toggle("slow"); //Change l'état de visibilité de l'élément
        //$("#p5").fadeOut(3000);
        //$("#p5").fadeIn(3000);
        //$("#p5").fadeToggle(3000);
        $("#p5").fadeTo(3000, 0.5);
                        //vitesse, opacite
    });

});