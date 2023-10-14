/**
 * Finding Self
 * Maya Marshel
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 * 
 * 
 * just finished making loop to generate 20 circles at a time
 * need to figure out how to color background without it going in front of the circles
 * need to add random   automated movement to the circes
 * 
 */


let circle = {
    x: 200, 
    y: 200, 
    size: 50, 
    vx: 5,
    vy: 5,
    colorR: 0, 
    colorG: 0,
    colorB: 0
}

let mousePressed() = false

function setup(){
    createCanvas(400, 400);

    ranSize()


}

function draw() {

    ellipse(circle.x, circle.y, circle.size)

    if (mousePressed === true){
        remakeCircle()
    }
}


    
    







// OTHER FUNCTIONS

function remakeCircle(){
    ranSize()
    ellipse(circle.x, circle.y, circle.size)
}

function randomColor(){
    circle.colorR = random(0, 255)
    circle.colorG = random(0, 255)
    circle.colorB = random(0, 255)
}

function randomPos(){
    circle.x = random(0, width);
    circle.y = random(0, height);
}

function randomVel(){
    circle.vx = random(0, circle.vx);
    circle.vy = random(0, circle.vy);
}

function checkOffScreen(){
    //checks if gone off screen
    if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
        remove(circle);
        randomColor();
        randomPos()
        randomVel()
        ellipse(circle.x, circle.y, circle.size);
        }
   // else if (theLover.x < 0 || theLover.x > width || theLover.y < 0 || theLover.y > height){
        }
    //}

function ranSize(){
    circle.size = random(10, 100);
}









