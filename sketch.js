var player, wormsGroup, score = 0, playerImg, swampImg, wormImg, swamp;

function preload() {
  //load game assets
  playerImg = loadImage("Images/frog.png");
  swampImg = loadImage("Images/swampImg.png");
  wormImg = loadImage("Images/worm.png");
}


function setup() {
  createCanvas(600,600);
  swamp = createSprite(300,300);
  swamp.addImage(swampImg);
  swamp.scale = 2.5;
  player = createSprite(30,550,30,30);
  player.addImage(playerImg);
  player.scale = 0.4;
  wormsGroup = new Group() 
}

function draw() {
  background("black"); 
  stroke("red") 
  noFill();
  ellipse(100,350,40,30);

  player.x = mouseX;
  player.y = mouseY;

  if(player.x > 90 && player.x < 150 && player.y > 320 && player.y < 380){
    text("NO CHEATING ",200,200);
    player.x = 30;
    player.y = 30;
  }
  
  generateWorms();

  for(var i = 0; i < wormsGroup.length; i++){
    var temp = wormsGroup.get(i);
    if(player.isTouching(temp)){
      score++;
      temp.destroy();
      temp = null;
    }
  }

  drawSprites();

  textSize(15);
  text("WORMS DESTROYED: "+score,350,50);

}

function generateWorms(){
  if(frameCount%20==0){
  var worm = createSprite(random(40,380),random(290,380),40,5);
  worm.addImage(wormImg);
  worm.scale = random(0.1,0.3);
  worm.shapeColor = "green";
  worm.velocityX = random(-6,6);
  worm.velocityY = random(-6,6);
  console.log(frameCount);
  wormsGroup.add(worm)
  }
}