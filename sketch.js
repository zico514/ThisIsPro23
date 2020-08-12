var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1Sprite=createSprite(395,647,200,20);
	box1Sprite.shapeColor=color(255,0,0)
	
	box2Sprite=createSprite(290,603,20,100);
	box2Sprite.shapeColor=color(255,0,0)

	box2Sprite=createSprite(490,603,20,100);
box2Sprite.shapeColor=color(255,0,0)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box1=Bodies.rectangle(395,647,200,20,{isStatic:true})
	World.add(world,box1);

	box2=Bodies.rectangle(290,603,20,100,{isStatic:true});
	World.add(world,box2);
	
	box3=Bodies.rectangle(490,603,20,100,{isStatic:true});
	World.add(world,box3);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  text(mouseX+","+mouseY,mouseX,mouseY);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 
 

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic( packageBody, false);
    
  }
}



