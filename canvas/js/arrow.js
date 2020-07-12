// 箭头类
class Arrow{
    /**
     *Creates an instance of Arrow.
     * @param {number} [x=0] 中心点 x
     * @param {number} [y=0] 中心点 y
     * @param {number} [rotate=0] 旋转角度 rotate
     * @param {string} [color="#ffff00"] 填充颜色 color
     * @memberof Arrow
     */
    constructor(x = 0,y = 0,rotate = 0,color = "#ffff00"){
        this.x = x;
        this.y = y;
        this.rotate = rotate;
        this.color = color;
    };
    /**
     *
     *
     * @param {*} context
     * @memberof Arrow
     */
    draw(context){
        let {x,y,rotate,color} = this;
        context.save();
        context.translate(x,y);
        context.rotate(rotate);
        context.lineWidth = 5;
        context.fillStyle = color;
        context.beginPath();
        context.moveTo(-50,-25);
        context.lineTo(0,-25);
        context.lineTo(0,-50);
        context.lineTo(50,0);
        context.lineTo(0,50);
        context.lineTo(0,25);
        context.lineTo(-50,25);
        context.closePath();
        context.stroke();
        context.fill();
        context.restore();
    }
}