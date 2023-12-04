"use strict";

  //Arrays to carry the circles and their contents
let strangers = []
let selves = []

let totalStrangers = 10
let strangersMet = []

let state = 'start'

let r = []
let g = []
let b = []
let rgbValues = []

let synth;
let notes = ['F4', 'G4', 'A4', 'Bb4', 'C4', 'D4', 'E4'];
let interval;

let titleImage;

function preload() {
  titleImage = loadImage("assets/images/buildingself-titlescreen.jpg");

}

function setup() {
  createCanvas(800, 700);
  
  fillStrangeArray()
  fillSelfArray()

  userStartAudio();
  synth = new p5.PolySynth();
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
  for (let i = 0; i < strangers.length; i++) {
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
  generateNewStranger()


}



function fillStrangeArray() {
for (let i = 0; i < totalStrangers; i++) {
//ADD CODE to change numbers to variables
  let vx = random(2, 5); 
  let vy = random(2, 5); 

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
            console.log('stranger met ' + strangersMet)

              //addes the color info for the specific stranger circle to the specified color arrays 
            r.unshift(stranger.r)
            g.unshift(stranger.g)
            b.unshift(stranger.b)

              //set stranger color to a random value after self has collided with them 
            let randomNum = random(0, 3)
            stranger.r = stranger.r/randomNum
            stranger.g = stranger.g/randomNum
            stranger.b = stranger.b/randomNum
            
            playRandomNote();
        }
    }
  }


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

function generateNewStranger() {
  let r = random(0, 2);
  if (r < 0.01) {
    let vx = random(2, 5); 
    let vy = random(2, 5); 

    let x = random(0, width) 
    let y = random(0, height) 

    let r = random(0, 255)
    let g = random(0, 255)
    let b = random(0, 255)

  let stranger = new Stranger(x, y, vx, vy, r, g, b);

  strangers.push(stranger); 
  }
}


//MUSIC 
function playRandomNote() {
  let randomNote = random(notes)
      synth.play(randomNote, 1, 0, 1)
      console.log(randomNote)
}

function playSong() {
  if (interval === undefined) {
      console.log('song is playing')
      interval = setInterval(playRandomNote, 500)}
      else{
          clearInterval(interval)
          interval = undefined;
      }
  }

  function playRandomNote() {
    let randomNote = random(notes)
        synth.play(randomNote, 1, 0, 1)
        console.log(randomNote)
}




//SCREENS
function start() {
  image(titleImage, 0, 0);
}

function quoteScreen() {
  push();
  textSize(25);
  fill(255);
  textAlign(CENTER, CENTER);
  text('"You are going to meet people who\nwill change your life forever.\n Some are there for years, a few\n for a lifetime and many for what\n seems like just a flash. But\n everyone changes you in a way. They\n are all pieces of who you are and\n who you will be"\n\n -Evan Sanders', width/2, height/2);

  pop();
}

function finishScreen() {
  push();
  textSize(45);
  fill(240, 0, 70);
  textAlign(CENTER, CENTER);
  text('look at what you have made', width/2, height/2);

  pop();
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
else if (state === 'quoteScreen') {
  quoteScreen();
}
}

function keyPressed() {
  //finished game is SPACE BAR is pressed
if (keyCode === 32) {
  state = 'finishScreen'
  playSong()
}
  //moves to quote screen if SHIFT is pressed
else if (keyCode === 16) {
  state = 'quoteScreen'
}
}