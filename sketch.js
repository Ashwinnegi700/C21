var fixedRect, movingRect,ashwin;

function setup() {
  createCanvas(1200,800);
  ashwin = createSprite(700,400,50,80)
  ashwin.shapeColor="green"
  fixedRect = createSprite(600, 400, 50, 80);
  
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;


}


function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(ashwin,movingRect)){
  ashwin.shapeColor = "red";
  movingRect.shapeColor = "red";
}else{
  ashwin.shapeColor = "green";
  movingRect.shapeColor = "green";
}


  drawSprites();
}