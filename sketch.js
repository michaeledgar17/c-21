var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "brown";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "blue";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "yellow";
  gameObject4 = createSprite(700, 100, 50, 50);
  gameObject4.shapeColor = "pink";
  gameObject1.velocityX=+2
  gameObject4.velocityX=-2
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
bounceOff(gameObject1, gameObject4)
 if ( isTouching(movingRect,gameObject2 )){

 movingRect.shapeColor = "red";
 fixedRect.shapeColor = "red";

 }else{

 movingRect.shapeColor = "green";
 fixedRect.shapeColor = "green";

 };
 
  drawSprites();
}
// user defined function 
// True and False are called BOOLEAN Values in javascript 





