function rotateToMouse(mx,my,ox,oy){
    let dx = mx - ox;
    let dy = my - oy;
    let angle = Math.atan2(dy,dx);
    return angle;
}
window.utils = {};

window.utils.captureMouse = function(element){
    const mouse = {x:0,y:0}
    element.addEventListener("mousemove",function(event){
        let x,y;
        
        if(event.pageX||event.pageY){
            x = event.pageX;
            y = event.pageY;
        }else{
            x = event.clientX + document.body.scrollLeft +document.documentElement.scrollLeft;
            y = event.clientY + document.body.scrollTop +document.documentElement.scrollTop;
        }
        
        x -= element.offsetLeft;
        y -= element.offsetTop;

        mouse.x = x;
        mouse.y = y;
    },false)

    return mouse;
}