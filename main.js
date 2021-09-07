img = "";
function preload() {
    img = loadImage('beanbag.jpg');
}
function setup() {
canvas = createCanvas(640, 420);
canvas.center();
}
function draw() {
image(img, 0, 0, 640, 420);
fill("#FF0000");
text("Bean Bag", 95, 75);
noFill();
stroke("#FF0000");
rect(90, 60, 450, 350);
}
