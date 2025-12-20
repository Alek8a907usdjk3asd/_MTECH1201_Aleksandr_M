//Aleksandr Markov

let size = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(30);
  translate(width / 2, height / 2);

  let speed = abs(movedX) + abs(movedY);

  if (speed < 5) {
    size += 0.01; // calm = grow
  } else {
    size -= 0.02; // chaos = shrink
  }

  size = constrain(size, 0.5, 2);

  scale(size);
  rotate(frameCount);

  fill(100, 255, 150);
  ellipse(0, 0, 60, 60);
  fill(0);
  ellipse(-10, -5, 8);
  ellipse(10, -5, 8);
}
