
"use strict";

  //Arrays to carry the circles and their contents
let strangers = [];
let selves = [];
let sizeIncrease = 10;

  //holds info for the door object
let doorOpen = {
  left: 400,
  right: 400,
  doorEntrance: 0
};

let totalStrangers = 10;
let strangersMet = [];

let state = 'start';

  //Create different arrays for the colors to be called when self intersects with strangers
let r = [];
let g = [];
let b = [];
  //stores the above data into a nested array so that it can be called more easily
let rgbValues = [];

  //creating variables for the music
let synth;
let notes = ['F4', 'G4', 'A4', 'Bb4', 'C4', 'D4', 'E4'];
let interval;

  //variable for the image
let titleImage;

function preload() {
    //loads in image so its ready to use when program states
  titleImage = loadImage("assets/images/buildingself-titlescreen.jpg");

};

function setup() {
  createCanvas(800, 700);
  
    //fills self and stranger arrays with preliminary amounts 
    //idea + some code to fill the array first and then display it come from the Aquarium activity
  fillStrangeArray();
  fillSelfArray();

    //loads in audio 
  userStartAudio();
  synth = new p5.PolySynth();
}

function draw() {
  background(0);

    //sets movement for strangers to random velocity that changes every few seconds
  moveStrange();

    //changes screens with mouse press
  screenChanges();

    //checks if strangers and self have overlapped
  checkDistance();

    //puts newly aquired RGB information in to rgbValues array
  storeAllSelf();

    //redraws self with new RGB data
  drawAllSelf();
}


//ARRAYS
function fillStrangeArray() {
for (let i = 0; i < totalStrangers; i++) {
  randomizeElements();
}
};

function fillSelfArray() {
    //puts first self in self array 
  for (let i = 0; i < 1; i++) {
    let self = new Self();
    selves.push(self)
  }
};

  //stores rgb information in values array for access
function storeAllSelf() {
for (let i = 0; i < strangersMet.length; i++) {
    //idea for using a nested array was given by Mathilde
  rgbValues[i] = Array(r[i], g[i], b[i])
  }
};

function drawAllSelf() {
  for (let i = rgbValues.length - 1; i >= 0; i--) {
      //code for calling a loop backwards was given by Pippin
    push();
      //accesses rgb information from values array to put into specific fill 
    fill(rgbValues[i][0], rgbValues[i][1], rgbValues[i][2]);
      //Makes circle a little bigger each time loop is called
    ellipse(mouseX, mouseY, 10 + (i * sizeIncrease));
    pop();
  }
}

// calls move stranger array for each stranger
function moveStrange() {
  for (let i = 0; i < strangers.length; i++) {
    let stranger = strangers[i]
    stranger.move()
  }
};

function generateNewStranger() {
    //creates new strangers throughout the game to put into as
  let r = random(0, 2);
  if (r < 0.01) {
    randomizeElements();
  }
};

  //creates and stores random values in the Stranger parameters
function randomizeElements() {
  let vx = random(Stranger.slowest, Stranger.fastest); 
  let vy = random(Stranger.slowest, Stranger.fastest); 

  let x = random(0, width) ;
  let y = random(0, height); 

  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);

  let stranger = new Stranger(x, y, vx, vy, r, g, b);

  strangers.push(stranger); 
};


function checkDistance() {
  for (let i = 0; i < strangers.length; i++) {
      //do this action for the specific stranger in question
    let stranger = strangers[i];
      let d = dist(mouseX, mouseY, stranger.x, stranger.y);
      //check distance amount and see if they are intersecting
          if (d < 20 / 2 + stranger.size / 2 && !strangersMet.includes(strangers.indexOf(stranger)) && state === 'gameScreen') {
            //these equations come from the Dodging Covid activity with some tweaks to the arguments
                //add to met strangers array so a stranger can only be met once
              strangersMet.push(strangers.indexOf(stranger));
  
                //addes the color info for the specific stranger circle to the specified color arrays 
              r.unshift(stranger.r);
              g.unshift(stranger.g);
              b.unshift(stranger.b);
  
                //set stranger color to a random value after self has collided with them 
              let randomNum = random(0, 3)
              stranger.r = stranger.r/randomNum;
              stranger.g = stranger.g/randomNum;
              stranger.b = stranger.b/randomNum;
              
              playRandomNote();
  
                //Opens doors as you meet more people
              doorOpen.left = doorOpen.left - 15;
              doorOpen.right = doorOpen.right + 15;
  
                //changes stranger size when you meet them
              stranger.shrinkOrGrow();
  
          }
      }
    }


//MUSIC 
  //these two functions are pulled from the Ghost Pianist activity
function playRandomNote() {
    //creates varibles that stores a random note from the notes array and plays it
  let randomNote = random(notes);
      synth.play(randomNote, 1, 0, 1);
      console.log(randomNote);
};

function playSong() {
    //plays a random note from the array if a note is not currently playing 
  if (interval === undefined) {
      console.log('song is playing')
      interval = setInterval(playRandomNote, 500)}
      else{
          clearInterval(interval);
          interval = undefined;
      }
  };


//SCREENS
function start() {
    //'Building self' title screen
  image(titleImage, 0, 0);
};

function quoteScreen() {
  push();
  textSize(25);
  fill(255);
  textAlign(CENTER, CENTER);
  text('"You are going to meet people who\nwill change your life forever.\n Some are there for years, a few\n for a lifetime and many for what\n seems like just a flash. But\n everyone changes you in a way. They\n are all pieces of who you are and\n who you will be"\n\n -Evan Sanders', width/2, height/2);
  pop();
  
    //draw arrow tunnel
  push();
  stroke(80, 0, 150);
  strokeWeight(70);
  line(0, 600, 800, 600);
  pop();

    //draw end of the arrow
  push();
  noStroke();
  fill(80, 0, 150);
  triangle(760, 530, 760, 670, 840, 600);
  pop();

    // constrain the x and y values of a point to work inside the tunnel only
    //the idea to constrain the actual X and Y positions of the object come from the p5js.org page on constrain()
  push();
  let x = mouseX
  let y = constrain(mouseY, 575, 625);
  stroke(255);
  strokeWeight(20);
  point(x, y);
  pop();

   //starts game if end of arrow is reached
  if (mouseX >= 800) {
    state = 'gameScreen'
  }
};


function gameScreen() {
  //pulls each stranger from the array and displays them using the stranger display class function
for (let i = 0; i < strangers.length; i++) {
  let stranger = strangers[i];
  stranger.display();
};
  //pulls each self from array and diplays it, sets movement to mouse
for (let i = 0; i < selves.length; i++) {
  let self = selves[i];
  self.x = mouseX
  self.y = mouseY
  self.display();
};
generateNewStranger()

  //draws two lines to be the doorway 
push();
stroke(150, 100, 80);
strokeWeight(7);
line(100, 0, doorOpen.left, 70);
pop();

push();
stroke(150, 100, 80);
strokeWeight(7);
line(700, 0, doorOpen.right, 70);
pop();

  //ends game if player goes through doorway
if (mouseY <= doorOpen.doorEntrance) {
  state = 'finishScreen'
  playSong();
};
}

  //final screen 
function finishScreen() {
  push();
  textSize(45);
  fill(255);
  textAlign(CENTER, CENTER);
  text('look at you! how beautiful ', width/2, height/2);
  pop();
}

  //associates screen with screen function
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
};

function keyPressed() {
  //moves to quote screen if SHIFT is pressed
if (keyCode === 16 && state === 'start') {
  state = 'quoteScreen'
}
};