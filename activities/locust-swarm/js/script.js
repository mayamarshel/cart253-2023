
"use strict";


let crops = {
    // array and total flower number
  wheatArray: [],
  totalWheat: 20,

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
  
}



function draw() {
    //respawns background each frame
    background(crops.grassColor.r, crops.grassColor.g, crops.grassColor.b);
    
    console.log(crops.wheatArray)

    //displays all the wheat stalks in the wheat array
    for (let i = 0; i < crops.wheatArray.length; i++) {
      let wheat = crops.wheatArray[i];
      if (wheat.alive) {
        wheat.display(); 
        wheat.shrink();
      
  }

}
   
  }
  

   
      
