var button;
var bgcolor;
function setup(){
  button = createButton("Delete");
  canvas = createCanvas(800, 800);
  bgcolor = color(200);

  button.mousePressed(refresh);
}

function refresh(){
  noCanvas();
  canvas = createCanvas(800, 800);
  ;
}
function draw(){
  var red = 0;
  var green = random(100, 255);
  var blue = random(100, 255);
  fill (red, green, blue);
  ellipse(mouseX, mouseY, 50, 50);
}
noCursor();
