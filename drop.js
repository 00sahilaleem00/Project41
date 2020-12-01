class Drop {
    constructor(x){
        var options = {
            isStatic:false,
            friction:0.1
        }
        this.x = x;
        this.y = 0;
        this.radius = 10;
        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        push();
        fill("blue");
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    }
    updatePosition(){
            if(this.body.position.y > 1000){
                Body.setPosition(this.body, {x:random(0,800),y:0});
            }
    }
}