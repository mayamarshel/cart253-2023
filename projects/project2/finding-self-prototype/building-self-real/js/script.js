"use strict";

  //Arrays to carry the circles and their contents
let strangers = []
let selves = []

let totalStrangers = 5
let strangersMet = []

let state = 'start'

let r = []
let g = []
let b = []
let rgbValues = []


function setup() {
  createCanvas(800, 700);
  
  fillStrangeArray()
  fillSelfArray()
}

function draw() {
  background(0)

  moveStrange()

  screenChanges()
  checkDistance()
  storeAllSelf()
  drawAllSelf()

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
for (let i = 0; i < strangers.length; i++) {
  let stranger = strangers[i]
    let d = dist(mouseX + 25, mouseY + 25, stranger.x, stranger.y);
        if (d < 20 / 2 + stranger.size / 2 && !strangersMet.includes(strangers.indexOf(stranger)) && state === 'gameScreen') {
            strangersMet.push(strangers.indexOf(stranger));
            console.log(strangersMet)

              //addes the color info for the specific stranger circle to the specified color arrays 
            r.unshift(stranger.r)
            console.log(r)
            g.unshift(stranger.g)
            console.log(g)
            b.unshift(stranger.b)
            console.log(b)

              //set stranger color to a random value after self has collided with them 
            let randomNum = random(0, 3)
            stranger.r = stranger.r/randomNum
            stranger.g = stranger.g/randomNum
            stranger.b = stranger.b/randomNum
            
        }
    }
  }



//SCREENS
function start() {
  push();
  textSize(60);
  fill(240, 0, 70);
  textAlign(LEFT, CENTER);
  text('building self', width/2, height/2);
  pop()

  push();
  textSize(25);
  fill(240, 0, 70);
  textAlign(LEFT, CENTER);
  text('press SHIFT to begin', width/2, 600);
  pop()
}

function finishScreen() {
  push();
  textSize(45);
  fill(240, 0, 70);
  textAlign(CENTER, CENTER);
  text('look at what you have made', width/2, height/2);
}


function screenChanges() {
if (state === 'start') {
    start();
}
else if (state === 'gameScreen') {
    gameScreen();
}
else if (state === 'finishScreen') {
    finishScreen();
}
}


//how to make them appear in the right order???
function storeAllSelf() {
for (let i = 0; i < strangersMet.length; i++) {
  rgbValues[i] = Array(r[i], g[i], b[i])
  }
}

function drawAllSelf() {
  for (let i = rgbValues.length - 1; i >= 0; i--) {
    push()
    fill(rgbValues[i][0], rgbValues[i][1], rgbValues[i][2])
    ellipse(mouseX, mouseY, 10 + (i * 10))
    pop()
  }
}

// figure out how to move strangers
function moveStrange() {
  for (let i = 0; i < strangers.length; i++) {
    let stranger = strangers[i]
    stranger.move()
  }
}

function keyPressed() {
    //finished game is SPACE BAR is pressed
  if (keyCode === 32) {
    state = 'finishScreen'
  }
    //starts game if SHIFT is pressed
  else if (keyCode === 16) {
    state = 'gameScreen'
}
}