// 球类
class Ball{
    /**
     *Creates an instance of Ball.
     * @param {*} [{radius="40",x,y,vx,vy,rotation,mass = 1,scaleX =1,scaleY = 1,name ="",color = "#00ff00",lineWidth = 1}={}]
     * @memberof Ball
     */
    constructor({radius=40, x=0, y=0, vx=0, vy=0, rotate, mass = 1, scaleX =1,scaleY = 1, name ="", color = "#00ff00", lineWidth = 1} = {}){
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
        this.rotate = rotate;
        this.mass = mass;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.name = name;
        this.color = color;
        this.lineWidth = lineWidth;
    };
    /**
     *
     *
     * @param {*} context
     * @memberof Arrow
     */
    draw(context){
        let {x,y,rotate,scaleX,scaleY,lineWidth,color,radius} = this;
        
        context.save();
        // 设置属性
        context.translate(x,y);
        context.rotate(rotate);
        context.scale(scaleX,scaleY);
        context.lineWidth = lineWidth;
        context.fillStyle = color;
        context.strokeStyle = color;

        // 绘制
        context.beginPath();
        context.arc(0,0,radius,0,Math.PI*2,false);
        context.closePath();        
        context.stroke();
        context.fill();

        context.restore();
    }
}