
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var wall_Bottom;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  wall_Bottom = new Ground(200,390,400,20);
  wall_Right = new Ground(390, 200,20, 400);
  wall_Left = new Ground(10, 200,20,400);
  wall_Top = new Ground(200, 10,400,20);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  wall_Bottom.showGround();
  wall_Right.showGround();
  wall_Left.showGround();
  wall_Top.showGround();
  
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x: 0, y: 0},{x:0, y:0.05});
  }
}
