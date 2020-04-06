
const canvas = <HTMLCanvasElement>document.querySelector("#canvas");
const context = <CanvasRenderingContext2D>canvas.getContext("2d");

let w:number,h:number;

w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;

// 初始化
// 
let clearColor = "rgba(0,0,0,.05)";
let wordColor = "#33ff33";//文字颜色
let word = "0123456789qwertyuiopasdfghjklzxcvbnm,./;'\[]QWERTYUIOP{}ASDFGHJHJKL:ZXCVBBNM<>?"
let wordsArr:string[] = word.split("");
let fontSize = 16;

let clumns = w / fontSize;
let drops:number[] = [];

for(var i=0; i<clumns; i++){
    drops[i] = 1;
}


function draw(){
    context.save();
    context.fillStyle = wordColor;
    context.font = `${fontSize}px arial`;

    for(let i =0;i<drops.length;i++){
        let text = wordsArr[Math.floor(Math.random()*wordsArr.length)]
        context.fillText(text, i*fontSize, drops[i]*fontSize);
        if(drops[i]*fontSize >h && Math.random() > .98){
            drops[i] = 0;
        }
        drops[i]++;
    }

    context.restore();
}

(function drawFrame(){
    window.requestAnimationFrame(drawFrame);
    context.fillStyle = clearColor;
    context.fillRect(0,0,w,h);

    draw();
})();

function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}
resize();
addEventListener("resize",resize);