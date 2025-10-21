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


function preload(){
bomb = loadImage("atomic-bomb.png")
fly = loadImage("fly.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
imageMode(CENTER)
angleMode(DEGREES);
noFill()
stroke(121, 121, 121)
strokeWeight(5)
frameRate(5)

}

function draw() {
  textSize(24)
  imageMode(CORNER)
  // background(color(61, 49, 43,));
  background(bomb)
  // image(bomb, width - 598, height - 401)
  text("score: " + score, 10, 30)
let n = width * noise(frameCount*0.01)
let b = height * noise(frameCount*0.01+10)
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
  if (d < fly/2) {
    score++;
  }
}










