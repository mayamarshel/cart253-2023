/**
 * Title of Project
 * Author Name
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
    background(255, 5, 69)
}


/**
 * Description of draw()
*/
function draw() {
    fill(0);
    rectMode(CENTER);
    rect(mouseX, mouseY, 50, 50);
}