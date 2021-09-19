var zombie,zombie1,zombie2,zombie3,zombie4 ;
var backgroundImg;

function preLoad() {
    zombie1 = loadImage("./assets/zombie.png");
    zombie2 = loadImage("./assets/zombie.png");
   
    zombie3 = loadImage("./assets/zombie.png");
    zombie4 = loadImage("./assets/zombie.png");

    backgroundImg = loadImage("./assets/background.png");
}

function setup() {
    zombie = createsprit(width/2, height-110);
    zombie.addAnimation("lefttoright", zombie1,zombie2,zombie1);
    zombie.addAnimation("righttoleft", zombie1,zombie2,zombie1);
    zombie.scale = 0.1;
    zombie.velocityX = 10
    
    
}

function draw() {
    drawSprites()
}