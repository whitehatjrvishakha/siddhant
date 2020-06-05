var r
var PLAY,END
var gameState=PLAY;


var door,closedimg,opendoorimg
var human
var box1,box2,box3,boximg,box4,box5
var groundimg, ground
var key, keyimg
var doorknob

var opendoorsound

//var g=box+r
//var c=box+r


var num;

function preload(){
  closedimg=loadImage("closeddoor.png")
  boximg= loadImage("bluesquare.png")
  groundimg= loadImage("wooden-floor.jpg")
  keyimg= loadImage("key(1).png")
  opendoorimg=loadImage("opendoor.png")
  opendoorsound=loadSound("opendoorsound.mp3")
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  door= createSprite(displayWidth/2-200, displayHeight/2-100, 50, 150);
  human= createSprite(200,200,20,20);
  door.addImage("dor",closedimg) ;
  door.scale=0.4

  box1= createSprite(200,500,20,20)
  box1.addImage("som",boximg)
  box1.scale=0.2;

  ground= createSprite(0,0,displayWidth,displayHeight)
  ground.visible=false;
  
  box2=createSprite(400,500,20,20);
  box2.addImage("rem",boximg);
  box2.scale=0.2

  box3=createSprite(600,500,20,20);
  box3.addImage("mer",boximg);
  box3.scale=0.2

  box4=createSprite(800,500,20,20);
  box4.addImage("er",boximg);
  box4.scale=0.2

  box5=createSprite(1000,500,20,20);
  box5.addImage("er",boximg);
  box5.scale=0.2

 opendoorsound.loop();

  doorknob=createSprite(door.x+35,door.y-8,10,10)
 
r=prompt("Please enter a number of your choice between 1 to 5!!!")
key1=createSprite(200,500,20,20);
key2=createSprite(400,500,20,20);
key3=createSprite(600,500,20,20);
key4=createSprite(800,500,20,20);
key5=createSprite(1000,500,20,20);
key1.addImage("rm",keyimg)
  key1.scale=0.1
  key2.addImage("rm",keyimg)
  key2.scale=0.1
  key3.addImage("rm",keyimg)
  key3.scale=0.1
  key4.addImage("rm",keyimg)
  key4.scale=0.1
  key5.addImage("rm",keyimg)
  key5.scale=0.1
 /* key=createSprite(box+num.x,500,20,20);
  key.addImage("rm",keyimg)
  key.scale=0.1
  key.depth=box1.depth+1
  key.depth=box2.depth+1
  key.depth=box3.depth+1
  key.depth=box4.depth+1
  key.depth=box5.depth+1
 // key.depth=ground.depth+1;*/
 
}

