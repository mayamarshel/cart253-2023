/**
 * Finding Love
 * Maya Marshel
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let theLover = {
    x: undefined, 
    y: 250,
    size: 100,
    vx: 0,
    vy: 0, 
    speed: 3
};

let another = {
    x: undefined, 
    y: 250,
    size: 100,
    vx: 0,
    vy: 0, 
    speed: 3
};

let state = `title` //starts simulation on title

function setup() {
    createCanvas(500, 500);

    //position lovers and generate random velocities 
    theLover.x = width/3;
    another.x = 2 * width / 3;

    theLover.vx = random(-theLover.speed, theLover.speed);
    theLover.vy = random(-theLover.speed, theLover.speed);
    another.vx = random(-another.speed, another.speed);
    another.vy = random(-another.speed, another.speed);
}


function draw() {
    background(0);

    if (state === `title`){
        title();
    }
    else if (state === `simulation`){
        simulation();
    }
    else if (state === `love`) {
        loveFound();
    }
    else if (state === `sadness`) {
        sadness();
    }


}

function title() {
    // push and pop keep fill color only to text
    push();
    textSize(55);
    fill(90, 0, 70);
    textAlign(CENTER, CENTER);
    text(`LOVE ACTUALLY`, width/2, height/2);
    pop();
}

function loveFound(){
    push();
    textSize(45);
    fill(130, 0, 80);
    textAlign(CENTER, CENTER);
    text(`You made it. Now keep it.`, width/2, height/2);
    pop();
}     

function sadness(){
    push();
    textSize(45);
    fill(20, 0, 170);
    textAlign(CENTER, CENTER);
    text(`It will find you in the end.`, width/2, height/2);
    pop();
}     


function simulation(){
    move();
    checkOffScreen();
    checkOverlap();
    spawnLovers();

}

function move(){
        // set random velocities to movement
        theLover.x = theLover.x + theLover.vx;
        theLover.y = theLover.y + theLover.vy;
    
        another.x = another.x + another.vx;
        another.y = another.y + another.vy;
}

function checkOffScreen(){
        //checks if gone off screen
        if (theLover.x < 0 || theLover.x > width || theLover.y < 0 || theLover.y > height || another.x < 0 || another.x > width || another.y < 0 || another.y > height) {
            state = `sadness`;
        }
}

function checkOverlap(){
      //checks if circles touched
      let d = dist(theLover.x, theLover.y, another.x, another.y);
      if (d < theLover.size/2 + another.size/2){
          state = `love`;
      }
}

function spawnLovers(){
        ellipse(theLover.x, theLover.y, theLover.size);
        ellipse(another.x, another.y, another.size);
}

function mousePressed(){
    if (state === `title`) {
        state = `simulation`
    }
}



