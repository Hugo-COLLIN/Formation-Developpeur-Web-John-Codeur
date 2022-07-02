//Interactions avec CSS
$(function ()
{
    $("#start").click(function () {
        //Sur les éléments parent
        //$("#p1").css("border-color", "green"); //S'applique à l'élément sélectionné
        //$("#p1").parent().css("border-color", "green"); //parent() sélectionne seulement la div parent
        //$("#p1").parents().css("border-color", "green"); // parents() sélectionne le parent et les parents des parents
        //$("#p1").parents(".special").css("border-color", "green"); //parents(param) sélectionne les parents uniquement s'ils ont la classe/l'id/le tag correspondant dans la fonction
        //$("#p1").parents("#div1").css("border-color", "green");

        //Sur les éléments enfant
        //$("#div1").children().css("border-color", "blue"); // children() sélectionne les enfants directs, pas les sous-enfants suivants
        //$("main").children().css("border-color", "blue");
        //$("main").find("p").css("border-color", "blue");

        //Sur les éléments frères
        //$("#p1").siblings().css("border-color", "aqua"); // siblings() sélectionne tous les autres éléments au même niveau que notre élément
        //$("#p1").next().css("border-color", "aqua");// next() sélectionne l'élément suivant, celui qui se trouve au même niveau, juste après lui.

        //Sur un éléments parmi une liste d'éléments sélectionnés
        //$("p").first().css("border-color", "pink"); // first() sélectionne le premier element d'une liste d'éléments
        //$("p").last().css("border-color", "pink"); // last() sélectionne le dernier element d'une liste d'éléments (un tag donne la liste de tous les tags, une classe la liste de tous les elements ayant la classe)
        //$("p").eq(2).css("border-color", "pink"); //eq(i) sélectionne le i+1 ième élément d'une liste d'éléments (on commence à compter à partir de 0)

        //Filtrer une liste d'éléments
        //$("p").filter(".classFiltre").css("border-color", "black"); //filter(p) sélectionne seulement les éléments de tag ou qui ont l'id/la classe p
        $("p").not(".classFiltre").css("border-color", "black"); //filter(p) exclut les éléments de tag ou qui ont l'id/la classe p

    })
});