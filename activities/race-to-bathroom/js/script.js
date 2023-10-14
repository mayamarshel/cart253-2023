/**
 * Finding Self
 * Maya Marshel
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 * 
 * 
 */


let op = {
    x: 35, 
    y: 200, 
    size: 50, 
    vx: 3,
    speed: 2
    
}

let player = {
    x: 35,
    y: 250,
    size: 50,
    speed: 20,
    vx: 0,
    R: 0, 
    G: 0,
    B: 0
}

let redColor = {
    R: 255,
    G: 0,
    B: 0
}

let greenColor = {
    R: 0,
    G: 255,
    B: 0
}

let blueColor = {
    R: 0,
    G: 0,
    B: 255
}

let finish = 600
let state = 'chooseCharacter'


function setup(){
    
    createCanvas(700, 500);

    stroke(255)
    line(200, 0, 200, 500)

   // textSize(50);

    
    
}


function draw() {
    background(0);
    randSpeed();



   // raceScreen();

    if (state === `chooseCharacter`){
        chooseCharacter();
    }
    else if (state === `raceScreen`){
        raceScreen();
    
}
}

    



// OTHER FUNCTIONS


// moves circle forward by player speed when mouse pressed
function mousePressed(){
    if(state === 'raceScreen')
        player.x = player.x + player.speed
        console.log('mouse was pressed')
}


// assigns random speed to Op circle
function randSpeed(){
    op.x = op.x + op.vx
    op.vx = random(0, op.speed)
}


// ends game when player or op reach finish line 
function finishLine(){
    if(player.x >= finish){
        console.log('you won')
        youWin();
        noLoop();
    }
    else if(op.x >= finish){
        console.log('they won')
        background(0)
        youLose();
        noLoop();
    }
}


if (state === 'chooseCharacter'){
    chooseCharacter()
}


function keyPressed(){
    //begins game with a mouse press
    if (state === `chooseCharacter`) {
        state = `raceScreen`
    }
}

function move(){
    op.x = op.x + op.vx
    player.x = player.x + player.vx 
}

// SCREENS 

function chooseCharacter(){
    push();
    textSize(45);
    fill(20, 0, 170);
    textAlign(CENTER, CENTER);
    text(`race to the bathroom`, width/2, height/2);
    pop();
}   

function youWin(){
    state = 'youWin'
    push();
    textSize(45);
    fill(20, 0, 170);
    textAlign(CENTER, CENTER);
    text(`you peed!`, width/2, height/2);
    pop();
}   

function youLose(){
    state = 'youLose'
    push();
    textSize(45);
    fill(20, 0, 170);
    textAlign(CENTER, CENTER);
    text(`you peed yourself!`, width/2, height/2);
    pop();
}   

function raceScreen() {
    state = 'raceScreen'
    fill(200, 200, 5);

    spawnCharacters();
    move()
    finishLine();

}



function spawnCharacters(){

    ellipse(player.x, player.y, player.size);
    ellipse(op.x, op.y, op.size);
}













