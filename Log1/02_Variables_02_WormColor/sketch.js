let myColor;
function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor=color(255)
}

function draw() {
  fill(myColor);
  ellipse(mouseX,mouseY,100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  myColor=color(random(255),random(255),random(255))
}