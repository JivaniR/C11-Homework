var path, invisibleGround_1,invisibleGround_2
var runner, running
function preload(){
  //pre-load images
pathImg= loadImage("path.png");
running= loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path= createSprite(200,200);
path.addImage("abc",pathImg);
path.velocityY= 4;
path.scale= 1.2;

invisibleGround_1= createSprite(5,300,10,100)
invisibleGround_1.visible= false

invisibleGround_2= createSprite(399,300,10,100)
invisibleGround_2.visible= false

runner= createSprite(100,300);
runner.addAnimation("xyz", running);
runner.scale= 0.05;
}

function draw() {
  background(0);
if(path.y > 400){
  path.y= path.height/2;
}

runner.x= mouseX
runner.collide(invisibleGround_1 && invisibleGround_2)

drawSprites()
}
