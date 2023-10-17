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
    size: 50,
    R: 255,
    G: 0,
    B: 0,
    x: 100,
    y: 400
}

let greenColor = {
    size: 50,
    R: 0,
    G: 255,
    B: 0,
    x: 350,
    y: 400
}

let blueColor = {
    size: 50,
    R: 0,
    G: 0,
    B: 255,
    x: 600,
    y: 400
}

let finish = 600
let state = 'title'
let startGame = false
let toiletPic;


function preload(){
    toiletPic = loadImage("assets/images/toiletpicture1.png");
}

function setup(){
    
    createCanvas(700, 500);

    stroke(255)
    line(200, 0, 200, 500)

    
}




function draw() {
    background(0);
    randSpeed();
    
    
    if (state === `spawnChoices`){
        spawnChoices();
    }
        else if (state === `raceScreen`){
            raceScreen();}
        else if (state === 'title') {
            title();
        }
        
        console.log(player.R, player.G, player.B)
        
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


// ends game when player or op reach finish line and displays finished statements
function finishLine(){
    if(player.x >= finish){
        console.log('you won')
        background(0)
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

//makes choose character label into actually choose character screen 
if (state === 'title'){
    title()
}


function keyPressed(){
    //begins game with a key press
    if (state === `title`) {
        state = `spawnChoices`
    }
    else if (state === 'spawnChoices'){
        state = 'raceScreen'
    }
}

//declares movement for player and op
function move(){
    if (startGame === true){
     op.x = op.x + op.vx
     player.x = player.x + player.vx }
}


function spawnCharacters(){
    //spawns characters in 

    fill(player.R, player.G, player.B);
    ellipse(player.x, player.y, player.size);

    fill(255);
    ellipse(op.x, op.y, op.size);
}








// SCREENS 

function title(){
    state = 'title'
    
    push();
    textSize(55);
    fill(20, 0, 170);
    textAlign(CENTER, CENTER);
    text(`race to the bathroom`, 350, 250);
    pop();

    push();
    textSize(30);
    fill(20, 0, 170);
    textAlign(CENTER, CENTER);
    text(`press S to choose character`, 350, 350);
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
    //screen for actual gameplay
    state = 'raceScreen'

    image(toiletPic, 100, 100)

    spawnCharacters();
    move()
    finishLine();}



function spawnChoices(){
    state = 'spawnChoices'
    
    textSize(30);
    fill(20, 0, 170);
    textAlign(CENTER, CENTER);
//ADD CODE make game start when player clicks
//ADD COMMENT to tell player to click space to start
    text('choose your character- game will begin immediately', width/2, height/2);

//creates red green and blue character examples  
//RED
    fill(redColor.R, redColor.G, redColor.B)
    ellipse(redColor.x, redColor.y, redColor.size)
    
    fill(255)
    text('1', redColor.x, redColor.y)
    textSize(30)

//GREEN
    fill(greenColor.R, greenColor.G, greenColor.B)
    ellipse(greenColor.x, greenColor.y, greenColor.size)
    
    fill(255)
    text('2', greenColor.x, greenColor.y)
    textSize(30)

//BLUE
    fill(blueColor.R, blueColor.G, blueColor.B)
    ellipse(blueColor.x, blueColor.y, blueColor.size)
    
    fill(255)
    text('3', blueColor.x, blueColor.y)
    textSize(30)
}



function keyPressed(){
    if(keyCode === 49){
        player.R = 255
        player.G = 0
        player.B = 0
//ADD CODE to signal that a choice has been made
    }
    else if(keyCode === 50){
        player.R = 0
        player.G = 255
        player.B = 0
    }
    else if(keyCode === 51){
        player.R = 0
        player.G = 0
        player.B = 255
    }
//starts game from title screen by pressing S
    else if (state === `title` && keyCode === 83) {
        state = `spawnChoices`
    }
//starts game from pick character screen by pressing space
    else if (state === 'spawnChoices' && keyCode === 32){
        state = 'raceScreen'
    }

}









