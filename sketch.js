var bg,sleep,brush,gym,eat,bath,move;
var astronaut;
function preload(){
  bg=loadImage("iss.png");
  sleep=loadAnimation("sleep.png");
  brush=loadAnimation("brush.png");
  bath=loadAnimation("bath1.png","bath2.png")
  gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  eat=loadAnimation("eat1.png","eat2.png")
  drink=loadAnimation("drink1.png","drink2.png")
  move=loadAnimation("move.png","move1.png")
}


function setup() {
  createCanvas(800,800);

  astronaut= createSprite(300, 230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1
}

function draw() {
  background(bg); 
  drawSprites();
  textSize(20);
  fill("white") ;
  text("Instruction",20,35);
  textSize(15);
  text("UP Arrow = Brushing",20,55);
  text("DOWN Arrow = Bathing",20,80);
  text("LEFT Arrow = Eating",20,90);
  text("RIGHT Arrow = Exercise",20,105);
  text("SPACE = Drinking",20,115);
  text("m KEY = Moving",20,130);
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=340;
  
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y=750;
  
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("exercise",gym);
    astronaut.changeAnimation("exercise");
    astronaut.y=400;
  
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=400;
  
  }

  if(keyDown("SPACE")){
    astronaut.addAnimation("drinking",drink);
    astronaut.changeAnimation("drinking");
    astronaut.y=400;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX=1;
    astronaut.velocity=1;
    astronaut.y=400;
  }

}