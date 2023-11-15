"use strict";

let player = {
    x: 0,
    y: 0,
    size: 40
}

let synth;
let notes = [`F4`, `G4`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F5`];
let interval;

let state = 'start'

function setup() {
  createCanvas(600, 600);
  userStartAudio();

  synth = new p5.PolySynth();

  
}


function draw() {
  background(0);
  screenChanges();

  
    player.x = mouseX
    player.y = mouseY
  
  

  

  
  

  

  

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
    
}

function drawLine(){
    stroke(255)
    strokeWeight(10)
    line(500, 0, 500, 200)
    line(500, 400, 500, 600)
}