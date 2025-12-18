let button1
let currentScene
let sliderX
let crosshairX = 0
let crosshairY = 0
let createGame
let sliderY
let buttonFire
let FireCol = 0
let Shot = 0            //>>>>>>>>>>>>>>>>>Make trajectory for the cannon? 
let intro;              //when an enemy is defeated, make them drop rum and dabloons, which will fly towards
let button0             //their values in the game screen.
let bg
let can
let crosshair
let textCol = 0
let enemy
let enemies = []
let spawnTimer = 0;
let frameSpawn = 170
let Mainsong
let dabloons = 0
let rum = 200
let debug = 0    //press the D key to show mouse coordinates
let keyCount = 0
let sunMode = 0     //Press the O key to activate sun mode
let sunCount = 0
let rumBarrel
let dabloonI
let exA
let exD
let explosions = [];
let loot = [];
scene3Var = 0
let Sbutton
let gameOverVideo;
  const DAB_UI_X = 1135;    //constants keep track of the text positions
  const DAB_UI_Y = 63;
  const RUM_UI_X = 41;
  const RUM_UI_Y = 71;

let loseVideos = []

// let ray1 = color(255, 239, 18)  //this array doesn't work
// let ray2 = color(255, 175, 15)
// let ray3 = color(255,207, 15)
// let ray4 = color(232, 205, 30)
// let ray5 = color(247, 230, 35)
// let sunrays = [ray1, ray2, ray3, ray4, ray5]

//credits: Mainsong - Staffroom - SEA SHANTY
//The other videos credit themselves via watermarks

function preload(){
bg = loadImage("Sea.png")
can = loadImage("mountedCannon-removebg-preview.png")
crosshair = loadImage("Crosshairs.png")
enemy = loadImage("PirateShip.png")
Mainsong = loadSound("Mainsong.mp4")
Mainsong.setLoop(true);
rumBarrel = loadImage("Rum.png")
dabloonI = loadImage("dabloon.png")
exA = loadImage("ex4.png")
exD = loadImage("ex3.png")
yarr = loadSound("Yarr.mp3")


     let loseVideoFiles = [
    "Lose Videos/Blackbeard.Lose.mp4",
    "Lose Videos/Burger.Lose.mp4",
    "Lose Videos/CrewInfighting.Lose.mp4",
    "Lose Videos/For100Barrels.Lose.mp4",
    "Lose Videos/FrancisTheCaptain.Lose.mp4",
    "Lose Videos/Name10Captains.Lose.mp4",
    "Lose Videos/SeaOh.Lose.mp4",
    "Lose Videos/Speed.Lose.mp4",
    "Lose Videos/StoleShips.Lose.mp4",
    "Lose Videos/TheyCantSail.Lose.mp4",
    "Lose Videos/Whisky.Lose.mp4"
  ];
for(let i = 0; i < loseVideoFiles.length; i++){
loseVideos[i] = createVideo(loseVideoFiles[i]);
loseVideos[i].hide(); // hide so they don’t autoplay or show up yet
  }

}

function setup() {
  spawnTimer = 0;
  createCanvas(windowWidth, windowHeight);
  let button1 = createButton("Start the Voyage")
  button1.position((windowWidth/2) -65, windowHeight/2)
  button1.mousePressed(Game)
  currentScene = 1
  frameRate(60)
  rectMode(CENTER)
  intro = createVideo("Intro.mp4")
  intro.size(640, 480)
  intro.position(-150, 159)
  intro.showControls
  let button0 = createButton("Play Intro")
  button0.position(125, 127)
  button0.mousePressed(Playintro)
}

function Enemy(){     //this keeps track of every enemy, individually
 this.x = width;            //I got this 'enemy' code from the internet
 this.y = random(215, 370);   //assigned to each individual object
 if(this.y <= 240){
  this.speed = 0.4;
  this.w = 40; 
 } else {
  if(this.y <=290){
  this.speed = 1.4;
 this.w = 60;
  } else {
 this.speed = 3;
 this.w = 80;
  }
 }
imageMode(CENTER)
 
}

function spawnEnemy(){     //got this from the internet as well
if(currentScene == 2){  
enemies.push(new Enemy());
}
}

function Loot(x, y, type) {
  this.x = x;
  this.y = y;
  this.type = type; // "rum" or "dabloon"

  this.tx = type === "rum" ? RUM_UI_X : DAB_UI_X;
  this.ty = type === "rum" ? RUM_UI_Y : DAB_UI_Y;

  this.speed = random(0.04, 0.07);
  this.size = 60;

  this.update = function () {
    this.x = lerp(this.x, this.tx, this.speed);
    this.y = lerp(this.y, this.ty, this.speed);
  };
  this.draw = function () {
    imageMode(CENTER);
    if (this.type === "rum") {
      image(rumBarrel, this.x, this.y, this.size, this.size);
    } else {
      image(dabloonI, this.x, this.y, this.size, this.size);
    }
  };

  this.arrived = function () {
    return dist(this.x, this.y, this.tx, this.ty) < 8;
  };
}



