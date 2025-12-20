//Aleksadr Markov

let c1, c2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  angleMode(DEGREES);
  fill(255)
  text("Click to draw", windowWidth/2.3, windowHeight/12)
  c1 = color(255, 200, 50);
  c2 = color(100, 200, 255);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  let t = map(mouseX, 0, width, 0, 1);
  let stampColor = lerpColor(c1, c2, t);
  let size = map(mouseY, 0, height, 20, 120);

  push();
  translate(mouseX, mouseY);
  rotate(random(360));
  fill(stampColor);
  noStroke();

  for (let i = 0; i < 8; i++) {
    rotate(45);
    ellipse(size / 2, 0, size / 3);
  }
  pop();
}
