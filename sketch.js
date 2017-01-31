var button;
var bgcolor;

function setup(){
  button = createButton("Delete");
  button.parent('button-position');
  var canvas = createCanvas(1600, 750);
  bgcolor = color((242,242,242));
  background(bgcolor);
  canvas.parent('canvas-position');


  button.mousePressed(refresh);
}

function refresh(){
  noCanvas();
  canvas = createCanvas(1600, 750);
  canvas.parent('canvas-position');
  background(bgcolor);
  ;
}
function draw(){
  cursor(ARROW);
  if (mouseIsPressed) {
    var green = random(100, 255);
    var blue = random(100, 255);
    fill (0, green, blue);
    ellipse(mouseX, mouseY, 50, 50);
  }

}
