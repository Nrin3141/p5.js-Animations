var button;
var button2;
var button3;
var bgcolor;

function setup(){
  button = createButton("Delete");
  button.parent('button-position');
  button2 = createButton("Stopp");
  button2.parent('button-position');
  button3 = createButton("Go On");
  button3.parent('button-position');
  var canvas = createCanvas(1600, 750);
  bgcolor = color((242,242,242));
  background(bgcolor);
  canvas.parent('canvas-position');
  button.mousePressed(refresh);
  button2.mousePressed(noLoop);
  button3.mousePressed(loop);
}
function noLoop(){
  noLoop();
}
function loop(){
  loop();
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
  var moveXaxis = random(0,1600);
  var moveYaxis = random(0, 750);
  var green = random(0, 255);
  var blue = random(0, 255);
  var red = random(0,255);
  var size = random(20, 100)
  fill (red, green, blue);
  ellipse(moveXaxis,moveYaxis, size, size);


}
