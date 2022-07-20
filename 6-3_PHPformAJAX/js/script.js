$(function () {
    const $form = $("#contact-form");
    $form.submit(function (event) {
        event.preventDefault(); //Don't skip to another page
        $(".comments").empty();
        const postData = $form.serialize();

        $.ajax({
            type: 'POST',
            url: 'php/contact.php',
            data: postData,
            dataType: 'json',
            success: function (result) {

                if (result.isSuccess)
                {
                    $("#contact-form *:first-child").css({display: "none"});
                    $form.append("<p class='thanks'>Le message a été correctement envoyé ! Merci de m'avoir contacté !</p>" +
                        "<button class='btnSubmit' id='btnAgain'>Me contacter à nouveau (ça va faire beaucoup :) )</button>");
                    $form[0].reset();
                }
                else
                {
                    //foreach (result as errors)
                    $("#firstName + .comments").html(result.fnameErr);
                    $("#lastName + .comments").html(result.lnameErr);
                    $("#email + .comments").html(result.emailErr);
                    $("#tel + .comments").html(result.phoneErr);
                    $("#msg + .comments").html(result.msgErr);
                }

            }
        });
    });

    $("#btnAgain").click(function () {
        $("#contact-form p").remove();
        $("#contact-form button").remove();
        $("#contact-form *:first-child").css({display: "block"});
    })
});