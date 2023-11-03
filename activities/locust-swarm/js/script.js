
"use strict";


let crops = {
  // array and total wheat number
  wheatArray: [],
  totalWheat: 20,

  //locust array and total
  locusts: [], 
  totalLocusts: 10,

  //background color
  grassColor: {
    r: 120,
    g: 180,
    b: 120
  }
};

let state = 'title'


function setup() {
  createCanvas(600, 600);


  //adds new wheat plants up to total wheat plant count
  //puts new wheat plant into array
  for (let i = 0; i < crops.totalWheat; i++) {
    let wheat = new Wheat();
    crops.wheatArray.push(wheat);
  }
  
  //sets random positions for each locust in array and counts up to total given
  for (let i = 0; i < crops.totalLocusts; i++) {
    //sets x and y to random 
    let x = random(0, width);
    let y = random(0, height);

    //creates new local variable with class locust description inside (with x and y parameters)
    let locust = new Locust(x, y)

    //adds new locust to locust array
    crops.locusts.push(locust);



  }
  
}



function draw() {



  //respawns background each frame
  background(crops.grassColor.r, crops.grassColor.g, crops.grassColor.b);
    
  //includes gamePlay screen
  screenChanges();
  winOrLose();
  
  

}



//OTHER FUNCTIONS

function gamePlay(){
  let bee = new Bee;
    //displays the Bee character and puts locust class into killLocust function so as loop runs it will check each locust
  //for overlap and if so will fire function
  for (let i = 0; i < crops.locusts.length; i++) {
    let locust = crops.locusts[i];
    if (bee.alive){
      bee.display(mouseX, mouseY);
      bee.killLocust(locust);
     }
   }
 
 
   for (let i = 0; i < crops.locusts.length; i++) {
       //creates local variable that stores the specific locust in the array
       // i is the index value of the locust in question
       let locust = crops.locusts[i];
 
       //calls the methods if the bee is alive/active
       if (locust.alive){
         locust.move();
         //j is used because i has been used as index argument in this function already
         //calls the killCrops function with wheat as the argument AFTER setting the
         //wheat local variable to mean a certain index of wheat inside the wheat array
         for (let j = 0; j < crops.wheatArray.length; j++) {
           let wheat = crops.wheatArray[j];
           locust.killCrops(wheat);
         }
         //only displays locust if alive
         locust.display();
         console.log(crops.locusts.length)
         }
       }
 
 
     //displays all the wheat stalks in the wheat array
     for (let i = 0; i < crops.wheatArray.length; i++) {
       let wheat = crops.wheatArray[i];
       if (wheat.alive) {
         wheat.display(); 
        
       }
   
     }  
 
}

//sets screen based on string title
function screenChanges(){
  if (state === `title`){
      title();
  }
      else if (state === `gameScreen`){
          gameScreen();}
      else if (state === 'locustsWin') {
          locustsWin();
      }
      else if (state === 'beeWins') {
        beeWins();
    }
  };

  //checks current screen and array length to determin win or lose screen
  function winOrLose() {
    if (state === 'gameScreen' && crops.locusts.length === 0) {
      state = 'beeWins'
      console.log('you win')}
      else if (state === 'gameScreen' && crops.wheatArray.length === 0){
        state = 'locustsWin'
      }
    
  }

  //starts game with a mouse press
  function mousePressed(){
    if(state === 'title'){
      state = 'gameScreen'}
    }



//SCREENS

function locustsWin(){
  state = 'locustsWin';
  
  push();
  textSize(55);
  fill(0, 100, 0);
  textAlign(CENTER, CENTER);
  text(`LOCUSTS WIN`, 300, 250);
  pop();

}  

function beeWins(){
  state = 'beeWins';
  
  push();
  textSize(55);
  fill(200, 0, 0);
  textAlign(CENTER, CENTER);
  text(`Killer Bees Win!`, 300, 250);
  pop();

}  

function title(){
  state = 'title';
  
  push();
  textSize(55);
  fill(0, 100, 100);
  textAlign(CENTER, CENTER);
  text(`Save the Crops`, 300, 250);
  pop();

  push();
  textSize(30);
  fill(0, 100, 100);
  textAlign(CENTER, CENTER);
  text(`Click to begin`, 300, 150);
  pop();

}  

function gameScreen(){
  state = 'gameScreen';
  gamePlay();

}
      
