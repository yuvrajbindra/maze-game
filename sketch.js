var lives = 3
var gameState = 1
function setup() {
createCanvas(400,400)

//creating the game object
Sofia = createSprite(20,25,18,18);  
Sofia.shapeColor = "orange";


//creating the maze
cardboard1 = createSprite(10,70,100,20);
 cardboard1.shapeColor = "brown";
 cardboard2 = createSprite(100,50,20,100);
cardboard2.shapeColor = "brown";
 cardboard3 = createSprite(80,130,100,20);
cardboard3.shapeColor = "brown";
 cardboard4 = createSprite(50,250,20,100);
cardboard4.shapeColor = "brown";
 cardboard5 = createSprite(130,210,100,20);
 cardboard5.shapeColor = "brown";
 cardboard6 = createSprite(10,250,100,20);
 cardboard6.shapeColor = "brown";
 cardboard7 = createSprite(160,120,20,100);
 cardboard7.shapeColor = "brown";
 cardboard8 = createSprite(150,20,100,20);
 cardboard8.shapeColor = "brown";
 cardboard9 = createSprite(250,70,20,100);
 cardboard9.shapeColor = "brown";
 cardboard10 = createSprite(270,150,100,20);
 cardboard10.shapeColor = "brown";
 cardboard11 = createSprite(330,50,100,20);
 cardboard11.shapeColor = "brown";
 cardboard12 = createSprite(340,125,20,100);
 cardboard12.shapeColor = "brown";
  cardboard13 = createSprite(220,250,20,100);
 cardboard13.shapeColor = "brown";
  cardboard14 = createSprite(330,210,150,20);
 cardboard14.shapeColor = "brown";
  cardboard15 = createSprite(100,300,20,100);
 cardboard15.shapeColor = "brown";
  cardboard16 = createSprite(180,310,100,20);
 cardboard16.shapeColor = "brown";
  cardboard17 = createSprite(30,352,20,100);
 cardboard17.shapeColor = "brown";
  cardboard18 = createSprite(175,352,20,100);
 cardboard18.shapeColor = "brown";
  cardboard19 = createSprite(280,290,20,100);
 cardboard19.shapeColor = "brown";
  cardboard20 = createSprite(350,270,120,20);
 cardboard20.shapeColor = "brown";
  cardboard21 = createSprite(250,390,100,20);
 cardboard21.shapeColor = "brown";
  cardboard22 = createSprite(330,370,20,100);
 cardboard22.shapeColor = "brown";
  target = createSprite(395,375,10,50);
target.shapeColor = "yellow";
edges=createEdgeSprites();
}
function draw() {
//setting the background color to white 
background("pink");

if(gameState===1) {
camera.position.x = Sofia.x
camera.position.y = Sofia.y

Sofia.velocityX=0;
Sofia.velocityY=0;
if ( Sofia.bounce(target))  
{
textSize(40);
stroke("red");
text("You Win", 300,300);
cardboard1.destroy()
cardboard2.destroy()
cardboard3.destroy()
cardboard4.destroy()
cardboard5.destroy()
cardboard6.destroy()
cardboard7.destroy()
cardboard8.destroy()
cardboard9.destroy()
cardboard10.destroy()
cardboard11.destroy()
cardboard12.destroy()
cardboard13.destroy()
cardboard14.destroy()
cardboard15.destroy()
cardboard16.destroy()
cardboard17.destroy()
cardboard18.destroy()
cardboard19.destroy()
cardboard20.destroy()
cardboard21.destroy()
cardboard22.destroy()
target.destroy()
Sofia.destroy()
}
stroke(rgb(128, 128, 128));

if (keyDown("UP_ARROW")) {

Sofia.velocityX=0;
Sofia.velocityY=-4;
}
if (keyDown(DOWN_ARROW)) {

Sofia.velocityX=0;
Sofia.velocityY=4;
}
if (keyDown(LEFT_ARROW)) {

Sofia.velocityX=-4;
Sofia.velocityY=0;
}
if (keyDown(RIGHT_ARROW)) {

Sofia.velocityX=4;
Sofia.velocityY=0;
}

textSize(19);
textFont("Helvetica");
text("Cup", 360, 340);
textSize(19);
text("Sofia",30,43);
if(Sofia.isTouching(cardboard1)||Sofia.isTouching(cardboard2)||
Sofia.isTouching(cardboard3)||Sofia.isTouching(cardboard4)||
Sofia.isTouching(cardboard5)||Sofia.isTouching(cardboard6)||
Sofia.isTouching(cardboard7)||Sofia.isTouching(cardboard8)||
Sofia.isTouching(cardboard9)||Sofia.isTouching(cardboard10)||
Sofia.isTouching(cardboard11)||Sofia.isTouching(cardboard12)||
Sofia.isTouching(cardboard13)||Sofia.isTouching(cardboard14)||
Sofia.isTouching(cardboard15)||Sofia.isTouching(cardboard16)||
Sofia.isTouching(cardboard17)||Sofia.isTouching(cardboard18)||
Sofia.isTouching(cardboard19)||Sofia.isTouching(cardboard20)||
Sofia.isTouching(cardboard21)||Sofia.isTouching(cardboard22)) {
  Sofia.x = 20
  Sofia.y = 25
  lives = lives-1
}
if(lives<=0) {
  gameState = 0
}}
if(gameState===0) {
cardboard1.destroy()
cardboard2.destroy()
cardboard3.destroy()
cardboard4.destroy()
cardboard5.destroy()
cardboard6.destroy()
cardboard7.destroy()
cardboard8.destroy()
cardboard9.destroy()
cardboard10.destroy()
cardboard11.destroy()
cardboard12.destroy()
cardboard13.destroy()
cardboard14.destroy()
cardboard15.destroy()
cardboard16.destroy()
cardboard17.destroy()
cardboard18.destroy()
cardboard19.destroy()
cardboard20.destroy()
cardboard21.destroy()
cardboard22.destroy()
target.destroy()
Sofia.destroy()
camera.position.x = width/2
camera.position.y = height/2
textSize(40);
stroke("red");
text("You Loose", 120,200);
}
Sofia.collide(target);

Sofia.bounceOff(edges);



drawSprites();


}
