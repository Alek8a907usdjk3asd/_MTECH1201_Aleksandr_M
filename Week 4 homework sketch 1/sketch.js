//Aleksandr Markov

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(240);
  translate(width / 2, height / 2);

  let d = dist(mouseX, mouseY, width / 2, height / 2);

  if (d < 100) {
    rotate(frameCount * 0.5); // shy = slower spin
    scale(0.8);
    fill(255, 100, 100);
  } else {
    rotate(frameCount * 2); // confident spin
    scale(1.2);
    fill(100, 150, 255);
  }

  rectMode(CENTER);
  rect(0, 0, 80, 80);
}