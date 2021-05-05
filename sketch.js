var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles 
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
 

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  particles = new Particle(random(0,400),10,10,10);
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 text("500",5,550)
 text("500",85,550)
 text("500",165,550)
 text("500",245,550)
 text("100",325,550)
 text("100",405,550)
 text("100",485,550)
 text("200",565,550)
 text("200",645,550)
 text("200",725,550)
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }*/
 
  if(particles!=null)
  {
particles.display()
    if(particles.body.position.y>650)
    {

      if(particles.body.position.x<300)
      {
        score=score+500 
        particles=null
      }

      else if(particles.body.position.x>301 && particles.body.position.x<600)
      {
        score=score+100
        particles=null
      }

      else if(particles.body.position.x>601 && particles.body.position.x<900)
      { 
        score=score+200
        particles=null
      }
      
    }
  }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
}