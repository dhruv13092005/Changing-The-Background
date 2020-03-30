var face, face_running;
var face2, face2_running;
var face3, face3_running;

var body, body_running;

function preload(){ 
 
  //  face_running = loadAnimation("");
  //face2_running = loadAnimation("");
 // face3_running = loadAnimation("");
  
   body_running = loadImage("circlep.gif");
  
} 

function setup() { 
  createCanvas(300, 300); 

  
                  
face = createSprite(150,150,600,600); 
face.scale = 0.7;
 face.visible = false;
 // face.addAnimation("facerunning",face_running); 
  
 face2 = createSprite(150,150,600,600); 
face2.scale = 0.7;
 face2.visible = false; 
 // face2.addAnimation("face2running",face2_running); 
  
  face3 = createSprite(150,150,600,600); 
face3.scale = 0.7;
 face3.visible = false; 
 // face3.addAnimation("face3running",face3_running); 
  
  body = createSprite(200,200,20,20); 
body.scale = 0.07;
  body.visible = true;
  body.addImage("bodyrunning",body_running);               
} 

function draw() { 
  background("white"); 

  
  
    face.shapeColor = "green";
  face3.shapeColor = "black";
  face2.shapeColor = "red";
  
  
  
  //if(body.x-face.x<=face.width/2+body.width/2){
   // body.shapeColor = "red"; 
   // face.shapeColor = "red";
   //  }
 // else{
  //  body.shapeColor = "green"; 
   // face.shapeColor = "green";
 // }
  
  if(body.x>100 && body.x<200){
     face2.visible = true;
     }
  else{
    face2.visible = false;
  }
  
  if(body.x<100){
     face.visible = true;
      }
  else{
    face.visible = false;
  }
  
  if(body.x>200){
     face3.visible = true;
     }
  else{
    face3.visible = false;
  }
  
 // body.shapeColor = "yellow"; 
  body.x = mouseX 
body.y = mouseY
  
drawSprites(); 
}