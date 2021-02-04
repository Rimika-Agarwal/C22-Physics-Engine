//namespacing/alias name
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//create your own engine and world
var engine, world;

//create a box body
var box;
var ground;

function setup() {
  createCanvas(800,400);

  //create an engine
  engine = Engine.create();

  //create your world inside your engine
  world = engine.world;

  //create a body - rectangular body
  box = Bodies.rectangle(200,200,50,50);

  //add the body to your world
  World.add(world,box);

  var ground_options = {
    isStatic: true,
  }
  ground = Bodies.rectangle(400,380,800,20,ground_options)
  World.add(world,ground);
  
  var ball_options = {
    restitution:1.0,
  }
 ball = Bodies.circle(100,200,20,ball_options)
  World.add(world,ball);
  
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  //console.log(box.position.y);

  rectMode(CENTER);
  rect(box.position.x,box.position.y,50,50);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  
  ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);
  
}