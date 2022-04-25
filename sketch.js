const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var Rbutton;
var Ubutton;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  var ball_options = {restitution:0.95};
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  Rbutton = createImg('right.png');
  Rbutton.position(220,30);
  Rbutton.size(50,50);
  Rbutton.mouseClicked(hforce)

  Ubutton = createImg('up.png');
  Ubutton.position(20,30);
  Ubutton.size(50,50);
  Ubutton.mouseClicked(vforce)



}


function draw() 
{
  background(51);
  ellipse( ball.position.x,ball.position.y,20 );
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

}
function hforce(){
  Matter.Body.applyForce(
    ball,{x:0,y:0},{x:0.05,y:0}
  );
}
function vforce(){
  Matter.Body.applyForce(
    ball,{x:0,y:0},{x:0,y:-0.05}
  );
}