function draw() {
     console.log(currentScene)

 
  if(currentScene == 1){
  background(43, 89, 251);
 // noStroke
  fill(0)
  textSize(34)
  //directly into text
  textSize(70)
  stroke(222, 236, 237)
  strokeWeight(4)
  fill(245, 58, 34)
  text("There's Rum In Me Boot", 390, 200)
  textSize(24)
  strokeWeight(1)
  text("Sound warning!", 680, 300 )
  text("Press O to turn your curson into the sun", 352, 520)
  text("Press D to show mouse coordinates", 352, 560)
  
//  if(currentScene == 3){



   
 
    // if(scene3Var == 1){
    // scene3Var = 0
    //   background(43, 89, 251);

    // if(!Sbutton){
    
    // let Sbutton = createButton("Play Game Over Cutscene")
    // Sbutton.position(66, 55)
    // Sbutton.pressed(PlayGameover)
  
  // }

  // gameOverVideo.play();

  
      // if(gameOverVideo){
      // gameOverVideo.remove();
    
      // }

// let randomIndex = floor(random(0, loseVideos.length));   //this selects the lose video at random
   
//  gameOverVideo = loseVideos[randomIndex];

//     gameOverVideo.play();

    //gameOverVideo.size(640, 480);

    // gameOverVideo.onloadeddata(() => {
      
    // });
    // gameOverVideo.play();
    //}
   
   // gameOverVideo.position(764, 366);

 

  // }
    print(gameOverVideo);

}


  


  
  

  

  

  if(currentScene == 2){
  
    if(createGame == 1){
    createGame = 0
    sliderX = createSlider(0, windowWidth -30, windowWidth/2)
    sliderX.size(300)
    sliderX.position(67, 651)

    sliderY = createSlider(0, windowHeight - 30, windowHeight/2)
    sliderY.size(300)
    sliderY.style("transform", "rotate(-270deg)")
    sliderY.position(-110, 470)
    

    FireCol = color(253, 20, 20)
    textCol = color(0, 0, 0)
    }

  background(bg);
  stroke(255)
  strokeWeight(0)
  line(crosshairX, 750, crosshairX, crosshairY) 
  fill(0)
  crosshairX = sliderX.value()
  crosshairY = sliderY.value()
  textSize(24)
  text(crosshairX, 184, 642)
  text(crosshairY, 56, 473)
  fill(FireCol)
  circle(220, 500, 150)
  fill(textCol)
  text("FIRE!", 190, 510)
  imageMode(CENTER)
  fill(252, 191, 23)
  text("Dabloons: " + dabloons, 1135, 63)

  fill(179, 30, 137)
  text("Rum: " + rum, 41, 71)

  
    spawnTimer++;
  if(spawnTimer >= frameSpawn){
  spawnEnemy();
  spawnTimer = 0;
  }
  //if(spawnTimer % frameSpawn === 0) spawnEnemy();   //% returns the remainder
  for (let i = enemies.length -1; i >=0; i--){   //I also got this code from the internet
  let e = enemies[i];
  image(enemy, e.x, e.y, e.w * 4, e.w * 2);
  e.x -= e.speed;
  if (e.x < -e.w *3 || e.x > width +e.w *3) enemies.splice(i, 1);
  }
  
  noStroke
  imageMode(CENTER)
  image(crosshair, crosshairX, crosshairY,250, 250)

  colorMode(RGB)
  if(Shot == 1){
  fill(101, 98, 97)
  strokeWeight(54)
  stroke(101, 98, 97)
  line(crosshairX, 510, crosshairX, crosshairY)

  let hitEnemy = false;

   for (let i = enemies.length - 1; i >= 0; i--) {
    let e = enemies[i];

    let hit =
      crosshairX > e.x - e.w * 2 &&
      crosshairX < e.x + e.w * 2 &&
      crosshairY > e.y - e.w &&
      crosshairY < e.y + e.w;

    if (hit) {
      // removes enemies
  enemies.splice(i, 1);
  explosions.push(new Explosion(e.x, e.y));
  yarr.play();
  // random # of loot
  let rumCount = floor(random(1, 4));
  let dabCount = floor(random(2, 6));

  for (let r = 0; r < rumCount; r++) {
    loot.push(new Loot(
      e.x + random(-20, 20),
      e.y + random(-20, 20),
      "rum"
    ));
  }

  for (let d = 0; d < dabCount; d++) {
    loot.push(new Loot(
      e.x + random(-20, 20),
      e.y + random(-20, 20),
      "dabloon"
    ));
  }

  Shot = 0;
  break;

  }
}


  if (!hitEnemy) {    // Checks for you missing the enemy
    rum -= 15;            
    Shot = 0;             
    if (rum <= 0) {
      currentScene = 3;   
      scene3Var = 1
      location.reload() 
    //If you put the code from currentScene 3 in here, it does solve some things, but other things break when it happens.
    //I don't have the energy nor the time to fix everything, but I think our culprit is that currenteScene 3 isn't called
    //properly, or the code inside of it is confusing the game. I didn't test all of the code from currentScene 3 in this
    //section of the code, so I don't know. But it did do something when I copy + pasted it here, so that's progress.
    
    
    }
  }
  }

for (let i = explosions.length - 1; i >= 0; i--) {
  let ex = explosions[i];
  ex.update();
  ex.draw();

  if (ex.life <= 0) {
    explosions.splice(i, 1);
  }
}

for (let i = loot.length - 1; i >= 0; i--) {  
  let l = loot[i];
  l.update();
  l.draw();

  if (l.arrived()) {
    if (l.type === "rum") rum += 10;
    else dabloons += floor(random(5, 13));

    loot.splice(i, 1);
  }
}

  image(can, crosshairX, 600)
  imageMode(CORNER)


  frameSpawn = max(20, frameSpawn -0.02)

  if(!Mainsong.isPlaying()){
   Mainsong.play();
   Mainsong.setVolume(0.3)
  }
   
  
}
 if(debug == 1){
   textSize(34)
   fill(0)
   stroke(87, 255, 31)
   strokeWeight(4)
   text(`(${mouseX}, ${mouseY})`, mouseX, mouseY)   //String allows for inserting variables
  }

 if(sunMode == 1){
  textSize(14)
  fill(255, 239, 18)
  stroke(255, 239, 18)
  strokeWeight(500)
  text(`(${mouseX}, ${mouseY})`, mouseX, mouseY)  
 }

}

