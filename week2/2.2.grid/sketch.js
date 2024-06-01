function setup() {
  createCanvas(1400, 1400);
  noLoop()
}

function draw() {
  background(220);

  //push grid out of the corner
  translate(180,100)
  for (let x = 0; x < 8; x += 1){
    for (let y = 0; y < 8; y += 1){
      push();

     //move the drawing plan to add a new shape
      translate(x * 150, y * 150)

      //line thickness and color
      strokeWeight(10);
      stroke(150, random(50,125),75);

      //line color
      fill(259,random(59,225), random(25,180));


     //draw the shape
      ellipse(0,0,random(42,150))

      pop();
    }
  }
}
