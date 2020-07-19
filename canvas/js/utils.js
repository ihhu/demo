function rotateToMouse(mx,my,ox,oy){
    let dx = mx - ox;
    let dy = my - oy;
    let angle = Math.atan2(dy,dx);
    return angle;
}
window.utils = {
    /**
     * 解析color
     *
     * @param {string} color
     * @param {booleam} toNumber
     * @returns
     */
    parseColor(color, toNumber = false) {
        if (toNumber === true) {
            if (typeof color === 'number') {
                return (color | 0); // num | 0 -> num
            }
            // 如果传入的是#fff000,那么得到的是fff000，将#剪切掉
            if (typeof color === 'string' && color[0] === '#') {
                color = color.slice(1);
            }
            return window.parseInt(color, 16);
        } else {
            // 比如：color = 100; 
            // (color | 0).toString(16) -> 64
            // '00000' + (color | 0).toString(16) ->'0000064';
            // '#'+('00000' + (color | 0).toString(16)).substr(-6); ->'#000064';
            if (typeof color === 'number') {
                color = '#' + ('00000' + (color | 0).toString(16)).substr(-6); //pad
            }
            return color;
        }
    },
    /**
     * 鼠标移动
     *
     * @param {Element} element
     * @returns
     */
    captureMouse(element){
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
};
