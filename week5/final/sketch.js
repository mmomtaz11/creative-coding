let daytime = true;

function setup() {
  createCanvas(600, 600);
}

function draw() {

  if(daytime){
//morning landscape
  background(173,216,230); 


//sun 
  stroke('darkorange');
  fill('orange');
  strokeWeight(5);
  circle(52,52,150);

//grass
  fill('yellowgreen');
  stroke('yellowgreen');
  rect(0,500,600,100); 

//house building 
  fill('darkred');
  stroke('darkred');
  rect(200,200,300,300);

//roof
  fill(189, 147, 42);
  stroke(92,64,51);
  triangle(150, 200, 350, 20, 550, 200);

//door
  fill('darkblue');
  stroke('blue');
  strokeWeight(5);
  rect(350,350,100,150);

// window 2
  fill('darkblue');
  stroke('blue');
  strokeWeight(5);
  rect(250,220,100,100);

  }else{
    //night time 
    background(26,27,117); 

    //MOON
  stroke(246,247,200);
  fill(232, 215, 167);
  strokeWeight(5);
  circle(52,52,150);

//grass
  fill('darkgreen');
  stroke('darkgreen');
  rect(0,500,600,100); 

//house building 
  fill(102, 24, 8);
  stroke(102, 24, 8);
  rect(200,200,300,300);

//roof
  fill(48,12,5);
  stroke(48,12,5);
  triangle(150, 200, 350, 20, 550, 200);

//door
  fill(17, 21, 99);
  stroke('darkblue');
  strokeWeight(5);
  rect(350,350,100,150);

// window 2
  fill(201, 197, 54);
  stroke(201, 197, 54);
  strokeWeight(5);
  rect(250,220,100,100);

  //car 
  fill(25, 111, 138);
  stroke(25, 111, 138);
  strokeWeight(5);
  rect(50,375,245,100);

  //car tires back and front
  fill('gray');
  stroke('gray');
  circle(100,475,45)

  fill('gray');
  stroke('gray');
  circle(240,475,45)

  //car window
  fill('black');
  stroke('black');
  strokeWeight(5);
  rect(240,390,50,50);

  fill('black');
  stroke('black');
  strokeWeight(5);
  rect(80,390,100,50);

  //stars
  fill('white');
  stroke('white');
  circle(200,20,3);

  fill('white');
  stroke('white');
  circle(150,100,3);

  fill('white');
  stroke('white');
  circle(550,100,3);




  }

  
}

 function mousePressed() {
  daytime = !daytime 
  // =! means not equal aka daytime is false which turns into nighttime
