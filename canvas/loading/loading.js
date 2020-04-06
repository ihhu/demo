"use strict";
var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var rad = Math.PI * 2 / 100;
var speed = 0;
// 绘制文本
function text(n) {
    context.save();
    context.fillStyle = "#F47C7C";
    context.font = "bold 40px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(n.toFixed(0) + "%", centerX, centerY);
    context.restore();
}
// 绘制蓝色圆
function blueCircle(n) {
    context.save();
    context.beginPath();
    context.strokeStyle = "#49f";
    context.lineWidth = 12;
    context.arc(centerX, centerY, 100, -Math.PI / 2, -Math.PI / 2 + n * rad, false);
    context.stroke();
    context.restore();
}
// 绘制白色圆
function whiteCircle() {
    context.save();
    context.beginPath();
    context.strokeStyle = "#A5DEF1";
    context.lineWidth = 12;
    context.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
    context.closePath();
    context.stroke();
    context.restore();
}
// 绘制圆形loading
function drawCircleLoading(n) {
    whiteCircle();
    text(n);
    blueCircle(n);
}
function drawRectLoading(n) {
}
(function drawFrame() {
    window.requestAnimationFrame(drawFrame);
    context.clearRect(0, 0, canvas.width, canvas.height);
    // 绘制圆形loading
    drawCircleLoading(speed);
    if (speed > 100) {
        speed = 0;
    }
    speed += .1;
})();
