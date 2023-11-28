"use strict";

  //Arrays to carry the circles and their contents
let strangers = []
let selves = []

let totalStrangers = 5
let strangersMet = []

let state = 'start'

let selfRadius = 10

let r = []
let g = []
let b = []

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
for (let i = 0; i < strangers.length; i++) {
  let stranger = strangers[i]
    let d = dist(mouseX + 25, mouseY + 25, stranger.x, stranger.y);
        if (d < 20 / 2 + stranger.size / 2 && !strangersMet.includes(strangers.indexOf(stranger))) {
//ADD CODE to make self size into a running number that can be calculated by a function SELFSIZE FUNCTION
            strangersMet.push(strangers.indexOf(stranger));
            console.log(strangersMet)

              //addes the color info for the specific stranger circle to the specified color arrays 
            r.unshift(stranger.r)
            console.log(r)
            g.unshift(stranger.g)
            console.log(g)
            b.unshift(stranger.b)
            console.log(b)
            
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


//how to make them appear in the right order???
function drawAllSelf() {
  for (let i = 0; i < strangersMet.length; i++){
    push()
    let indexValue = 0
    fill(r[indexValue], g[indexValue], b[indexValue])
    ellipse(mouseX, mouseY, 50 + (i * 10))
    indexValue = indexValue + 1
    pop()
  }
  
}