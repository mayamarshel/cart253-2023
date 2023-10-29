
//STOPPED AT Let the Pollination begin

"use strict";


let garden = {
    // array and total flower number
  flowers: [],
  totalFlowers: 20,

    // bee array and total bee number
  bees: [],
  totalBees: 5,

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
  for (let i = 0; i < garden.totalBees; i++) {
    //sets x and y to random 
    let x = random(0, width);
    let y = random(0, height);

    //creates new local variable with class bee description inside (with x and y parameters)
    let bee = new bee(x, y);

    //adds new bee to bee array
    garden.bees.push(bee);
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
    for (let i = 0; i < garden.bees.length; i++) {
      //creates local variable that stores the specific bee in the array
      // i is the index value of the bee in question
      let bee = garden.bees[i];

      //calls the methods if the bee is alive
      if (bee.alive){
        bee.shrink();
        bee.move();
        bee.display();
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