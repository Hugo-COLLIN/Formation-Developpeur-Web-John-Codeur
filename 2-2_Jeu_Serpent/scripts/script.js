window.onload = function () {

    //Variables
    let canvas;
    let ctx;
    let xCoord = 0, yCoord = 0;
    const delay = 50;

    //Functions
    function init()
    {
        canvas = document.createElement('canvas');
        canvas.width = 900;
        canvas.height = 600;
        canvas.style.border = "1px solid";

        document.body.appendChild(canvas);

        ctx = canvas.getContext('2d');
        refreshCan();
    }

    function refreshCan()
    {
        xCoord += 2;
        yCoord += 2;

        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.fillStyle = "#f00";
        ctx.fillRect(xCoord, yCoord, 100, 50);
        setTimeout(refreshCan, delay);
    }

    //Main
    init();

}