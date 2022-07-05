$(function () {
    const SPEED = 250;

    const $menuItems = $("main ul").children("li"), /*Les variables qui commencent par $ contiennent du JQuery, pas obligatoire.*/
          totalMenuItems = $menuItems.length;
    let   openedIndex = -1;

    const init = function ()
    {
        $menuItems.children(".images").click(function () {
            const newIndex = $(this).parent().index(),
                  $item = $menuItems.eq(newIndex);

            if (validIndex(newIndex))
                if (openedIndex === newIndex)
                {
                    animateItem($item, false, SPEED);
                    openedIndex = -1;
                }
                else
                {
                    animateItem($menuItems.eq(openedIndex), false, SPEED)
                    animateItem($item, true, SPEED);
                    openedIndex = newIndex;
                }

        })
    };

    const validIndex = function (indexToCheck)
    {
        return (indexToCheck >= 0) && (indexToCheck < totalMenuItems)
    }

    const animateItem = function ($item, isToOpen, speed)
    {
        const $colorImage = $item.find(".color"),
              itemParam = isToOpen ? {width: "420px"} : {width: "140px"},
              colorImageParam = isToOpen ? {left: "0"} : {left: "140px"};

        $item.animate(itemParam, speed);
        $colorImage.animate(colorImageParam, speed);
    }

    init();

});