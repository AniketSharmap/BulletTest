var wall,thickness,bullet;
var speed,weight;
function setup() 
{
    createCanvas(1600,400);
    createEdgeSprites();
    wall = createSprite(1450,200,thickness,height/2)
    wall.shapeColor = color("aqua");
    bullet = createSprite(100,200,40,20);
    thickness = random(22,90);
    speed = random(223,320);
    weight = random(30,52);
}

function draw() 
{
  background(0);
  bullet.velocityX = speed;
  drawSprites();
  if (isCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed * (thickness *thickness *thickness );

    if (damage > 10)
    {
       wall.shapeColor = color("Red");
    }

    if (damage < 10)
    {
      wall.shapeColor = color("Green");
    }
  }
}

function isCollided(lbullet,lwall) //--> Parameterized function which takes two parameters bullet and wall
{
   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x ;

   if (bulletRightEdge >= wallLeftEdge)
   {
     return true;
   }

   return false;
}
