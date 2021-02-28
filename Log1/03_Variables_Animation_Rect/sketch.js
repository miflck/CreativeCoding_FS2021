let myColor;

// variables for Positions
let posX=0;
let posY=0;

let myWidth=10;
let myHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor=color(255,0,0)
  myHeight=height;
  noStroke();
  frameRate(60);
}

function draw() {
  fill(myColor);
  rect(posX,posY,myWidth,myHeight);
  // am ende des durchganges die Position updaten:
  posX+=myWidth;
}


function mousePressed() {
  myColor=color(random(255),random(255),random(255),100)
  posX=0;

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  myHeight=height;
}
