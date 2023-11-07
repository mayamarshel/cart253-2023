
"use strict";

let circles = []
let totalCircles = 5

let selves = []


function setup() {
    createCanvas(600, 600);

   
    for (let i = 0; i < totalCircles; i++) {
        let x = random(0, width);
        let y = random(0, height); 
        

        let stranger = new Stranger(x, y);

        circles.push(stranger);
        console.log(circles);
        console.log(self.touching)
      }
    
    
}


function draw() {
    
    background(100, 100, 50)

    let self = new Self();
    
for (let i = 0; i < totalCircles; i++) {
    push()

    let stranger = circles[i];
    stranger.display();
  

    let d = dist(self.x, self.y, stranger.x, stranger.y);
    if (d < self.size / 2 + stranger.size / 2) {
        self.newSelf()
       
       

    }
}
       

    self.display()


    
    
}
    





