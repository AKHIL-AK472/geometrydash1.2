var invisibleGround;
var ground, ball;
var box,boxImage;
function preload(){
    bgImage=loadImage("sprites/background.png");
    boxImage=loadImage("sprites/pc.png");
} 
function setup(){
     createCanvas(600,400);
    bg=createSprite(400,0,600,400);
    bg.velocityX=-3;
    bg.scale=1.2;
bg.addImage(bgImage);
bg.x=bg.width/2;
   
invisibleGround=createSprite(300,350,600,20);
  invisibleGround.shapeColor="yellow"

 box=createSprite(200,200,10,10);
 box.addImage("box",boxImage);
box.scale=0.2;
    
}

function draw(){
    background(0);
    
    if(bg.x<0){
        bg.x=bg.width/2;
    }

    if(keyDown("space")){
        box.velocityY=-10;
    }
    box.velocityY=box.velocityY+0.8;

    box.collide(invisibleGround);
   
   drawSprites();

    
}