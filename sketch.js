var button;
var bgcolor;
function setup(){
  canvas = createCanvas(200, 200);
  bgcolor = color(200);
  button = createButton("Random Color");
  button.mousePressed(changeColor);
}
function changeColor(){
  bgcolor = color(random(40,50,60));
}
function draw(){
  background(bgcolor);
}
