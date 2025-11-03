let cup
let xV=3
let yV=1
let rV=1
let r =0;
let x =0;
let y =0;
let fly
let bomb
let score = 0
let n, b;
let start = 0
let button1
let currentScene = 0;
let cooldown =5

let ButtonCooldown = 0;
let ranTime
let textTime
let MISSED = 0
let prevN = 0;
let prevB = 0;
let noiseScale =0.01;
let noiseVel = 0.01;
let angle

// let mouseLoc = {x:359, y:500, diameter:100}

// col = color(45,399,29)
// fill(col)

// ellipse(mouseLoc.x, mouseLoc.y, mouseLoc.radius)

function preload(){
bomb = loadImage("atomic-bomb.png")
fly = loadImage("fly.png")
}


function setup() {
 ranTime = random(60000, 180000)
  textTime = ranTime/60/1000
createCanvas(windowWidth, windowHeight);
imageMode(CENTER)
angleMode(DEGREES);
frameRate(60)
background(255)
textSize(50)
fill(215, 15, 25)
text('Nuclear Business', windowWidth/3, 200)
textSize(15)
noStroke
text ("A meldown is happening at your facility, but that", windowWidth/9, 400)
text ("damn fly just keeps getting all up in your face.", windowWidth/9, 420)
text ("It took away years of sleep from you. It took your wife", windowWidth/9, 440)
text ("and kids. This ends now. You have  " + textTime, windowWidth/9, 460)
text ("minutes, soldier. Make me proud.", windowWidth/9, 480)


button1 = createButton('PLAY');
button1.position(windowWidth/2.2, windowHeight/2);
button1.mousePressed(select1);


}

function select1(){

removeElements(button1)
currentScene =1;
setTimeout(changeScene, ranTime)
setTimeout(varChange, 500)
}

function varChange(){
 MISSED = 2

}

function draw(){
  if (currentScene === 1) { 
let prevN = n;   //stores previous position
let prevB = b;
  stroke(0, 255, 255)
  strokeWeight(2)
  noFill()
  textSize(24)
  imageMode(CORNER)

  background(bomb)
 
  text("score: " + score, 10, 30)

// let noiseX = frameCount * noiseVel;  //increasing time-based noise input
// let noiseY = frameCount * noiseVel + 1000;

n = width * noise(frameCount*0.01)
b = height * noise(frameCount*0.01+10)

// n = width * noise(noiseX);
// b = height * noise(noiseY);

// let dx = n - prevN;  //calculates the direction
// let dy = b - prevB;
// let angle = atan2(dy, dx);

let u = 360*noise(frameCount*0.01+5)
angle = atan2(b- prevB, n- prevN);   //The direction of the noise

push()
translate (n, b);
rotate(angle)
imageMode(CENTER)
// image(fly, n, b, 100, 100)
image (fly, 0, 0, 100, 100)
pop()



}


if(currentScene ===2){
  background(0, 255, 0)
  textSize(50)
  fill(215, 15, 25)
  strokeWeight(14)
  stroke(10, 255, 251) //make it light blue/neon
  text("Score: " + score, windowWidth/30, 150)
  text('GAME OVER', windowWidth/30, 80)
}

}



function mousePressed() {
    let buttonCooldown = 1
    
    if (currentScene === 1){
    
  let d = dist(mouseX, mouseY, n, b);
  if (d <100) {
    score++;
  } else{
    if(MISSED == 2){
       currentScene =2;
    
    // if(mouseCoords !== button1){

    
  
  } 
}
    }
}  




function changeScene(){
currentScene =2;



}











//BUTTONS >>>>>>>>>>>><<<<<<<<<<<<<<<<<
//Dom - creates functions
//let button = createButton ('click me')

//let button1, button2
//button1 = createButton('scene 1');
//button.position(100, 100)
//button2 = createButton("scene 2");
//button.position(100,30)
//button1.mousePressed(select 1)
//function select1(){}    ----- activates upon the press of button1

//button2.mousePressed(select 2)
//function (select 2)     -------- activates upon button2 press


//if (funcSelect ==1){
//}
//if (funcSelect ==2){
//}






