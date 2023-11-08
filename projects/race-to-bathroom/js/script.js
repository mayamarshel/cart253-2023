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
    
};

let player = {
    x: 35,
    y: 250,
    size: 50,
    speed: 20,
    vx: 0,
    R: 0, 
    G: 0,
    B: 0
};

let redColor = {
    size: 50,
    R: 255,
    G: 0,
    B: 0,
    x: 100,
    y: 400
};

let greenColor = {
    size: 50,
    R: 0,
    G: 255,
    B: 0,
    x: 350,
    y: 400
};

let blueColor = {
    size: 50,
    R: 0,
    G: 0,
    B: 255,
    x: 600,
    y: 400
};

let finish = 600;
let state = 'title';
let toiletPic;
let startKey = false;


function preload(){
   toiletPic = loadImage("assets/images/toilet5.png");
};

function setup(){
    
    createCanvas(700, 500);

    stroke(255);

    
};




function draw() {
    background(0);

        
        console.log(startKey)
    
    screenChanges();
    selectVerification();
};
    
    





// OTHER FUNCTIONS


// tells computer the name of the screens being shown
function screenChanges(){
if (state === `spawnChoices`){
    spawnChoices();
}
    else if (state === `raceScreen`){
        raceScreen();}
    else if (state === 'title') {
        title();
    }
};

// assigns random speed to Op circle
function randSpeed(){
    
    op.x = op.x + op.vx;
    op.vx = random(0, op.speed);
};


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
    };
};


//declares movement for player and op
function move(){
     op.x = op.x + op.vx;
     player.x = player.x + player.vx ;
};



//spawns characters in 
function spawnCharacters(){

    fill(player.R, player.G, player.B);
    ellipse(player.x, player.y, player.size);

    fill(255);
    ellipse(op.x, op.y, op.size);
};


//sets stroke to color of choice to show that your choice was logged
function selectVerification(){
if(player.R === 255 && player.G === 0 && player.B === 0 && state === 'spawnChoices'){
    stroke(255, 0, 0)}
else if(player.R === 0 && player.B === 255 && player.G === 0){
    stroke(0, 0, 255)}
else if(player.R === 0 && player.B === 0 && player.G === 255){
    stroke(0, 255, 0)
}
};
    

// sets speed of player when game actually begins (needed to debug because player could move the character without the race starting)
function mousePressed(){
    if(state === 'raceScreen' && startKey === true)
        player.x = player.x + player.speed;
        console.log('mouse was pressed');
};

// starts game functions
function startGame(){
        move();
        finishLine();
        randSpeed();
};


function spawnChoices(){
    state = 'spawnChoices';
    
    textSize(30);
    fill(20, 0, 170);
    textAlign(CENTER, CENTER);
    text('choose your character- press space to start', width/2, height/2);

//creates red green and blue character examples  
//RED
    fill(redColor.R, redColor.G, redColor.B);
    ellipse(redColor.x, redColor.y, redColor.size);
    
    fill(255);
    text('1', redColor.x, redColor.y);
    textSize(30);

//GREEN
    fill(greenColor.R, greenColor.G, greenColor.B);
    ellipse(greenColor.x, greenColor.y, greenColor.size);
    
    fill(255);
    text('2', greenColor.x, greenColor.y);
    textSize(30);

//BLUE
    fill(blueColor.R, blueColor.G, blueColor.B);
    ellipse(blueColor.x, blueColor.y, blueColor.size);
    
    fill(255);
    text('3', blueColor.x, blueColor.y);
    textSize(30);
}



//sets player color based on key selection (1, 2, or 3)
function keyPressed(){
//key 1
    if(keyCode === 49){
        player.R = 255
        player.G = 0
        player.B = 0
    }
//key 2
    else if(keyCode === 50){
        player.R = 0
        player.G = 255
        player.B = 0
    }
//key 3
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
        state = 'raceScreen'}
//starts game when D key is pressed
    else if (state === 'raceScreen' && keyCode === 68){
        startKey = true
    };
};






// SCREENS 

function title(){
    state = 'title';
    
    push();
    textSize(55);
    fill(20, 0, 170);
    textAlign(CENTER, CENTER);
    text(`race your roomates 
    to the bathroom`, 350, 250);
    pop();

    push();
    textSize(30);
    fill(20, 0, 170);
    textAlign(CENTER, CENTER);
    text(`press S to choose character`, 350, 350);
    pop();

}   

function youWin(){
    state = 'youWin';
    push();
    textSize(45);
    fill(20, 0, 170);
    textAlign(CENTER, CENTER);
    text(`you peed!`, width/2, height/2);
    pop();
}   

function youLose(){
    state = 'youLose';
    push();
    textSize(45);
    fill(20, 0, 170);
    textAlign(CENTER, CENTER);
    text(`you peed yourself!`, width/2, height/2);
    pop();
}   


function raceScreen() {
    //screen for actual gameplay
    state = 'raceScreen';
    push();
    textSize(25);
    fill(20, 0, 170);
    textAlign(LEFT, TOP);
    text(`click mouse to move-- press D to begin race`, 20, 20);
    pop();

    line(finish, 0, finish, 700);

    image(toiletPic, 450, 100);

    spawnCharacters();

    if(startKey === true){
        startGame();
    }
    
}
