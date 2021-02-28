let angle=0;
let legheight=100;
let headposX=100;

function setup() {
  createCanvas(400, 600);
}

function draw() {
  //console.log(mouseX,mouseY)
  background(0);
  //head
  rect(100,90,80,50)
  ellipse(130,115,10)
  ellipse(150,115,10)
  line(130,130,150,130)

  //torso
  rect(70,150,140,80)
  ellipse(160,170,10)
  rect(170,165,20,10)

  //left arm
  rect(50,150,20,100)
  rect(50,250,20,100)

  //right arm
  rect(210,150,20,100)
  
  push()
  translate(210,250)
  rotate(radians(-angle))
  rect(0,0,20,100)
  pop()

  //waist
  rect(115,230,50,20)
  //hip
  rect(100,250,80,30)
  // left leg
  rect(80,250,20,100)
  rect(80,350,20,legheight)

  //right leg
  rect(180,250,20,100)
  rect(180,350,20,100)
  
  legheight=80+sin(frameCount/5)*20
  angle=80+sin(frameCount/5)*60
}