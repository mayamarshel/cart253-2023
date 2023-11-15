
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


let strangers = []
let totalStrangers = 5

let isOverlapping = false


function preload() {
    //preload heaven sound
    
    
    
}



function setup() {
    createCanvas(600, 600);
    userStartAudio();
    
    synth = new p5.PolySynth();
    
    
    for (let i = 0; i < totalStrangers; i++) {
        let x = random(0, width);
        let y = random(0, height); 
        
        let stranger = new Stranger(x, y);


        strangers.push(stranger);
        console.log(strangers);

   
      }

}



function draw() {
    background(0);

    movePlayer();
    screenChanges();
    checkOverlap();

    
    
        

    
}



//MUSIC FUNCTIONS

function playSong() {
    if (interval === undefined) {
        
        interval = setInterval(playRandomNote, 500)}
        else {
            clearInterval(interval)
            interval = undefined;
        }
    }
  
    function playRandomNote() {
        let note = random(notes);
        // Play it
        synth.play(note, 1, 0, 1);
      }
      


//STATES

function finalScreen(){
    push();
    textSize(45);
    fill(20, 0, 170);
    textAlign(LEFT, CENTER);
    text(`here's what 
    you made`, width/2, height/2);
    
    playSong();
    pop();
}   
  
function start(){
    push();
    textSize(45);
    fill(20, 0, 170);
    textAlign(CENTER, CENTER);
    text(`start`, width/2, height/2);

    ellipse(player.x, player.y, player.size);
    for (let i = 0; i < totalStrangers; i++) {
        let stranger = strangers[i];
        stranger.display(stranger)
      }

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
for (let i = 0; i < totalStrangers; i++) {  
    let d = dist(player.x, player.y, strangers[i].x, strangers[i].y);
    if (d < player.size/2 + strangers[i].size/2 && isOverlapping === false){
        isOverlapping = true;
        //synth.play(note, velocity, seconds from now, duration)
        let randomNote = random(notes)
        synth.play(randomNote, 1, 0, 1)
        console.log(randomNote)
    }
    else if (d > player.size/2 + strangers[i].size/2){
        isOverlapping = false;
    }
}
}


function movePlayer() {
    player.x = mouseX
    player.y = mouseY
}

