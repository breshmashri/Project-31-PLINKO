const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var stand1, stand2, stand3, stand4, stand5, stand6, stand7;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 250;

function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, 780, 1200, 10);
  
  for (var k = 0; k <= width; k = k +80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 6, divisionHeight));
  }
  for (var j = 50; j <= width; j = j +50) {
    plinkos.push(new Plinko(j, 75, 10));
  }
  for (var j = 30; j <= width-10; j = j +50) {
    plinkos.push(new Plinko(j, 175, 10));
  }
  for (var j = 50; j <= width; j = j +50) {
    plinkos.push(new Plinko(j, 275, 10));
  }
  for (var j = 30; j <= width-10; j = j +50) {
    plinkos.push(new Plinko(j,375,10));
  }
}

function draw() {
   background("black");

   Engine.update(engine);

   ground.display();

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  if(frameCount % 60 === 0){
   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }
 for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
   divisions[k].display();
 }
   drawSprites()
}
  