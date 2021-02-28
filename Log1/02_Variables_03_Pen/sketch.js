let myColor;
function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor=color(255)
}

function draw() {
  fill(myColor);
  //ellipse(mouseX,mouseY,100);
  let diffX=abs(mouseX-pmouseX);
  let weight=map(diffX,0,10,10,1);
  strokeWeight(weight)
  line(mouseX, mouseY, pmouseX, pmouseY);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  myColor=color(random(255),random(255),random(255))
}