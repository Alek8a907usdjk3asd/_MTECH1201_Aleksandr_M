//Aleksandr Markov

let leftColor, rightColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240);

  leftColor = color(255, 100, 150);
  rightColor = color(100, 150, 255);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  // clear softly instead of hard reset
  background(240, 240, 240, 100);
}

function draw() {
  textSize(15)
    fill(0)
    strokeWeight(2)
  text("Your drawing will be mirrored", windowWidth/2.3, windowHeight/12)
  if (mouseIsPressed) {
    let t = map(mouseX, 0, width, 0, 1);
    let ribbonColor = lerpColor(leftColor, rightColor, t);

    stroke(ribbonColor);
    strokeWeight(4);

    // original
    line(pmouseX, pmouseY, mouseX, mouseY);

    // mirrored
    line(width - pmouseX, pmouseY, width - mouseX, mouseY);
  }
}
