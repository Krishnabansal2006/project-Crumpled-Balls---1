const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var ground_options ={
        isStatic: true
    }

	fill("yellow");
    ground = Bodies.rectangle(400,640,700,20,ground_options);
	World.add(world,ground);
	
	//Create the Bodies Here.

	var paperObject_options ={
		isStatic: false,
		restitution:0.3,
		friction:0.5,
		density:1.2
    }

	fill("green");
    paperObject = Bodies.circle(80,610,20,paperObject_options);
	World.add(world,ground);
	
	box_bottom = Bodies.rectangle(600,620,200,20,{isStatic:true});
	World.add(world,ground);

	box_side1 = Bodies.rectangle(500,580,20,100,{isStatic:true});
	World.add(world,ground);


	box_side2 = Bodies.rectangle(700,580,20,100,{isStatic:true});
	World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(paperObject.position.x,paperObject.position.y,20,20);
  
  rect(box_bottom.position.x,box_bottom.position.y,200,20);
  rect(box_side2.position.x,box_side2.position.y,20,100);
  rect(box_side1.position.x,box_side1.position.y,20,100);

  

  drawSprites();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW ) {
		Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}

}

