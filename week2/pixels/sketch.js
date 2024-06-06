
let img;
let sampleX = 25;
let sampleY = 25;

function preload(){
	img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg/800px-Anas_platyrhynchos_male_female_quadrat.jpg');
}

function setup() {
  createCanvas(900, 900);
  img.loadPixels();
}

function draw() {
  background(220);
  noStroke()

  translate(50,50);
  //image(img,-2, -2);

  for (let x = 0; x <= img.width; x += sampleX){
    for (let y = 0; y <= img.height; y += sampleY){
      var index = (x + y * img.width) * 4;
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];

      fill(r,g,b);
      ellipse(x,y,sampleX,sampleY);

    }
  }
