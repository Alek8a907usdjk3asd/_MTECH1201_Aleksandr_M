//Aleksandr Markov

let c1, c2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(245);

  c1 = color(255, 100, 150);
  c2 = color(100, 200, 255);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function mousePressed() {

}

function draw() {
  if (mouseIsPressed) {
    let t = map(mouseY, 0, height, 0, 1);
    let confettiColor = lerpColor(c1, c2, t);
    let w = map(mouseX, 0, width, 1, 6);

    stroke(confettiColor);
    strokeWeight(w);
    fill(
      red(confettiColor),
      green(confettiColor),
      blue(confettiColor),
      180
    );

    push();
    translate(mouseX, mouseY);
    rotate(random(TWO_PI));

    let choice = int(random(3));

    if (choice === 0) {
      ellipse(0, 0, random(10, 30));
    } else if (choice === 1) {
      rect(-10, -10, random(15, 30), random(15, 30));
    } else {
      triangle(
        -15, 10,
         15, 10,
          0, -15
      );
    }

    pop();
  }
}
