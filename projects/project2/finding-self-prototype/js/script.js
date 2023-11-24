
"use strict";

let circles = []
let totalCircles = 5

let selves = []

let newCircleSize = 40

let strangersTouched = []

let synth;
let notes = ['F4', 'G4', 'A4', 'Bb4', 'C4', 'D4', 'E4'];
let interval;
let currentNote = 0

let state = 'start'

function setup() {
    createCanvas(600, 600);
    userStartAudio();

    synth = new p5.PolySynth();

   
    for (let i = 0; i < totalCircles; i++) {
        let x = random(0, width);
        let y = random(0, height); 
        

        let stranger = new Stranger(x, y);

        circles.push(stranger);
        console.log(circles.indexOf(stranger));
   
      }
    
    
}


function draw() {
    
    background(100, 100, 50)

    let self = new Self();

    screenChanges()

    
      

    self.display()

    
}


//OTHER FUNCTIONS 

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

function playRandomNote() {
    let randomNote = random(notes)
        synth.play(randomNote, 1, 0, 1)
        console.log(randomNote)
}

function screenChanges() {
    if (state === 'start') {
        start();
    }
    else if (state === 'finalScreen') {
        finalScreen();
    }
    else if (state === 'gameScreen'){
        gameScreen();
    }
}

function keyPressed() {
    if (state === 'start') {
        state = 'gameScreen'
    }
    else if (state === 'gameScreen') {
        state = 'finalScreen'
    }

    console.log(state)
}
    

//SCREENS

function finalScreen(){
    state = 'finalScreen';
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
    state = 'start';
    push();
    textSize(45);
    fill(20, 0, 170);
    textAlign(CENTER, CENTER);
    text(`start`, width/2, height/2);
    pop();
}   

function gameScreen() {
    for (let i = 0; i < totalCircles; i++) {
        
        let stranger = circles[i];
        stranger.display();
        
        let d = dist(self.x, self.y, stranger.x, stranger.y);
        if (d < self.size / 2 + stranger.size / 2 && !strangersTouched.includes(circles.indexOf(stranger))) {
            for (let i = 0; i < 1; i++) {
                self.newSelf(newCircleSize) 
                newCircleSize = newCircleSize + 10
                selves.push(self);
    
                playRandomNote();
                
                strangersTouched.push(circles.indexOf(stranger));
                console.log(strangersTouched)
    
        }
    }
    }
}





