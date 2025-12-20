//Aleksandr Markov

let prevX, prevY;
let slowColor, fastColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(245);

  slowColor = color(50, 100, 255);
  fastColor = color(255, 80, 80);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  prevX = mouseX;
  prevY = mouseY;
}

function draw() {
  textSize(24)
  strokeWeight(4)
  text("Click to draw", windowWidth/2.4, windowHeight/12)
  if (mouseIsPressed) {
    let speed = dist(mouseX, mouseY, prevX, prevY);
    let t = map(speed, 0, 50, 0, 1, true);
    let brushColor = lerpColor(slowColor, fastColor, t);

    stroke(brushColor);
    strokeWeight(map(speed, 0, 50, 2, 12, true));
    line(prevX, prevY, mouseX, mouseY);

    prevX = mouseX;
    prevY = mouseY;
  }
}
