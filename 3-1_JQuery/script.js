//Interactions avec Html
$(function ()
{
    //Récupérer le contenu des balises
    const pText = $("p:first-child").text();
    console.log(pText);

    const pText2 = $("p:first-child").html();
    console.log(pText2);

    const pDiv = $("div").html();
    console.log(pDiv);

    const btnStart = $("#start");
    //Récupérer le contenu d'un champ texte de formulaire
    btnStart.click(function () {
        let fieldContent = $("#textInput").val();
        console.log(fieldContent);
    });

    //récupérer les attributs des éléments html
    const divStyle = $("div").attr("style");
    console.log(divStyle);

    //Changer le contenu et les attributs d'une balise html
    btnStart.click(function () {
        $("#p1").text("Texte de remplacement");
        $("#p2").html("Remplacement avec <u>du texte</u> contenant du <b>HTML</b>");
        $("#textInput").val("Nouvelle valeur du champ texte !!!");
        $("div").attr("style", "background:green;")
    });

    //Ajout et suppression par rapport à d'autres balises html
    let i = 4;
    btnStart.click(function () {
        const d = $("div");
        //Ajout à l'intérieur d'un élément, avant ou après les autres éléments
        d.append("<p>Mon paragraphe " + i + "</p>");
        d.prepend("<p>Paragraphe mis au début ; " + i + "</p>");

        //Ajout juste après ou avant un élément
        d.after("<p>Ok " + i + "</p>");
        d.before("\t" + i);


        if (i === 10)
            //Suppression d'un élément du code html
            d.remove();
        else if (i === 7)
            //Suppression du contenu d'un élément
            d.empty();

        i ++;
    });

});