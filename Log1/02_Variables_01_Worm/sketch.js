
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  ellipse(mouseX,mouseY,100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}