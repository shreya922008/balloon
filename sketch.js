var balloon,balloonImage1,balloonImage2;
var position,database ;


function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

  function setup(){
    createCanvas(1500,700);
    database=firebase.database()
    console.log(database)
     balloon= createSprite(250,450,50,50)
     balloon.addAnimation("hotairballoon",balloonImage1)
     balloon.scale=0.5
    
}


function draw(){
    background(bg)
  
    if(keyDown(LEFT_ARROW)){
       balloon.x=balloon.x-10
    }
    else if(keyDown(RIGHT_ARROW)){
       balloon.x=balloon.x+10
    }
    else if(keyDown(UP_ARROW)){
       balloon.y=balloon.y-10
    }
    else if(keyDown(DOWN_ARROW)){
       balloon.y=balloon.y+10
    }
    drawSprites();
}
