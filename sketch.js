var button;
var bgcolor;
function setup(){
  canvas = createCanvas(200, 200);
  bgcolor = color(200);
  button = createButton("Click me");
  button.mousePressed(changeColor);
}
function changeColor(){
  bgcolor = color(random(255,255,255));
}
function draw(){
  background(bgcolor);
}
