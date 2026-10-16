let posX, xSpeed;

function setup(){
    createCanvas(600, 400);
    posX = width/ 2;
    xSpeed = 5;
    background("lightblue");
    noStroke()
}

function draw() {
    background("lightblue")
    fill("limegreen")
    circle(posX, height/2, 50)
    posX = posX + xSpeed
    if(posX > 590) {
        xSpeed = -5
    }
    if(posX < 10) {
        xSpeed = 5
    }
}