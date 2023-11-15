"use strict";

let player = {
    x: 0,
    y: 0,
    size: 40
}

  //initializes stranger array and sets a number for the maximum value for the array 
let strangers = []
let strangerTotal = 5

  //creates the synth and fills the notes array
let synth;
let notes = ['F4', 'G4', 'A4', 'Bb4', 'C4', 'D4', 'E4'];
let interval;

let state = 'start'

let strangersMet = []

function setup() {
  createCanvas(600, 600);
  userStartAudio();

  synth = new p5.PolySynth();

  createStrangArray()
  
}


function draw() {
  background(0);

  playerMove();
  screenChanges();

}



//MUSIC FUNCTIONS
function playSong() {
    //if interval is not created create the interval and play random note
  if (interval === undefined) {
    interval = setInterval(playRandomNote, 500);
  }
}

function playRandomNote() {
    //get random note from note array and play using synth
  let note = random(notes);
  synth.play(note, 1, 0, 1);
}

function screenChanges() {
      //matches screen to the state
    if (state === 'start') {
        start();
    }
    else if (state === 'gameScreen') {
        gameScreen();
    }
    else if (state === 'finalScreen') {
        finalScreen();
    }
}

function keyPressed() {
      //starts game with key press
    if (state === 'start') {
        state = 'gameScreen'
    }
    console.log(state)
}


//STATES
function start(){
    push();
    textSize(45);
    fill(20, 0, 170);
    textAlign(CENTER, CENTER);
    text(`start`, width/2, height/2);
    textSize(30)
    textAlign(CENTER, CENTER);
    text(`press any key`, 300, 400);
    pop();

}   

function finalScreen(){
    push();
    textSize(45);
    fill(20, 0, 170);
    textAlign(CENTER, CENTER);
    text(`final screen`, width/2, height/2);
    pop();
      //plays random song on final screen 
    playSong();
}   

function gameScreen() {
    
    ellipse(player.x, player.y, player.size)

    push()
    textSize(45);
    fill(20, 0, 170);
    textAlign(CENTER, CENTER);
    text(`game screen`, width/2, height/2);
    pop();
        //draws finish line
    drawLine();
        //if player reaches finish line set state to final screen 
    if (player.x >= 500) {
        state = 'finalScreen'
      }
        //displays all the strangers in array
    for (let i = 0; i < strangerTotal; i++) {
        let stranger = strangers[i];
        displayStranger(stranger)
    }

    checkOverlap()
    
}

function drawLine(){
    stroke(255)
    strokeWeight(10)
    line(500, 0, 500, 200)
    line(500, 400, 500, 600)
}

function playerMove() {
      //sets player movement to mouse position
    player.x = mouseX
    player.y = mouseY
}

function displayStranger(stranger) {
      //displays stranger to be called for each stranger in array 
    push();
    fill(200, 100, 100);
    noStroke();
    ellipse(stranger.x, stranger.y, stranger.size);
    pop();
}

function createStranger(x, y) {
      //creates and returns stranger object with x and y parameters to be filled with random values 
    let stranger = {
      x: x,
      y: y,
      size: 40,
      vx: 0,
      vy: 0,
      speed: 2
    };
    return stranger;
  }

  function createStrangArray() {
      //fills stranger array with stranger objects with accompanying random xy values up to amount of stranger total 
    for (let i = 0; i < 4; i++) {
        strangers[i] = createStranger(random(0,width),random(0,height));
      }
    
      for (let i = 0; i < strangerTotal; i++) {
        let stranger = strangers[i]
        strangers.push(stranger)
        console.log(strangers)
      }
  }

  function checkOverlap(){
    for (let i = 0; i < strangerTotal; i++) {  
        let stranger = strangers[i]
          //checks overlap of stranger and player and plays note if overlapping
        let d = dist(player.x, player.y, stranger.x, stranger.y);
        if (d < player.size/2 + stranger.size/2 && !strangersMet.includes(strangers.indexOf(stranger))){
              //synth.play(note, velocity, seconds from now, duration)
            let randomNote = random(notes)
            synth.play(randomNote, 1, 0, 1)

            console.log(randomNote)

              //adds stranger to already met stranger array so once you meet one stranger you can't meet again 
            strangersMet.push(strangers.indexOf(stranger));
        }


    }
  }
