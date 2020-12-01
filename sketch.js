const Body = Matter.Body;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var engine,world;
var drops, maxDrops, umbrella;
var thunder1, thunder2, thunder3, thunder4;
var thunder1img, thunder1img, thunder1img, thunder1img;

function preload(){
    thunder1img = loadImage('images/1.png');
    thunder2img = loadImage('images/2.png');
    thunder3img = loadImage('images/3.png');
    thunder4img = loadImage('images/4.png');
}

function setup(){
    createCanvas(800,1000);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(400,920,90);
    drops = [];
    maxDrops = 30;
}

function draw(){
    Engine.update(engine);
    background(0);

    if(frameCount%200==0){
        if(thunder1!=undefined){
            thunder1.remove();
        }
        if(thunder2!=undefined){
            thunder2.remove();
        }
        if(thunder3!=undefined){
            thunder3.remove();
        }
        if(thunder4!=undefined){
            thunder4.remove();
        }
    }

    if(frameCount%300==0){
        var thunderStrike = random(1,4);
        var light = round(thunderStrike);
        switch(light){
            case 1:
                thunder1 = createSprite(350,350,800,800);
                thunder1.addImage(thunder1img);
                break;
            case 2:
                thunder2 = createSprite(400,350,800,800);
                thunder2.addImage(thunder2img);
                break;
            case 3:
                thunder3 = createSprite(400,320,800,800);
                thunder3.addImage(thunder3img);
                break;
            case 4:
                thunder4 = createSprite(400,320,800,800);
                thunder4.addImage(thunder4img);
                break;
            default:
                break;
        }
    }

    if(frameCount%30==0&&drops.length<=maxDrops){
        drops.push(new Drop(random(0,800)));
    }

    umbrella.display();

    
    for(var i=0; i<=maxDrops; i++){
        if(drops[i]!=undefined){
            drops[i].display();
            if(i)
            drops[i].updatePosition();
        }
    }

    drawSprites();
}   

