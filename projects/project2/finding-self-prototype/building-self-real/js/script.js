"use strict";

  //Arrays to carry the circles and their contents
let strangers = []
let selves = []

let totalStrangers = 5
let strangersMet = []

let state = 'start'

function setup() {
  createCanvas(600, 600);
  
  fillStrangeArray()
  fillSelfArray()
  console.log(new Self)

}

function draw() {
  background(0)

  screenChanges()
  checkDistance()
  
}



function gameScreen() {
    //pulls each stranger from the array and displays them using the stranger display class function
  for (let i = 0; i < totalStrangers; i++) {
    let stranger = strangers[i];
    stranger.display();
  }
    //pulls each self from array and diplays it, sets movement to mouse
  for (let i = 0; i < selves.length; i++) {
    let self = selves[i];
    self.x = mouseX
    self.y = mouseY
    self.display();
  }
}



function fillStrangeArray() {
for (let i = 0; i < totalStrangers; i++) {
//ADD CODE to change numbers to variables
  let vx = random(0.5, 2); 
  let vy = random(0.5, 2); 

  let x = random(0, width) 
  let y = random(0, height) 

  let r = random(0, 255)
  let g = random(0, 255)
  let b = random(0, 255)
  
  
  let stranger = new Stranger(x, y, vx, vy, r, g, b);
  console.log(new Stranger(x, y, r, g, b))

  strangers.push(stranger); 
}
}


function fillSelfArray() {
    //puts first self in self array 
  for (let i = 0; i < 1; i++) {
    let self = new Self();
    selves.push(self)
  }
}

function checkDistance() {
// NEED TO find a way to makes the selves and strangers here the particular one that the self is touching 
  let d = dist(self.x, self.y, stranger.x, stranger.y);
        if (d < self.size / 2 + stranger.size / 2 && !strangersMet.includes(circles.indexOf(stranger))) {
            for (let i = 0; i < 1; i++) {
                strangersMet.push(strangers.indexOf(stranger));
                console.log(strangersMet)
    
        }
    }
  }







//SCREENS
function start() {
  push();
  textSize(45);
  fill(20, 0, 170);
  textAlign(LEFT, CENTER);
  text('start', width/2, height/2);
}


function screenChanges() {
if (state === 'start') {
    start();
}
else if (state === 'gameScreen') {
    gameScreen();
}
}


function keyPressed() {
if (state === 'start') {
    state = 'gameScreen'
}
console.log(state)
}

