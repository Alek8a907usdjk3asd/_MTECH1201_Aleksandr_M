let bg
let Scene2 = 0
let Scene2Var1 = 0
let vid
let video




function preload(){
  bg = loadImage("Sea.png")
  vid = ("19BarrelsOfRum.Win.mp4") 
}


function setup(){
  createCanvas(windowWidth, windowHeight);

}


function draw(){
// background(bg)
background(255, 0, 0)
print(Scene2)
  if(Scene2 == 1){
   Scene2 = 0
   video = createVideo(vid)
   video.position(windowWidth/4, windowHeight/4)
video.size(320, 480)
  }
video.showControls();



}




function mousePressed(){
  Scene2 = 1
print(vid)
print(video)




}

function keyPressed(){
 if(key === 'd'){
video.play
  
}
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