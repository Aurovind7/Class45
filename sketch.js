const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var player, playerImage, NPC, NPCImage, backgroundImage;
var score;
var ground1,ground2,ground3,ground4;
var h1,h2,h3,h4,h5,h6,h7,h8,h9;
var H1,H1_Image;
var gameState="play"


function preload(){
  H1_Image=loadImage("Human2.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  ground1= new Ground(windowWidth/8,windowHeight-50,windowWidth/4, 100)
  ground2= new Ground(windowWidth/2.72,windowHeight-50,windowWidth/4, 100)
  ground3= new Ground(windowWidth/1.65,windowHeight-50,windowWidth/4, 100)
  ground4= new Ground(windowWidth/1.16,windowHeight-50,windowWidth/3.5, 100)
  player= new Player(windowWidth/2,200,120,100)
  h1= new HumanBottom(100,windowHeight-150);
  h2= new HumanBottom(250,windowHeight-150)
  h3= new HumanBottom(400,windowHeight-150)
  h4= new HumanBottom(550,windowHeight-150)
  h5= new HumanBottom(700,windowHeight-150)
  h6= new HumanBottom(850,windowHeight-150)
  h7= new HumanBottom(1000,windowHeight-150)
  h8= new HumanBottom(1150,windowHeight-150)
  h9= new HumanBottom(1300,windowHeight-150)
}

function draw() {
  background(255,255,255);
  

  if(gameState==="play"){
    Engine.update(engine);
    spawnHumans();
  }

  if(player.x-
    
    H1.x < H1.width/2+player.width/2
    &&H1.x-player.x<H1.width/2+player.width/2){
    gameState="end"
  }

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  player.display();
  h1.display();
  h2.display();
  h3.display();
  h4.display();
  h5.display();
  h6.display();
  h7.display();
  h8.display();
  h9.display();

  
  drawSprites();
}

function spawnHumans(){
  if(frameCount%70===0){
    H1=createSprite(100,20,20,20)
    H1.addImage(H1_Image)
    H1.x=Math.round(random(20,windowWidth-20))
    H1.velocityY=5
    H1.scale=0.1
  }
}