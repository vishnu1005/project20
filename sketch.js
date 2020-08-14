var car,wall;
var speed,weight;
var car2,car3,speed2;


function setup() {
  createCanvas(600,400);

  wall=createSprite(600,600,60,height/2);
  car=createSprite(50, 50, 50, 0);
  car2=createSprite(50, 150, 50, 0);
  car3=createSprite(50, 250, 50, 0);


  speed=random(1,100);
  weight=random(400,1500);
  speed2=random(1,100);
  speed3=random(100,150);

  car.velocityX=speed;
  car2.velocityX=speed2;
  car3.velocityX=speed;


  wall.shapeColor=color(0,0,0);


}

function draw()
 {
  background(255,255,255);

  line(600-5,0,600-5,400);

  for (var i = 0; i < 600; i=i+20) 
    {
      line(i,200,i+10,200);
      line(i,210,i+10,210);
    }


if(wall.x-car.x<(car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation= 0.5*weight*speed*speed/22500;

  if(deformation>180)
  {
    car.shapeColor=color(255,0,0);
  }

  if(deformation<180 && deformation>100)
  {
    car.shapeColor=color(230,230,0);
  }

  if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }
  
  

}

if(wall.x-car2.x<(car2.width+wall.width)/2)
{
  var deformation2= 0.5*weight*speed2*speed2/22500;
  car2.velocityX=0;
  

  if(deformation2>180)
  {
    car2.shapeColor=color(255,0,0);
  }

  if(deformation2<180 && deformation2>100)
  {
    car2.shapeColor=color(230,230,0);
  }

  if(deformation2<100)
  {
    car2.shapeColor=color(0,255,0);
  }
  
  

}

if(wall.x-car3.x<(car3.width+wall.width)/2)
{
  car3.velocityX=0;
  var deformation3= 0.5*weight*speed3*speed3/22500;
  

  if(deformation3>180)
  {
    car3.shapeColor=color(255,0,0);
  }

  if(deformation3<180 && deformation3>100)
  {
    car3.shapeColor=color(230,230,0);
  }

  if(deformation3<100)
  {
    car3.shapeColor=color(0,255,0);
  }
  
  

}

  drawSprites();
 }