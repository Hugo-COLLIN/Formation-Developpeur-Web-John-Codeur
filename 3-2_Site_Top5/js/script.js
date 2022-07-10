$(function () {
    /*
    --- VARIABLES ---
     */
    /**
     * Durations for animations
     * @type {number}
     */
    const SHORT_TIME = 250,
          LONG_TIME = 700;

    /**
     * Contains all the elements of the main menu
     * @type {*|jQuery}
     */
    const $menuItems = $("main ul").children("li"); /*Les variables qui commencent par $ contiennent du JQuery, pas obligatoire.*/

    /**
     * Number of items in the menu
     */
    const totalMenuItems = $menuItems.length;

    /**
     * Index of element to open automatically when the window is ready
     * @type {number}
     */
    let   openedOnReadyIndex = Math.round((totalMenuItems - 1) / 2);


    /*
    --- FUNCTIONS ---
     */
    /**
     * Function called when the window is ready
     */
    const init = function ()
    {
        clickOnMenuAction();

        if (validIndex(openedOnReadyIndex))
            animateItem($menuItems.eq(openedOnReadyIndex), true, LONG_TIME);
    };

    /**
     * Called once on init, used for each user action on the UI
     */
    const clickOnMenuAction = function ()
    {
        /**
         * Click on image
         */
        $menuItems.children(".images").click(function () {
            const newIndex = $(this).parent().index();
            animationEvent(newIndex);
        });

        /**
         * Click on button
         */
        $(".btn").click(function () {
            var newIndex = $(this).index();
            animationEvent(newIndex);
        });

        /**
         * Cursor over a button
         */
        $(".btn").hover(
            function ()
            {
                $(this).addClass("hovered");
            },
            function ()
            {
                $(this).removeClass("hovered");
            }
        );

    }

    /**
     * Check if the index is valid
     * @param indexToCheck index to be checked
     * @returns {boolean} the validity of the index
     */
    const validIndex = function (indexToCheck)
    {
        return (indexToCheck >= 0) && (indexToCheck < totalMenuItems)
    }

    /**
     * Open or close an element in the main menu
     * @param $item element to be opened
     * @param isToOpen true to open, false to close
     * @param speed duration of animation
     */
    const animateItem = function ($item, isToOpen, speed)
    {
        const $colorImage = $item.find(".color"),
              itemParam = isToOpen ? {width: "420px"} : {width: "140px"},
              colorImageParam = isToOpen ? {left: "0"} : {left: "140px"};

        $item.animate(itemParam, speed);
        $colorImage.animate(colorImageParam, speed);
    }

    /**
     * Menu's animation when a click on image or button occurs
     * @param newIndex index of element to be opened
     */
    const animationEvent = function (newIndex) {
        const $item = $menuItems.eq(newIndex);

        if (validIndex(newIndex))
            if (openedOnReadyIndex === newIndex)
            {
                animateItem($item, false, SHORT_TIME);
                openedOnReadyIndex = -1;
            }
            else
            {
                animateItem($menuItems.eq(openedOnReadyIndex), false, SHORT_TIME)
                animateItem($item, true, SHORT_TIME);
                openedOnReadyIndex = newIndex;
            }
    }


    /*
    --- MAIN ---
    */
    //Call of init function
    init();

});