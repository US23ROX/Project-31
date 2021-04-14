const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinko1 = new Plinko(100,100);

var block1 = new Block(200,790,800,20);
var block2 = new Block(10,730,20,100);
var block3 = new Block(10,730,20,100);
var block4
var block5
var block6
var block7 = new Block(790,730,20,100);

var engine
var world

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);


  plinko1.display();
  block1.display();
}