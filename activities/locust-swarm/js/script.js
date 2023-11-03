
// need to figure out mouse pressed funciton


"use strict";


let crops = {
    // array and total flower number
  wheatArray: [],
  totalWheat: 20,

  locusts: [], 
  totalLocusts: 10,


  //background color
  grassColor: {
    r: 120,
    g: 180,
    b: 120
  }
};


function setup() {
  createCanvas(600, 600);


  //adds new wheat plants up to total wheat plant count
  //puts new wheat plant into array
  for (let i = 0; i < crops.totalWheat; i++) {
    let wheat = new Wheat();
    crops.wheatArray.push(wheat);
  }

  let bee = new Bee();
  
  for (let i = 0; i < crops.totalLocusts; i++) {
    //sets x and y to random 
    let x = random(0, width);
    let y = random(0, height);

    //creates new local variable with class locust description inside (with x and y parameters)
    let locust = new Locust(x, y)

    //adds new bee to bee array
    crops.locusts.push(locust);
  }
  
}



function draw() {
    //respawns background each frame
    background(crops.grassColor.r, crops.grassColor.g, crops.grassColor.b);
    
    //creates Bee character and maps to user mouse if Bee is alive
  let bee = new Bee;


  if (bee.alive){
   bee.display(mouseX, mouseY);
  }

  for (let i = 0; i < crops.locusts.length; i++) {
   let locust = crops.locusts[i];
   if (bee.alive){
     bee.display(mouseX, mouseY);
     bee.killLocust(locust);
    }
  }


    for (let i = 0; i < crops.locusts.length; i++) {
      //creates local variable that stores the specific bee in the array
      // i is the index value of the bee in question
      let locust = crops.locusts[i];

      //calls the methods if the bee is alive
      if (locust.alive){
        locust.move();
        
        //bee will try and pollinate every flower
        //j is used because i has been used as index argument in this function already
        //calls the tryToPollinate function with flower as the argument AFTER setting the
        //flower local variable to mean a certain index of flower inside the flower array
        for (let j = 0; j < crops.wheatArray.length; j++) {
          let wheat = crops.wheatArray[j];
          locust.killCrops(wheat);
        }
        
        locust.display();
        }
      }


    //displays all the wheat stalks in the wheat array
    for (let i = 0; i < crops.wheatArray.length; i++) {
      let wheat = crops.wheatArray[i];
      let bee = Bee;
      if (wheat.alive) {
        wheat.display(); 
      }
      if (bee.alive === true){
        bee.display(mouseX, mouseY);
        console.log('there is a bee')
  
  }
    }


    

}
      
