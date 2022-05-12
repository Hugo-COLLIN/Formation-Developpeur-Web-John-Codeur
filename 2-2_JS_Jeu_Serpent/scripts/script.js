window.onload = function () {
    var canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 600;
    canvas.style.border = "1px solid";
    
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "#f00";
    ctx.fillRect(60, 60, 200, 75);
}