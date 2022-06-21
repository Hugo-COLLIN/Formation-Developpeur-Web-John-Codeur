window.onload = function () {

    //Variables
    let canvas;
    let ctx;
    let snake;
    let nextPos;

    const canWidth = 900, canHeight = 600;
    const blockSize = 30;
    const delay = 100;

    //Constructors
    function Snake (bodyP, dirP)
    {
        //Attributes
        this.body = bodyP;
        this.direction = dirP;

        this.draw = function () {
            ctx.save();
            ctx.fillStyle = "#f00";

            for (let i = 0 ; i < this.body.length ; i ++)
                drawBlock(ctx, this.body[i]);
            ctx.restore();
        }

        this.advance = function () {
            //console.log(this.body[0]);
            nextPos = this.body[0].slice(); //https://bobbyhadz.com/blog/javascript-typeerror-slice-is-not-a-function
            nextPos[0] ++;
            this.body.unshift(nextPos);
            this.body.pop();
            //console.log(this.body[0]);
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
        snake = new Snake([[6,4], [5,4], [4,4]], "right");
        refreshCan();
    }

    function drawBlock(ctx, elem)
    {
        let x = elem[0] * blockSize;
        let y = elem[1] * blockSize;
        ctx.fillRect(x, y, blockSize, blockSize);
    }

    function refreshCan()
    {
        snake.advance();
        ctx.clearRect(0,0, canvas.width, canvas.height);

        snake.draw();
        setTimeout(refreshCan, delay);
    }

    //Main prog
    init();

}