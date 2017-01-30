var button;
var bgcolor;
function setup(){
  createCanvas(200, 200);
  var button = createButton("Random Color");
  button.mousePressed(changeColor);
}
function changeColor(){
  bgcolor = random(40,50,60);
}
function draw(){
  background(bgcolor);
}
