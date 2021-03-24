var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudimage
var obstace, obstacleimage
var score=0
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloudimage=loadImage ("cloud.png");
  obstacleimage=loadImage("obstacle2.png")
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(0);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  text("score:"+score,400,50)
  score= score+Math.round(getFrameRate()/10)
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  spawnObstacles()
  spawnClouds()
  trex.collide(invisibleGround);
  drawSprites();
}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random (80,120));
    cloud.addImage("cloud",cloudimage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
}
function spawnObstacles() {
  //write code here to spawn the obstacles
  if (frameCount % 80 === 0) {
    var obstacle = createSprite(600,180,40,10);
    
    obstacle.addImage("obstacle",obstacleimage);
    obstacle.scale = 0.5;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    //adjust the depth
    obstacle.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
}