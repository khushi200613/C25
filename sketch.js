const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var balls=[];



function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  //PI means 180 
  angle = -PI/4

  tower = new Tower(150, 350, 160, 310);
  ground = new Ground(600,height-1,width,10)
  canon = new Canon(180,110,110,50,angle);
 
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  

  tower.display();
  canon.display();
 for(var i=0;i<balls.length;i++){
   showcanonballs(balls[i],i)
 }
 
}
function keyPressed(){
  if(keyCode===DOWN_ARROW){
    canonball=new Ball (canon.x,canon.y)
    balls.push(canonball)
  }

}
function showcanonballs(ball,index){
  ball.display()
  if(ball.body.position.x>=width||ball.body.position.y>= height-100){
    World.remove(world,ball.body)
    balls.splice(index,1)
  }
}
function keyReleased(){
  if(keyCode===DOWN_ARROW){
    balls[balls.length-1].shoot()
  }
}








