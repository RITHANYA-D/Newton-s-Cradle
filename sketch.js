const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Body   = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1 ,bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
	world  = engine.world;

  roof = new Roof();

  bob1  = new Bob(300, 300);
  bob2  = new Bob(350, 300);
  bob3  = new Bob(400, 300);
  bob4  = new Bob(450, 300);
  bob5  = new Bob(500, 300);

  rope1 = new String(roof.roof, bob1.bob, -100);
  rope2 = new String(roof.roof, bob2.bob, -50);
  rope3 = new String(roof.roof, bob3.bob, 0);
  rope4 = new String(roof.roof, bob4.bob, +50);
  rope5 = new String(roof.roof, bob5.bob, +100);

	Engine.run(engine);
  
}


function draw() {

  background("red");

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed () {
  if (keyCode === UP_ARROW) {
     Matter.Body.applyForce(bob1.bob, bob1.bob.position, {x:-50, y:-50});
  }
}