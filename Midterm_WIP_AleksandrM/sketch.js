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


function preload(){
bomb = loadImage("atomic-bomb.png")
fly = loadImage("fly.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
imageMode(CENTER)
angleMode(DEGREES);
frameRate(5)
background(255)
textSize(50)
noStroke
fill(215, 15, 25)
text("Press ENTER to Start", windowWidth/3, windowHeight/3)
print(console.log)
}

function keyDown() {
  if(keyCode === ENTER){
  set (start == 1)
  print(console.log)

  }

}



function draw() {
  if(start ==1){
  stroke(121, 121, 121)
  strokeWeight(5)
  noFill()
  textSize(24)
  imageMode(CORNER)

  background(bomb)
 
  text("score: " + score, 10, 30)
n = width * noise(frameCount*0.01)
b = height * noise(frameCount*0.01+10)
let u = 360*noise(frameCount*0.01+5)
push()
translate(n, b)
rotate(u)
image(fly, 0, 0, 100, 100)
pop()






r+=rV
x+=xV
y+=yV
xV=  (xV)
yV= (yV)
rV= (rV)

let m = millis() %3000

if(m<50){
xV= -xV
yV= -yV
rV= -rV

}

}

function mouseClicked() {
  let d = dist(mouseX, mouseY, n, b);
  print(d)
  if (d <100) {
    score++;
    print(score)
  } 
  

  
}
}








