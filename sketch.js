const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground1;

function setup(){
createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Grounds(200,300,200,200)

    box1 = new box(200,200,50,50);
    
    box2 = new box(240,100,50,50)

   


}

function draw(){
    background(0);
    Engine.update(engine);
  
    box1.display();
    box2.display();
    ground1.display();
}