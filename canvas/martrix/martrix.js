"use strict";
var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");
var w, h;
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;
// 初始化
// 
var clearColor = "rgba(0,0,0,.05)";
var wordColor = "#33ff33"; //文字颜色
var word = "0123456789qwertyuiopasdfghjklzxcvbnm,./;'\[]QWERTYUIOP{}ASDFGHJHJKL:ZXCVBBNM<>?";
var wordsArr = word.split("");
var fontSize = 16;
var clumns = w / fontSize;
var drops = [];
for (var i = 0; i < clumns; i++) {
    drops[i] = 1;
}
function draw() {
    context.save();
    context.fillStyle = wordColor;
    context.font = fontSize + "px arial";
    for (var i_1 = 0; i_1 < drops.length; i_1++) {
        var text_1 = wordsArr[Math.floor(Math.random() * wordsArr.length)];
        context.fillText(text_1, i_1 * fontSize, drops[i_1] * fontSize);
        if (drops[i_1] * fontSize > h && Math.random() > .98) {
            drops[i_1] = 0;
        }
        drops[i_1]++;
    }
    context.restore();
}
(function drawFrame() {
    window.requestAnimationFrame(drawFrame);
    context.fillStyle = clearColor;
    context.fillRect(0, 0, w, h);
    draw();
})();
function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}
resize();
addEventListener("resize", resize);
