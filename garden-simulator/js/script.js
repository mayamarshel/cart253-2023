/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";


let garden = {
    // array and total flower number
  flowers: [],
  totalFlowers: 20,

  grassColor: {
    r: 120,
    g: 180,
    b: 120
  }
};


function setup() {
  createCanvas(600, 600);


  // adds new flowers up to total flower amount
  // NEW is the word used when creating a new object from a class 
  for (let i = 0; i < garden.totalFlowers; i++) {
    //does let flower create a new local variable that is not confused with the flower array?
    let flower = new Flower();
    garden.flowers.push(flower);
  }
}



function draw() {

    //respawns background each frame
    background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);
      
    //display each flower in the array up to the total number
    for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i];
        flower.display(); 
    }
}
