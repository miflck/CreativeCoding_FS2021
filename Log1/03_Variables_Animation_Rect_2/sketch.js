let myColor;

// variables for Positions
let posX=0;
let posY=0;

let myWidth=10;
let myHeight;
let speed=10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor=color(255,0,0)
  myHeight=height;
  noStroke();
}

function draw() {
  fill(myColor);
  rect(posX,posY,myWidth,myHeight);
  // am ende des durchganges die Position updaten:
  myWidth+=speed;
}


function mousePressed() {
  myColor=color(random(255),random(255),random(255),5)
  myWidth=0;

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  myHeight=height;
}
