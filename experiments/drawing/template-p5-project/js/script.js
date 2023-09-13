/**
 * Drawing Shapes and Colors
 * Maya Marshel
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500, 500);

  
    background(240, 239, 168);


//Draw alien head
    fill(255, 1, 200)
    noStroke()
    ellipseMode(CENTER)
    ellipse(250, 130, 100, 150)

    fill(0)
    ellipse(213, 130, 10, 10)
    ellipse(287, 130, 10, 10)

    arc(250, 160, 40, 40, 0, PI)

    strokeWeight(10)
    line(250, 230, 290, 110)
    


}


/**
 * Description of draw()
*/
function draw() {

}