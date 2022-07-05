$(function () {
    const   $menuItems = $("main ul").children("li"), /*Les variables qui commencent par $ contiennent du JQuery, pas obligatoire.*/
            totalMenuItems = $menuItems.length;
    let     openedIndex = -1;

    let init = function () {
        $menuItems.children(".images").click(function () {
            const   newIndex = $(this).parent().index(),
                    $item = $menuItems.eq(newIndex),
                    $colorImage = $item.find(".color");

            $colorImage.animate({left:"0"}, 250);
            $item.animate({width:"420px"}, 250);

            openedIndex = newIndex;

        })
    };

    init();

});