class Umbrella{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            friction:0.1
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage('images/walking_1.png')
        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        push();
        fill("blue");
        image(this.image,this.body.position.x,this.body.position.y,this.radius*2,this.radius*2);
        pop();
    }
}