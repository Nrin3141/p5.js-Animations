var button;
var bgcolor;
function setup(){
  canvas = createCanvas(200, 200);
  bgcolor = color(200);
  button = createButton("Click me");
  button.mousePressed(changeColor);
}

function changeColor(){
  var red = random(0, 255);
  var green = random(0, 255);
  var blue = random(0, 255);
  bgcolor = color(red, green, blue);
}
function draw(){
  background(bgcolor);
}
