$(function ()
{
    //$(selector).animate(object, [speed], [callback])
    /*$("button").click(function () {
        $("#carre").animate(
            {
                'margin-left': '600px',
                opacity: 0.2,
                width: '200px',
                height: '200px',
            },
            3000,
            function () { $("#carre").hide();}
        );
    });
         */

    //+=
    /*$("button").click(function () {
        $("#carre").animate(
            {
                'margin-left': '600px',
                opacity: 0.2,
                width: '+=50px',
                height: '+=50px',
            },
            3000
        )
    });
         */

    const c = $("#carre");
    /*$("#start").click(function () {
        c.animate({'margin-left': '600px'}, 3000);
        c.animate({opacity: 0.2}, 3000);
        c.animate({width: '10em'}, 3000);
        c.animate({height: '10rem'}, 3000);
    });
    */

    $("#stop").click(function () {
        //c.stop(); //Stoppe l'action en cours, mais pas les suivantes
        //c.stop(true); //Stoppe toutes les animation actuelles et suivantes (=prévues)
        c.stop(true, true); //Stoppe ttes les animations + atteint la position finale de l'action en cours
    });

    $("#start").click(function () {
        c.slideUp(4000).slideDown(2000).fadeOut(3000).fadeIn(1000); //Pb effet bizarre slideUp/Down avec margin
    });

});