//   Aleksandr Markov
//Title: Nuclear Business
//Just swat the fly with your cursor, and don't miss!



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
let button2;

let ButtonCooldown = 0;
let ranTime
let textTime
let MISSED = 0
let prevN = 0;
let prevB = 0;
let noiseScale =0.01;
let noiseVel = 0.01;
let angle
let song;
let songOverlap =0
let checkTime
let startTime
// let mouseLoc = {x:359, y:500, diameter:100}  >>> this is what we discussed after class

// col = color(45,399,29)
// fill(col)

// ellipse(mouseLoc.x, mouseLoc.y, mouseLoc.radius)

function preload(){
bomb = loadImage("atomic-bomb.png")
fly = loadImage("fly.png")
song = loadSound("Ave Maria.mp4")
Nuclear = loadImage("Nuke.PNG")
intro = loadImage("intro.png")
}


function setup() {
  
 ranTime = random(60000, 180000)
  textTime = ranTime/60/1000
createCanvas(windowWidth, windowHeight);
imageMode(CENTER)
angleMode(DEGREES);
frameRate(60)
background(41, 86, 52)
image(intro, windowWidth/1.5, windowHeight/2, windowWidth/4, windowHeight/4)
textSize(50)
fill(215, 15, 25)
strokeWeight(5)
stroke(0)
text('Nuclear Business', windowWidth/3, 200)
strokeWeight(2)
textSize(20)
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
startTime = millis();
}
function select2(){
location.reload()       //gotten from p5js website

}

function varChange(){
 MISSED = 2

}

function draw(){
  if (currentScene === 1) { 
checkTime = ranTime - (millis() - startTime);  //
// text("Time Left: " + int(checkTime / 1000), 10, 80);
let prevN = n;   //stores previous position
let prevB = b;   //I got this code from an online thread, as "rotate(u)" didn't work.
  stroke(0, 255, 255)
  strokeWeight(2)
  noFill()
  textSize(24)
  imageMode(CORNER)

  background(bomb)
 
  text("score: " + score, 10, 30)
  text("Time Left: " + checkTime/1000/60, 10, 80)


n = width * noise(frameCount*0.01)
b = height * noise(frameCount*0.01+10)



let u = 360*noise(frameCount*0.01+5)
angle = atan2(b- prevB, n- prevN);   //The direction of the noise. I got this code from an online thread, as "rotate(u)" didn't work.

push()
translate (n, b);
rotate(angle)
imageMode(CENTER)
// image(fly, n, b, 100, 100)
image (fly, 0, 0, 100, 100)
pop()


}


if(currentScene ===2){


  textSize(50)
  fill(215, 15, 25)
  strokeWeight(14)
  stroke(10, 255, 251) 
  text("Score: " + score, windowWidth/30, 150)
  text('GAME OVER', windowWidth/30, 80)
  if(songOverlap ==0){
  song.play();
  songOverlap = 1  
  background(0)
  image(Nuclear, 0, 0, width, height)
  button2 = createButton('RESTART');
button2.position(windowWidth/9.2, windowHeight/2);
button2.mousePressed(select2);
  }




}


}





function mousePressed() {
    let buttonCooldown = 1
    
    if (currentScene === 1){
    
  let d = dist(mouseX, mouseY, n, b);
  print(d)
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




//>>>>>>>>>>>>>>>>>>>            CREDIT

//Audio credit: Ave Maria
//Images credit: Google Images
//Game Over video: AtomCentral.com
//sound loading: https://editor.p5js.org/monicawen/sketches/Sysfh-Hsm