
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango,mango2,mango3,mango4,mango5,mango6,mangoIMG
var tree

function preload(){

mangoIMG=loadImage("mango.png")
}


function setup() {
  createCanvas(400,400);
  mango=createSprite(200,30,40,40)
  mango2=createSprite(269,30,40,40)
  mango3=createSprite(89,30,40,40)
  mango4=createSprite(142,30,40,40)
  mango5=createSprite(359,30,40,40)
  mango6=createSprite(95,30,40,40)
  mango.addImage(mangoIMG)
  mango2.addImage(mangoIMG)
  mango3.addImage(mangoIMG)
  mango4.addImage(mangoIMG)
  mango5.addImage(mangoIMG)
  mango6.addImage(mangoIMG)
  tree=createImg("mangotree.png")
  tree.position(330,200)
  tree.size(100,400)
  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  if(rock.isTouching(mango)){
    mango.destroy()
  }
  if(rock.isTouching(mango2)){
    mango2.destroy()
  }
  if(rock.isTouching(mango3)){
    mango3.destroy()
  }
  if(rock.isTouching(mango4)){
    mango4.destroy()
  }
  if(rock.isTouching(mango5)){
    mango5.destroy()
  }
  if(rock.isTouching(mango6)){
    mango6.destroy()
  }
  createSprite()
}

function keyReleased() {
  if (keyCode === UP_ARROW) {
    rocks[rock.length - 1].shoot();
  }
}