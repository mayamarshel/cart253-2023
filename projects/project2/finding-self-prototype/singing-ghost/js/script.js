"use strict";

let player = {
    x: 0,
    y: 0,
    size: 40
}

let stranger = {
    x: 0,
    y: 0, 
    size: 40
}

let strangers = []
let strangerTotal = 5

let synth;
let notes = [`F4`, `G4`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F5`];
let interval;

let state = 'start'

function setup() {
  createCanvas(600, 600);
  userStartAudio();

  synth = new p5.PolySynth();

  for (let i = 0; i < 4; i++) {
    strangers[i] = createStranger(random(0,width),random(0,height));
  }

  for (let i = 0; i < strangerTotal; i++) {
    let stranger = strangers[i]
    strangers.push(stranger)
    console.log(strangers)
  }

  

  
}


function draw() {
  background(0);

  playerMove();
  screenChanges();


  

}




function playSong() {
  if (interval === undefined) {
    interval = setInterval(playRandomNote, 500);
  }
}

function playRandomNote() {
  let note = random(notes);
  synth.play(note, 1, 0, 1);
}

function screenChanges() {
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
    pop();
}   

function finalScreen(){
    push();
    textSize(45);
    fill(20, 0, 170);
    textAlign(CENTER, CENTER);
    text(`final screen`, width/2, height/2);
    pop();

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

    drawLine();

    if (player.x >= 500) {
        state = 'finalScreen'
      }
    
    for (let i = 0; i < strangerTotal; i++) {
        let stranger = strangers[i];
        displayStranger(stranger)
    }
    
}

function drawLine(){
    stroke(255)
    strokeWeight(10)
    line(500, 0, 500, 200)
    line(500, 400, 500, 600)
}

function playerMove() {
    player.x = mouseX
    player.y = mouseY
}

function displayStranger(stranger) {
    push();
    fill(200, 100, 100);
    noStroke();
    ellipse(stranger.x, stranger.y, stranger.size);
    pop();
}

function createStranger(x, y) {
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