function Explosion(x, y) {
  this.x = x;
  this.y = y;
  this.life = 25; // the amount of frames that the explosion lasts for

  this.update = function () {
    this.life--;
  };

  this.draw = function () {
    imageMode(CENTER);
    image(exA, this.x, this.y, 120, 120);
  };
}






function Game() {
  currentScene = 2
  removeElements(button1)
  createGame = 1

}

function mousePressed() {
if(mouseX < 292 && mouseX > 119 && mouseY > 423 && mouseY < 575 ){
fill(255, 255, 0)
Shot = 1
setTimeout(changeShot, 200)
setTimeout(Firecolor, 400)
FireCol = color(255, 184, 184)
textCol = color(73, 73, 73)
}
function Firecolor(){
  FireCol = color(253, 20, 20)
  textCol = color(0, 0, 0)
}

// if ((crosshairX == e.x + 50 || crosshairX == e.x -50 || crosshairX == e.x) && (crosshairY == e.y+50 || crosshairY == e.y-50
//   || crosshairY == e.y)){
//  enemies.splice(i, 1)
//  dabloons + random(5, 17)
//  rum + 10

// } else{
//  rum - 75
//  if(rum < 0){
//   location.reload() 
//  }
//]
}


function changeShot(){
  Shot = 2



}

function Playintro(){
intro.play();


}

function PlayGameover(){
  gameOverVideo.play

}

function keyPressed(){
 if(key === 'd'){
  if(keyCount === 0){
    debug = 1
    setTimeout(key1, 100)
  }
  if(keyCount === 1){ 
  debug = 0
  setTimeout(key0, 100)
  }
}

 if(key === 'o'){
  if(sunCount === 0){
    sunMode = 1
    setTimeout(sun1, 100)
  }
  if(sunCount === 1){ 
  sunMode = 0
  setTimeout(sun0, 100)
  }
}

}
function key0(){
  keyCount = 0
}
function key1(){
 keyCount = 1
}
function sun0(){
  sunCount = 0
}
function sun1(){
 sunCount = 1
}


// function FIRE() {
// fill(0)
// line(crosshairX, 750, crosshairX, crosshairY) 


// }

//make github website >>>>>>>>>
//>>>>>>> new repo (only contains what is needed for the website)
//>>>upload the files within the folder (index.htm;, sketch.js, or any other files you want) into new repository
//click settings >>>> Pages >>> Deploy from branch (main) >>> hit "save"
//you can also optionally link it to your domain (not happening)
//There will now be a link of the hosted website in the Pages tab.
//Then post the website link as link.md
//
//
//



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


//if (funcSelect ==1){   -------- activates function of select1
//}
//if (funcSelect ==2){
//]