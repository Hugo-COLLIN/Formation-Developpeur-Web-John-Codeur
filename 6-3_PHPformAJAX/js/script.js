$(function () {
    const $form = $("#contact-form");
    $form.submit(function (event) {
        event.preventDefault(); //Don't skip to another page
        $(".comments").empty();
        var postData = $form.serialize();

        $.ajax({
            type: 'POST',
            url: 'php/contact.php',
            data: postData,
            dataType: 'json',
            success: function (result) {
                
            }
        })
    })
});