
function preload(){
	img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg/800px-Anas_platyrhynchos_male_female_quadrat.jpg');
}

function setup() {
  createCanvas(900, 900);
  img.loadPixels();
}

function draw() {
  background(220);
