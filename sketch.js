var ball,img,paddle, ballLoad, paddleLoad, edge, topEdge, bottomEdge, leftEdge, randomNumber;
function preload() {
  ballLoad = loadImage("ball.png");
  paddleLoad = loadImage("paddle.png");
}
function setup() {
  createCanvas(600, 600);
  ball = createSprite(300,300);
  ball.addAnimation("ball",ballLoad)
  ball.velocityX=9;
  
  
  paddle = createSprite(550,300);
  paddle.addAnimation("paddle",paddleLoad);
  
  topEdge = createSprite(300,1,600,1);
  topEdge.visible=false;
  
  bottomEdge = createSprite(300,599,600,1);
  bottomEdge.visible=false;
  
  leftEdge = createSprite(1,300,1,600);
  leftEdge.visible=false;
  
  randomNumber = random(1,2);
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(150,218,217);
  /* create Edge Sprites here */
  edge = createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(leftEdge);
  paddle.collide(bottomEdge);
  paddle.collide(topEdge);
  //ball.bounceOff(paddle);
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  paddle.debug=false;
  if(keyDown(UP_ARROW))
  {
     paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  
   if(ball.isTouching(paddle)){
    ball.velocityY=Math.round(random(-9,9));
    ball.velocityX=-9;
  }
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY=Math.round(random(-5,5));
}

