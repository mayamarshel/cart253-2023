
"use strict";

let synth;
let notes = ['F4', 'G4', 'A4', 'Bb4', 'C4', 'D4', 'E4'];
let interval;
let currentNote = 0

let state = 'start'
let player = {
    x: 0,
    y: 0,
    size: 40
}

let stranger = {
    x: 150,
    y: 150,
    size: 40
}

let isOverlapping = false

function preload() {
    //preload heaven sound



}



function setup() {
    createCanvas(600, 600);
    userStartAudio();

    synth = new p5.PolySynth();

}



function draw() {
    background(0);

    movePlayer();
    screenChanges();
    checkOverlap();
    
    ellipse(stranger.x, stranger.y, stranger.size)
    

    


    
}



//MUSIC FUNCTIONS

function playSong() {
    if (interval === undefined) {
        
        interval = setInterval(playNextNote, 500)}
        else{
            clearInterval(interval)
            interval = undefined;
        }
    }
  
    function playNextNote() {
        let note = notes[currentNote];
        synth.play(note, 0.2, 0, 0.4);
        currentNote = currentNote + 1;
        if (currentNote === notes.length) {
          currentNote = 0;
        }
      }


//STATES

function finalScreen(){
    state = 'finalScreen';
    push();
    textSize(45);
    fill(20, 0, 170);
    textAlign(LEFT, CENTER);
    text(`here's what 
    you made`, width/2, height/2);
    ellipse(player.x, player.y, player.size);

    playSong();
    pop();
}   
  
function start(){
    state = 'start';
    push();
    textSize(45);
    fill(20, 0, 170);
    textAlign(CENTER, CENTER);
    text(`start`, width/2, height/2);
    pop();
}   


//OTHER FUNCTIONS

function screenChanges() {
    if (state === 'start') {
        start();
    }
    else if (state === 'finalScreen') {
        finalScreen();
    }
}

function keyPressed() {
    if (state === 'start') {
        state = 'finalScreen'
    }
    console.log(state)
}


function checkOverlap(){
    let d = dist(player.x, player.y, stranger.x, stranger.y);
    if (d < player.size/2 + stranger.size/2 && isOverlapping === false){
        isOverlapping = true;
        //synth.play(note, velocity, seconds from now, duration)
        let randomNote = random(notes)
        synth.play(randomNote, 1, 0, 1)
        console.log(randomNote)
    }
    else if (!d < player.size/2 + stranger.size/2){
        isOverlapping = false;
    }
}


function movePlayer() {
    player.x = mouseX
    player.y = mouseY
}

