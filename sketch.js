var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1=createSprite(0,580,360,30);
    block1.shapeColor="blue";
    block2=createSprite(295,580,200,30);
    block2.shapeColor="red";
    block3=createSprite(516,580,200,30);
    block3.shapeColor="yellow";
    block4=createSprite(740,580,220,30);
    block4.shapeColor="pink";
    ball=createSprite(random(20,150),100,50,50);
    ball.shapeColor="red";
    ball.velocityY=9;
    ball.velocityX=9;




    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites()
ball.bounceOff(edges);
if (ball.isTouching(block1)&& ball.bounceOff(block1)){
    ball.shapeColor="blue";
    music.play();
}
if (ball.isTouching(block2)&& ball.bounceOff(block2)){
    ball.shapeColor="red";
    music.play();
}
if (ball.isTouching(block3)&& ball.bounceOff(block3)){
    ball.shapeColor="yellow";
    music.play();
}
if (ball.isTouching(block4)&& ball.bounceOff(block4)){
    ball.shapeColor="pink";
    music.play();
}

drawSprites();
    //add condition to check if box touching surface and make it box
}
