window.onload = function () {

    //Variables
    let canvas;
    let ctx;
    let snake;

    let xCoord = 0, yCoord = 0;
    const canWidth = 900, canHeight = 600;
    const blockSize = 30;
    const delay = 50;

    function drawBlock(ctx, elem)
    {
        let x = elem[0] * blockSize;
        let y = elem[1] * blockSize;
        ctx.fillRect(x, y, blockSize, blockSize);
    }

    //Constructors
    function Snake (body)
    {
        this.body = body;

        this.draw = function () {
            ctx.save();
            ctx.fillStyle = "#f00";
            //for (const elem in this.body)
                //drawBlock(ctx, elem);
                //console.log(elem[0], elem[1]);

            for (let i = 0 ; i < this.body.length ; i ++)
                drawBlock(ctx, this.body[i]);
            ctx.restore();
        }
    }

    //Functions
    function init()
    {
        canvas = document.createElement('canvas');
        canvas.width = canWidth;
        canvas.height = canHeight;
        canvas.style.border = "1px solid";

        document.body.appendChild(canvas);

        ctx = canvas.getContext('2d');
        snake = new Snake([[6,4], [5,4], [4,4]]);
        refreshCan();
    }

    function refreshCan()
    {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        snake.draw();
        setTimeout(refreshCan, delay);
    }

    //Main
    init();

}