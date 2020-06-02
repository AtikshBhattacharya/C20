var movingrect, fixedrect;

function setup() {
  createCanvas(1000,800);
  //moving rectangle and fixed rectangle are created with colour
  movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor="green";
  movingrect.debug=true;
  fixedrect=createSprite(200,200,80,30);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;
}

function draw() {
  background(255,255,255); 
  //moving rectangle is made to follow mouse 
movingrect.x=mouseX;
movingrect.y=mouseY;
//color change is applied on contact
if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
  && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
  &&movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
  && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
movingrect.shapeColor="red";
fixedrect.shapeColor="red";
}
else{
movingrect.shapeColor="green"; 
fixedrect.shapeColor="green";
}
  drawSprites();
}