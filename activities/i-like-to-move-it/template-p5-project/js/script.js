/**
 * I Like to Move It
 * Maya Marshel
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/

//variable for background
let backgroundShade = 0;

// Establish square object
let box ={
    x: 400,
    y: 600,
    size: 200,
    stop: 70,
    fill: 0
};

//Establish circle object
let ball ={
    x: 500,
    y: 0, 
    height: 500,
    speed: 5,
    shrink: 0.5
};

//establish rectangle
let rectangle ={
    x: 0, 
    y: 100,
    w: 100, 
    h: 100,
};

function preload() {

}


/**
 * Description of setup
*/
function setup() {

    createCanvas(1000, 1000);

    
}


/**
 * Description of draw()
*/
function draw() {

//make so ball leaves no trail and make background change color fully across the screen with mouse input
    backgroundShade = mouseX, 50, 20;
    backgroundShade = map(mouseX, 0, width, 0, 255);
    background(backgroundShade);
    
// make circle fall and stop inside box
    ball.y = ball.y + ball.speed;

    ball.y = constrain(ball.y, 0, box.y + box.stop);

//make ball shrink and stop in box
    ball.height = ball.height - ball.shrink;
    ball.height = constrain(ball.height, 0, 100);
    
//spawn objects
    ellipse(ball.x, ball.y, ball.height);
    square(box.x, box.y, box.size);     

//spawn rectangle and make move with mouse
   rect(mouseX, rectangle.y, rectangle.w, rectangle.h);


  

   
}