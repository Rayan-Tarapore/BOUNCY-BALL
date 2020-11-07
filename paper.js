class Paper{
    constructor(x,y,radius){
    var ellipse_option={
        restitution: 0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.circle(x,y,radius,ellipse_option)
    this.radius= 40;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(200,100,50);
        circle(pos.x,pos.y,this.radius);
    }
}