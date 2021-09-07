function bed() 
{
    window.location = "bed.html";
}
img = "";
function preload() {
    img = loadImage('bed.jpeg');
}
function setup() {
canvas = createCanvas(640, 420);
canvas.center();
}
function draw() {
image(img, 0, 0, 640, 420);
fill("#FF0000");
text("Bed", 95, 75);
noFill();
stroke("#FF0000");
rect(90, 60, 450, 350);
}