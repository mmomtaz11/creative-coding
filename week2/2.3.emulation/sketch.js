let square_size = 40;
let cols = 14;
let rows = 18;
let cushion = 8;

// 196 Carrésby Vera Molnár

function setup() {
  createCanvas(400, 400);
  createCanvas(600, 800);
  noLoop();
}

function draw() {
  background(255);
  background('lightgreen');

  translate(38,38);

  strokeWeight(2);
  fill('lightpink');

  //noFill(); overlapping shapes

  //rectMode(CENTER); from class vid. tut
  //angleMode(DEGREES); from class vid. tut
  //x is columns
  //y is rows 
  for (let x = 0; x < square_size * cols ; x += square_size){
    for (let y = 0; y < square_size * rows; y += square_size){

      push();

      translate(x,y);

      //rotate shape - from class vid tut
      //let rotation_amount = random(-90,90); - from class vid tut

      //0, rotation_amount, 0,rows * square_size,
      //rotate(rotation_amount); - from class vid tut


      let x_offset = random(-5,5)
      let y_offset = random(-5,5)

      rect(x_offset,y_offset,square_size - cushion,square_size - cushion)


      pop();


    }
  }


}
