var garden,rabbit;
var gardenImg,rabbitImg;
var leaf, apple;
var leafImg, appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Creating background sprite
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit sprite
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  //make the rabbit move with the mouse
  rabbit.x = mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges)

  drawSprites();

  var select_sprites = Math.round(random(1,2));
  if(frameCount % 80 ==0) {
    if (select_sprites == 1) {
      createApples();
    }
    else {
      createLeaves();
    }
  }
}

//function to spawn apples
function createApples() {
  apple = createSprite(random(50,350),40 ,5 ,5);
  apple.addImage(appleImg);
  apple.scale = 0.05;
  apple.y = 4
  apple.lifetime = 150;
  apple.velocityY = 2
}

function createLeaves() {
  leaf = createSprite(random(50,350),40 ,10 ,10);
  leaf.addImage(leafImg);
  leaf.scale = 0.05;
  leaf.y = 4
  leaf.lifetime = 150;
  leaf.velocityY = 2
}




