/**
 * Finding Self
 * Maya Marshel
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 * 
 * 
 * just finished making loop to generate 20 circles at a time
 * need to figure out how to color background without it going in front of the circles
 * need to add random   automated movement to the circes
 * 
 */


let player = {
    x: 100,
    y: 100, 
    size: 50, 
    color: 0, 
    vx: 4,
    vy: 4
};

let stranger = {
    x: 250,
    y: 250,
    size: 100, 
    color: 255,
    vx: 2,
    vy: 2, 
    speed: 2,
    number: 0,
    total: 20
}

let circleNum = stranger.number

function preload(){}



function setup() {
    createCanvas(windowWidth, windowHeight);

    player.x = width/2

}


function draw() {
    background(0);
    
    move();
    checkOverlap();
    uncertainMove(); 
    
  //  while (circleNum < stranger.total){
   //     randomCircle();
   //     circleNum = circleNum + 1
   //     console.log(circleNum);
    
    }

    ellipse(mouseX, mouseY, player.size);
    ellipse(stranger.x, stranger.y, stranger.size);
    



}






//OTHER FUNCTIONS

function checkOverlap(){
    //checks if circles touched
    let d = dist(player.x, player.y, stranger.x, stranger.y);}
    if (d < player.size/2 + stranger.size/2){
        noLoop();
    }
        //ADD CODE to add circle of specified color to Player


// uses a random value for velocity and sets probibility of a change of randomness to 4%
function uncertainMove(){
    let change = random(0, 1); 
    if (change < 0.04){
        stranger.vx = random(-stranger.speed, stranger.speed);
        stranger.vy = random(-stranger.speed, stranger.speed);
    }
}




// make circles disapear if off screen -- debugging
function checkOffScreen(){
    //checks if gone off screen
    if (another.x < 0 || another.x > width || another.y < 0 || another.y > height) {
        state = `sadness`;}
    else if (theLover.x < 0 || theLover.x > width || theLover.y < 0 || theLover.y > height){
        state = `confusion`;}
    }


    function move(){
        // set random velocities to movement and set mouse to movement for player
        player.x = mouseX + player.vx;
        player.y = mouseY + player.vy;
    
        stranger.x = stranger.x + stranger.vx;
        stranger.y = stranger.y + stranger.vy;
}




function randomCircle(){
    //maybe change 0 to stranger lowest position
    stranger.x = random(0, width);
    stranger.y = random(0, height);
    stranger.size = random(10, stranger.size);
}

// ADD CODE constrain for the sides of the canvas --
// stranger.x = constrain(stranger.x, 0, width)


