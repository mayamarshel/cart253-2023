/**
 * I Like to Move It
 * Maya Marshel
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */


"use strict";


let garden = {
    // array and total flower number
  flowers: [],
  totalFlowers: 20,

    // bee array and total bee number
  locusts: [],
  totalLocusts: 5,

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

  //creates loop that counts to total bees wanted
  for (let i = 0; i < garden.totalLocusts; i++) {
    //sets x and y to random 
    let x = random(0, width);
    let y = random(0, height);

    //creates new local variable with class bee description inside (with x and y parameters)
    let locust = new Locust(x, y);

    //adds new bee to bee array
    garden.locusts.push(locust);
  }
  
}



function draw() {

    //respawns background each frame
    background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);
      
    //display each flower in the array up to the total number
    for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i];
        //checks is alive variable is accurate 
        //does not display flower if radius is 0 (flower is dead)
        if (flower.alive) {
          flower.shrink();
          flower.display(); 
        
    }

  }
  

    //loop counts to the length of the bee array
    for (let i = 0; i < garden.locusts.length; i++) {
      //creates local variable that stores the specific bee in the array
      // i is the index value of the bee in question
      let locust = garden.locusts[i];

      //calls the methods if the bee is alive
      if (locust.alive){
        locust.shrink();
        locust.move();
        
        //bee will try and pollinate every flower
        //j is used because i has been used as index argument in this function already
        //calls the tryToPollinate function with flower as the argument AFTER setting the
        //flower local variable to mean a certain index of flower inside the flower array
        for (let j = 0; j < garden.flowers.length; j++) {
          let flower = garden.flowers[j];
          locust.tryToPollinate(flower);
        }
        
        locust.display();
        }
      }
    }
      



function mousePressed() {
  //pulls length of array from garden object and flower array
  for (let i = 0; i < garden.flowers.length; i++){
    //make local variable that stores flower array index for counting to array length
    let flower = garden.flowers[i];
    //calls mousePressed function from flower class
    flower.mousePressed();
  }
}