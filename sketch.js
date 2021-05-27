const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
      
  block8  = new Block(330,235,30,40);
  block9  = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16  = new Block(390,155,30,40);

  polygon= new Polygon(50,50,50);
  ground2 = new Ground(400,390,800,10)
  ground = new Ground(390,245,230,10);
  slingshot = new SlingShot(polygon.body,{x:50,y:100});
}

function draw() {
  background(255,255,255); 

  Engine.update(engine);
  
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  polygon.display();
  slingshot.display();

  ground.display();
  ground2.display();

   


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}