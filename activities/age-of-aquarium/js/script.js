/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let school = [];
let schoolSize = 10;


function setup() {
    createCanvas(600, 600);

    for(let i = 0; i < schoolSize; i++){
        let fish = createFish(random(0, width), random(0, height));
        school.push(fish);
    }
}

function createFish(x, y) {
    let fish = {
        x: x, 
        y: y, 
        size: 50, 
        vx: 0, 
        vy: 0,
        speed: 2
    };
    return fish;
}

function draw() {
  background(0);

  for (let i = 0; i < 4; i++) {
    moveFish(school[i]);
  }

  // Same again for displaying
  for (let i = 0; i < 4; i++) {
    displayFish(school[i]);
  }
}



function moveFish(fish) {

    let change = random(0, 1);
    if (change < 0.05) {
        fish.vx= random(-fish.speed, fish.speed);
        fish.vy = random(-fish.speed, fish.speed);
    }
}