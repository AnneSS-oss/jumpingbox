var canvas;
var music;
var player;
var box1,box2,box3,box4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    

    //create 4 different surfaces
    box1 = createSprite(100,590,190,15);
    box1.shapeColor = "red";
    box2 = createSprite(300,590,190,15);
    box2.shapeColor = "orange";
    box3 = createSprite(500,590,190,15);
    box3.shapeColor = "yellow";
    box4 = createSprite(700,590,190,15);
    box4.shapeColor = "green";



    edges = createEdgeSprites();
    //create box sprite and give velocity
    player = createSprite(Math.round(random(10,750)),400,40,40);
    player.velocityX = -5;
    player.velocityY = -5;
    player.shapeColor = "purple";

}

function draw() {
    background("lightblue");

    //create sprite
    createEdgeSprites();
    player.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if (player.isTouching(box1)) {
      music.play();
      player.shapeColor = "red";
      player.bounceOff(box1);
    }
    

    if (player.x - box2.x < box2.width/2 + player.width/2
      && box2.x - player.x < box2.width/2 + player.width/2
      && player.y - box2.y < box2.height/2 + player.height/2
      && box2.y - player.y < box2.height/2 + player.height/2) {

        player.shapeColor = "orange";
        music.stop();
        player.velocityX = 0;
        player.velocityY = 0;
      }

    if (player.x - box3.x < box3.width/2 + player.width/2
      && box3.x - player.x < box3.width/2 + player.width/2
      && player.y - box3.y < box3.height/2 + player.height/2
      && box3.y - player.y < box3.height/2 + player.height/2) {
        music.play();
        player.shapeColor = "yellow";
        player.bounceOff(box3);
      }

    if (player.x - box4.x < box4.width/2 + player.width/2
      && box4.x - player.x < box4.width/2 + player.width/2
      && player.y - box4.y < box4.height/2 + player.height/2
      && box4.y - player.y < box4.height/2 + player.height/2) {
        music.play();
        player.shapeColor = "green";
        player.bounceOff(box4);
      }

    drawSprites();
}

function isTouching() {

    if (player.x - box1.x < box1.width/2 + player.width/2
      && box1.x - player.x < box1.width/2 + player.width/2
      && player.y - box1.y < box1.height/2 + player.height/2
      && box1.y - player.y < box1.height/2 + player.height/2) {
  
        return true;
      }
  
    else {
      return false;
    }
  }


