var ghost,ghostImg
var toer,toerImg
var climber,climberImg
var door,doorImg,doorGroup,climberGroup
var gameState = "PLAY"


function preload()
{
  ghostImg = loadImage("ghost-standing.png")
  climberImg = loadImage("climber.png")
  toerImg = loadImage("tower.png")
  doorImg = loadImage("door.png")
}
function setup()
{
  createCanvas(600,600)
  toer = createSprite(300,300)
  toer.addImage(toerImg)
  toer.velocityY = 1
  
  ghost = createSprite(300,300,50,50)
  ghost.addImage(ghostImg)
  ghost.scale = 0.5
  
  doorGroup = new Group()
  climberGroup = new Group()
  
  invisibleGroup = new Group()
  
}

function draw()
{
  background(0)
  
  if(gameState === "PLAY")
   {
     if(keyDown("left"))
       { 
         ghost.x=ghost.x-3
        
        }
      if(keyDown("right"))
       {
         ghost.x=ghost.x+3
        
        }
     if(keyDown("space"))
      {
       ghost.velocityY=-3
        
        }
     ghost.velocityY = ghost.velocityY+0.2
     
     if(toer.y > 400)
      {
        toer.y = 300
        
        }
     spawnDoor();
     
   if(climberGroup.isTouching(ghost)){
     gameState = "END"
   }
     
     
     drawSprites();
     
     }
  if(gameState === "END")
   
  { 
    stroke("red")
     fill("white")
    textSize(22)
    text("GAMEOVER",300,300)
     }
  
  
}
function spawnDoor()
{
  if(frameCount % 240 === 0)
  {
    door = createSprite(200,180,20,20)
    door.addImage(doorImg)
   
    climber = createSprite(200,240,20,20)
    climber.addImage(climberImg)
    
    door.x = Math.round(random(120,400))
    climber.x = door.x
    
    climber.depth = door.depth
    
    ghost.depth = door.depth
    ghost.depth = ghost.depth + 1
    
    door.velocityY = 1
    climber.velocityY = 1
    
    door.lifetime = 500
    climber.lifetime = 500
    
    doorGroup.add(door)
    climberGroup.add(climber)
    
    
  }
  
}