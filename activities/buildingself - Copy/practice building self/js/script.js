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


function setup(){
    createCanvas(400, 400);

    randomColor()
    randomPos()
    randomVel()

}

function draw() {
    background(0)

   // checkOffScreen()

    fill(circle.colorR, circle.colorB, circle.colorB) 

    circle.x = circle.x + circle.vx
    circle.y = circle.y + circle.vy

    ellipse(circle.x, circle.y, circle.size);
    console.log('the R value is' + circle.colorR)

    if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
        remove(circle);
        circle.colorR = random(0,255)
        //randomColor();
       // randomPos()
       // randomVel()
        //ellipse(circle.x, circle.y, circle.size);
        }
   // else if (theLover.x < 0 || theLover.x > width || theLover.y < 0 || theLover.y > height){
        }
    
    
    


checkOffScreen()




// OTHER FUNCTIONS

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










