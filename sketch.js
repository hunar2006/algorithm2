var fixedRect,movingRect,spriteX



function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 100, 50);
 fixedRect.shapeColor="green";
 fixedRect.debug=true;

 movingRect = createSprite(100,100,50,100);
 movingRect.shapeColor="green";
 movingRect.debug=true;

 spriteX = createSprite(100,100,100,100);
 spriteX.shapeColor="white";

}

function draw() {
  background(0,0,0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(movingRect.x-fixedRect.x);
  if(isTouching(movingRect,spriteX)){
   spriteX.shapeColor="red";
   movingRect.shapeColor="yellow" 
  }
  else{
    spriteX.shapeColor="white";
    movingRect.shapeColor="green";
  }
  drawSprites();
}
