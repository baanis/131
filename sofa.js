function sofa() 
{
    window.location = "sofa.html";
}
img = "";
function preload() {
    img = loadImage('sofa.jpg');
}
function setup() {
canvas = createCanvas(640, 420);
canvas.center();
}
function draw() {
image(img, 0, 0, 640, 420);
fill("#FF0000");
text("Sofa", 15, 75);
noFill();
stroke("#FF0000");
rect(10, 60, 620, 350);
}