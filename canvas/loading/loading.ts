const canvas = <HTMLCanvasElement>document.querySelector("#canvas");
const context = <CanvasRenderingContext2D>canvas.getContext("2d");
let centerX:number = canvas.width/2;
let centerY:number = canvas.height/2;

let rad:number = Math.PI*2/100;
let speed:number = 0;

// 绘制文本
function text(n:number):void{
    context.save();
    context.fillStyle = "#F47C7C";
    context.font = "bold 40px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(`${n.toFixed(0)}%`, centerX, centerY);
    context.restore();
}

// 绘制蓝色圆
function blueCircle(n:number):void{
    context.save();
    context.beginPath();
    context.strokeStyle = "#49f";
    context.lineWidth = 12;
    context.arc(centerX, centerY, 100, -Math.PI/2, -Math.PI/2 + n*rad, false);
    context.stroke();
    context.restore();
}

// 绘制白色圆
function whiteCircle():void{
    context.save();
    context.beginPath();
    context.strokeStyle = "#A5DEF1";
    context.lineWidth = 12;
    context.arc(centerX, centerY, 100, 0, Math.PI*2, false)
    context.closePath();
    context.stroke();
    context.restore();
}

// 绘制圆形loading
function drawCircleLoading(n:number):void{
    whiteCircle();
    text(n);
    blueCircle(n)
}

function drawRectLoading(n:number):void{

}

(function drawFrame(){
    window.requestAnimationFrame(drawFrame);
    context.clearRect(0,0,canvas.width,canvas.height);

    // 绘制圆形loading
    drawCircleLoading(speed);

    if(speed>100){speed =0}
    speed +=.1;
})();