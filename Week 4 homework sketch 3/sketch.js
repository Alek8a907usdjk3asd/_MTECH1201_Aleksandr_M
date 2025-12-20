//Aleksandr Markov

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(15, 20, 30, 40); // subtle trails

  translate(width / 2, height / 2);

  let moodX = mouseX / width;
  let moodY = mouseY / height;

  // Default values
  let spinSpeed = 1;
  let orbSize = 120;
  let orbColor = color(200);

  // MOOD LOGIC 👇
  if (moodX < 0.33) {
    // chill mode
    spinSpeed = 0.3;
    orbSize = 160;
    orbColor = color(100, 150, 255);
  } else if (moodX < 0.66) {
    // playful mode
    spinSpeed = 2;
    orbSize = 120;
    orbColor = color(255, 200, 100);
  } else {
    // chaotic mode
    spinSpeed = 5;
    orbSize = 90;
    orbColor = color(255, 100, 150);
  }

  rotate(frameCount * spinSpeed);
  scale(1 + sin(frameCount * 2) * 0.1);

  fill(orbColor);
  ellipse(0, 0, orbSize);

  // orbiting satellites ✨
  for (let i = 0; i < 6; i++) {
    push();
    rotate(frameCount * spinSpeed + i * 60);
    translate(orbSize, 0);
    scale(0.5 + sin(frameCount + i * 20) * 0.3);
    fill(255);
    ellipse(0, 0, 20);
    pop();
  }
}
