window.onload = function () {
    var canvasWidth=900;
    var canvasHeight=600;
    var blockSize=30;
    var ctx;
    var delay = 100;
    var xCoord=0;
    var yCoord=0;
    var snakee;
    
    init();
    
    function init() {
        var canvas = document.createElement('canvas');
        canvas.width=canvasWidth;
        canvas.height=canvasHeight;
        canvas.style.border="1px solid";
        document.body.appendChild(canvas);
        ctx=canvas.getContext('2d');
        snakee = new Snake([[6,4],[5,4],[4,4]]);
        refreshCan();
        
    }
    
    function refreshCan() {
        xCoord+=2;
        yCoord+=2;
        ctx.clearRect(0,0,canvasWidth,canvasHeight);
        snakee.advance();
        snakee.draw();
        setTimeout(refreshCan,delay);
    }
    
    function drawBlock(ctx,pos){
        var x=pos[0]*blockSize;
        var y=pos[1]*blockSize;
        ctx.fillRect(x,y,blockSize,blockSize);
    }
    
    function Snake(body){
        this.body=body;
        this.draw=function(){
            ctx.save();
            ctx.fillStyle="#ff0000";
            for (var i=0; i<this.body.length; i++){
                drawBlock(ctx, this.body[i]);
            }
            ctx.restore();
        };
        this.advance = function(){
            var nextPos = this.body[0].slice();
            nextPos[0]++;
            this.body.unshift(nextPos);
            this.body.pop();
        };
    }
    
}