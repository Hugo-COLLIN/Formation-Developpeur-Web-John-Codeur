//Interactions avec CSS
$(function ()
{
    /*
    -> <!> Utilisation des mêmes fonctions (=meme nom) pour appliquer une valeur et demander cette valeur
     */

    /*
    $("#btn1").click(function () {
        //$("#p1,#p2").addClass("red bold");
        $("#p1,#p2").toggleClass("red bold");
    });

    $("#btn2").click(function () {
        $("#p1,#p2").removeClass("red bold");
    });
     */

    /*
    //Appliquer un style à un élément
    $("#btn1").click(function () {
        $("#p1").css("color", "red");
    });

    //Récupérer le style d'un élément
    $("#btn2").click(function () {
        const color = $("#p1").css("color");
        console.log(color);
    });

     */

    $("#btn1").click(function () {
        $("#p1").css(
            {
                color: "red",
                'font-weight': "bold",
                background: "yellow"
            }
        );
    });

    //Demander et changer la taille des objets
    console.log($("#btn1").width());

    $("#btn1").click(function () {
        $("#btn2").width("+=10px");
        $("#btn1").height("+=30px");
    });

});