/**
 * Dodging Covid
 * Maya Marshel
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

let covid19 = {
    x: 0, 
    y: 250, 
    size: 100, 
    vx: 0, 
    vy: 0, 
    speed: 5,
    fill: {
        r: 255, 
        g: 0, 
        b: 0
    }
};

let player = {
    x: 250, 
    y: 250, 
    size: 100, 
    fill: 255
};


function setup() {
// creating canvas and setting spawning conditions for objects
    createCanvas(windowWidth, windowHeight);

    covid19.y = random(0, height);
    covid19.vx = covid19.speed; 
}


function draw() {
    background(0);

// adds velocity to movement (don't really need it for y but its a good thing to have)
    covid19.x = covid19.x + covid19.vx;
    covid19.y = covid19.y + covid19.vy;

// resets position after reaching right side of screen
    if (covid19.x > width) {
        covid19.x = 0;
        covid19.y = random(0, height);
    }

    player.x = mouseX;
    player.y = mouseY;

// create local distance variable, don't need it later on
    let distance = dist(player.x, player.y, covid19.x, covid19.y);
    if (distance < player.size/2 + covid19.size/2) {
        noLoop();
    }


// fills covid bubble with predetermined rgb using an object inside of an object
    fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
    ellipse(covid19.x, covid19.y, covid19.size);

    fill(player.fill);
    ellipse(player.x, player.y, player.size);
}