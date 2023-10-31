class Locus {

// sets inital values for all the called variables
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = 40;
      this.minSize = 10; //size to kill bee at
      this.maxSize = 40; 
      this.vx = 0;
      this.vy = 0;
      this.speed = 5;
      this.growRate = 0.1; //how much bee grows if pollinates
      this.shrinkRate = 0.05; 
      this.jitteriness = 0.1; 
      this.alive = true; 
    }
  


// sets the rate of bee death
    shrink() {

      this.size = this.size - this.shrinkRate;
    
      if (this.size < this.minSize) {
   
        this.alive = false;
        console.log('flower is dead')
      }
    }



//just checks if the bee should pollinate due to distance to flower
    tryToPollinate(flower) {
      let d = dist(this.x, this.y, flower.x, flower.y);
      if (d < this.size / 2 + flower.size / 2) {
        //calls the grow method from inside this class
        this.grow();
        flower.pollinate();
      }
    }


//actually grows the bee if tryToPollinate is called
//keeps withing max-min size
    grow() {
      this.size = this.size + this.growRate;
      this.size = constrain(this.size, 0, this.maxSize);
    }

    
//sets random, bee-like movement
  move() {
    //changed the velocity with a 1 in 10 change 
    let r = random(0, 1);
    if (r < this.jitteriness) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }

    //add random velocity to movement patterns 
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    //keeps bee inside screen 
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

 
  // draws the bee :)
  display() {
    push();
    
       // Wings
       fill(255, 255, 255);
       noStroke();
       ellipse(this.x - this.size / 2, this.y, this.size / 2);
       ellipse(this.x + this.size / 2, this.y, this.size / 2);
       pop();

       // Body
       push();
       fill(225, 225, 50);
       noStroke();
       ellipse(this.x, this.y, this.size);
       pop();
   
       // Eyes
       push();
       fill(0, 0, 0);
       noStroke();
       ellipse(this.x - this.size / 10, this.y, this.size / 10);
       ellipse(this.x + this.size / 10, this.y, this.size / 10);

    pop();
     }
   }
    

