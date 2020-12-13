

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper,ground,dustbin;
var world;



function setup() {
	createCanvas(1300, 500);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


  dustbin=new Dustbin(1000,450);
	paper=new Paper(200,450,40);
	ground=new Ground(0,470,3000,20);
    



  //Create the Ground
  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  paper.display();
  ground.display();
  dustbin.display();



 // drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
  }
}