function draw() {
  background(groundimg); 
  //image(closed, door.x, door.y);
  human.x=mouseX
  human.y=mouseY
  human.depth=box1.depth+18
  door.depth=ground.depth+1
  box1.depth=ground.depth+3
  box2.depth=ground.depth+3
  box5.depth=box1.depth
  key.depth=ground.depth+18
  doorknob.depth=door.depth+2
  

  if(gameState===PLAY){

    switch(r){
      case 1:
        key1.visible=true;
        // key=createSprite(200,500,20,20);
     // key.addImage("rm",keyimg)
     // key.scale=0.1
     // key.depth=box1.depth+1
     // key.depth=ground.depth+1;
      break;
    
      case 2:
        key2.visible=true;
        // key=createSprite(400,500,20,20);
      //key.addImage("rm",keyimg)
      //key.scale=0.1
     // key.depth=box2.depth+1
      //key.depth=ground.depth+1;
      break;
    
      case 3: 
      /*key=createSprite(600,500,20,20);
      key.addImage("rm",keyimg)
      key.scale=0.*/
      key3.visible=true;
     // key.depth=box3.depth+1
     // key.depth=ground.depth+1;
      break;
    
      case 4:
        /* key=createSprite(800,500,20,20);
      key.addImage("rm",keyimg)
      key.scale=0.1*/
      key4.visible=true;
     // key.depth=box4.depth+1 ;
      //key.depth=ground.depth+1;
      break;
      case 5:
        /* key=createSprite(1000,500,20,20);
      key.addImage("rm",keyimg)
      key.scale=0.1*/
      key5.visible=true;
     // key.depth=box5.depth+1;
     // key.depth=ground.depth+1;
      break;
    
      default: console.log("displayError");
      key.depth=ground.depth+1;
    
      break;
     }
 /*r=Math.random(1,5);
 
  switch(r){
    case 1: key=createSprite(box1.x,500,20,20);
    key.addImage("rm",keyimg)
    key.scale=0.1
    key.depth=box1.depth+1
    key.depth=ground.depth+1;
    break;

    case 2: key=createSprite(box2.x,500,20,20);
    key.addImage("rm",keyimg)
    key.scale=0.1
    key.depth=box2.depth+1
    key.depth=ground.depth+1;
    break;

    case 3: key=createSprite(box3.x,500,20,20);
    key.addImage("rm",keyimg)
    key.scale=0.1
    key.depth=box3.depth+1
    key.depth=ground.depth+1;
    break;

    case 4: key=createSprite(box4.x,500,20,20);
    key.addImage("rm",keyimg)
    key.scale=0.1
    key.depth=box4.depth+1 ;
    key.depth=ground.depth+1;
    break;
    case 5: key=createSprite(box5.x,500,20,20);
    key.addImage("rm",keyimg)
    key.scale=0.1
    key.depth=box5.depth+1;
    key.depth=ground.depth+1;
    break;

    default: console.log("displayError");
    key.depth=ground.depth+1;

    break;
  }*/

    if(mousePressedOver(box1)){
      box1.x=mouseX
      box1.y=mouseY
     // spawnkey()
    }
    else if(function mouseReleased(){}){
     app(0.00000001,0);
    }
  
  
    if(mousePressedOver(box2)){
      box2.x=mouseX
      box2.y=mouseY
     // spawnkey()
    }
    else if(function mouseReleased(){}){
      app1(0.00000001,0);
     }
  
    if(mousePressedOver(box3)){
      box3.x=mouseX
      box3.y=mouseY
     // spawnkey()
    }
    else if(function mouseReleased(){}){
      app2(0.00000001,0);
     }
  
    if(mousePressedOver(box4)){
      box4.x=mouseX
      box4.y=mouseY
      //spawnkey()
    }
    else if(function mouseReleased(){}){
      app3(0.00000001,0);
     }
  
    if(mousePressedOver(box5)){
      box5.x=mouseX
      box5.y=mouseY
     // spawnkey()
    }
    else if(function mouseReleased(){}){
      app4(0.00000001,0);
     }
    
     if(mousePressedOver(key)){
      key.x=mouseX
      key.y=mouseY
      key.lifetime=2000;
    }
    else if(function mouseReleased(){}){
      movekey(0.0000000001,0);
    }

   

    if(key.x===doorknob.x &&
       key.y===doorknob.y){
         gameState=END
       }


    openingdoor();
  }
  else if(gameState===END){
   text ("HOORAY!!!, YOU ESCAPED", 500,400)
  }

  drawSprites();
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


function spawnkey(){
  if(frameCount % 20 === 0 ){
    
    for(var i=0; i<1000; i=i+200){
      var q=random(200,1000) 
      

      if( q % 200=== 0){
      key=createSprite(q+i,500,20,20);
      key.addImage("rm",keyimg)
      key.scale=0.1
      key.lifetime=300
    
       key.depth=box1.depth-1
       key.depth=box2.depth-1
       key.depth=box3.depth-1
       key.depth=box4.depth-1
       key.depth=box5.depth-1
    }
    
}}
}
function mouseClicked() {
   if (opendoorsound.isPlaying()) 
    { 
    opendoorsound.pause();
     } 
  else
   { opendoorsound.play(); }
 }
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function app(x,y){
box1.x=box1.x-x
box1.y=box1.y-y

}
function app1(x,y){
  box2.x=box2.x-x
  box2.y=box2.y-y
  
  }
  function app2(x,y){
    box3.x=box3.x-x
    box3.y=box3.y-y
    
    }
    function app3(x,y){
      box4.x=box4.x-x
      box4.y=box4.y-y
      
      }
      function app4(x,y){
        box5.x=box5.x-x
        box5.y=box5.y-y
        
        }

        function movekey(x,y){
key.x=key.x-x
key.y=key.y-y
        }

        function openingdoor(){
          if(key.x===doorknob.x &&
            key.y===doorknob.y){
        var opendoor=createSprite(400,200,20,20);
        opendoor.addImage("srm",opendoorimg);
        opendoor.scale=0.5
       door.lifetime=10;
       doorknob.lifetime=10;
       opendoor.depth=human.depth-2;
       
      
        }
        
      }