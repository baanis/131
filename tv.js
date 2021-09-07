function tv() 
{
    window.location = "tv.html";
}
img = "";
function preload() {
    img = loadImage('tv.jpg');
}
function setup() {
canvas = createCanvas(640, 420);
canvas.center();
}
function draw() {
image(img, 0, 0, 640, 420);
fill("#FF0000");
text("TV", 205, 75);
noFill();
stroke("#FF0000");
rect(200, 60, 315, 350);
}