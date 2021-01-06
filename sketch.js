var ground,groundImage,invisibleg

var runner,runnerAnimation

var obstacle,enemy1img,enemy2img,enemy3img,enemy4img

var enemy1,enemy2,enemy3,enemy4

 var gamestate="play"

 var score=0

 var sun,sunImage

 var cloud,cloudImage
 
 var deathsound,jumpsound

 var bg1

 var bullet,bulletimg

 var health

function preload(){
groundImage=loadImage("images/main ground.png")
  runnerAnimation= loadAnimation("images/sprite1.png","images/sprite2.png","images/sprite3.png","images/sprite4.png","images/sprite5.png","images/sprite6.png")
 bg = loadImage("images/Main bg.jpg")
 bulletimg = loadImage("images/bullet-png-images-9.png")
 enemy1img=loadImage("images/Enemy 1.png")
  enemy2img=loadImage("images/Enemy2.png")
   enemy3img=loadImage("images/Enemy3.png")
  enemy4img=loadImage("images/Enemy 4.png")

  
  /*cloudImage=loadImage("cloud.png")

  sunImage=loadImage("sun.png")
  
  deathsound=loadSound("collided.wav")
  
  jumpsound=loadSound("jump.wav")*/
  
  
}

function setup() {
  createCanvas(windowWidth,windowHeight)
bg1 =createSprite(550,300,windowWidth,windowHeight)
bg1.addImage(bg)
bg1.scale=3
  ground = createSprite(300,670,600,15)
 ground.addImage(groundImage)
  runner = createSprite(80,620,50,50)
  runner.addAnimation("runner",runnerAnimation)
runner.scale=1.5

  //runner.debug=true

 /* sun=createSprite(550,110,50,50)
  sun.addImage(sunImage)
  sun.scale=0.15

  invisibleg=createSprite(300,450,600,15)
  invisibleg.visible=false;*/
  obstacleGroup= new Group();
  enemy1g= new Group();
  enemy2g= new Group();
  enemy3g= new Group();
  enemy4g= new Group();
}

function draw() {

  background("white")
  /*textSize(20)
  fill("darkblue")
  text("Score: "+ score, 500,50);
  if(gamestate==="play") {
    score = score + Math.round(getFrameRate()/60);*/
    bg1.velocityX=-7
    ground.velocityX=-9

    if(bg1.x<600){
      bg1.x=813
      bg1.width=bg1.width/2
    }
  if(ground.x<600){
    ground.x=ground.width/2
  }
console.log(windowWidth)
    
  if(keyDown("space")&& runner.y >= 360) {
        bullet = createSprite(80,620,50,50)
        bullet.addImage(bulletimg)
        bullet.velocityX=40
        bullet.scale=0.03
        bullet.lifetime = 500
        
    }
   
  /* 
  runner.velocityY=runner.velocityY+0.8

  runner.collide(invisibleg)
  runner.depth=ground.depth-1

  if(runner.isTouching(obstacleGroup)){
    gamestate="end";
    deathsound.play();

  }
    
   */ 
  spawnobstacles();
  enemy1()
  enemy2()
  enemy3()
  enemy4()
  //  spawnclouds();
 drawSprites();

  }

  
  /*if(gamestate==="end"){
    background("black")
    stroke("yellow")
    fill("yellow")
    textSize(30)
    text("Game Over",225,300)
    text("Score: "+ score, 300,50);

    
  }



*/
function spawnobstacles(){

  if(frameCount % 125===0){
    obstacle=createSprite(1100,600,50,50)
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: obstacle.addImage(enemy1img);
              break;
      case 2: obstacle.addImage(enemy2img);
              break;
      case 3: obstacle.addImage(enemy3img);
               break;
        case 4: obstacle.addImage(enemy4img);
               break;        
              default:break;
    }
    
    
    obstacle.velocityX=-10
    obstacle.scale=0.9
    obstacle.depth=ground.depth+1
     obstacle.lifetime=90
   obstacleGroup.add(obstacle);
  
  }
  


}

function enemy1(){
  enemy1 = createSprite(1100,600,50,50)
  enemy1.addImage(enemy1img)
  enemy1.velocityX=-10
  enemy1.scale=0.9
  enemy1.depth=ground.depth+1
   enemy1.lifetime=90
 enemy1g.add(enemy1);
}

function enemy2(){
  enemy2 = createSprite(1100,600,50,50)
  enemy2.addImage(enemy2img)
  enemy2.velocityX=-10
  enemy2.scale=0.9
  enemy2.depth=ground.depth+1
   enemy2.lifetime=90
 enemy2g.add(enemy2);
}

function enemy3(){
  enemy3 = createSprite(1100,600,50,50)
  enemy3.addImage(enemy3img)
  enemy3.velocityX=-10
  enemy3.scale=0.9
  enemy3.depth=ground.depth+1
   enemy3.lifetime=90
 enemy3g.add(enemy3);
}

function enemy4(){
  enemy4 = createSprite(1100,600,50,50)
  enemy4.addImage(enemy4img)
  enemy4.velocityX=-10
  enemy4.scale=0.9
  enemy4.depth=ground.depth+1
   enemy4.lifetime=90
 enemy4g.add(enemy4);
}
/*
function spawnclouds (){
   if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,200));
    cloud.addImage(cloudImage);
    cloud.scale = 1;
    cloud.velocityX =-7;
   cloud.depth=runner.depth-1
     cloud.lifetime=100
   }
  
  
}*/











