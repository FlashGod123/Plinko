const Engine = Matter.Engine;
const World= Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var grnd;
var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];


function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;

  grnd = new ground(240,800,800,10);

  for(var k = 0; k<=width; k=k+80){
    divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new plinko(j,75,10));
  }

  for(var j = 15; j<=width-10; j=j+50){
    plinkos.push(new plinko(j,175,10));
  }

  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new plinko(j,275,10));
  }

  for(var j = 15; j<=width-10; j=j+50){
    plinkos.push(new plinko(j,375,10));
  }

  
}

function draw() {
  background(0);  
  Engine.update(engine);

  grnd.display();

  if(frameCount%60 === 0){
    particles.push(new particle(random(width/2-10,width/2+10),10,10));
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var f = 0; f < particles.length; f++){
    console.log(particles.length);
    particles[f].display();
  }
  
}