class Locust {

      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 15;
        this.sizeDown = 30;
        this.vx = 0;
        this.vy = 0;
        this.speed = 5;
        this.jitteriness = 0.1; 

        this.alive = true; 
      }

      //stops displaying crops and removes from wheatArray if they touch
      killCrops(wheat) {
        let d = dist(this.x, this.y, wheat.x, wheat.y);
        if (d < this.size / 2 + wheat.size / 2) {
          let indexPos = crops.wheatArray.indexOf(wheat)
          wheat.alive = false;
          crops.wheatArray.splice(wheat, indexPos)
          console.log(crops.wheatArray)
        }
      }

      //sets irregular movement 
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
    


      //ADD CODE to change the look 
      display() {
        push();
        
           // Wings
           fill(255, 255, 255);
           strokeWeight(5);
           stroke(255, 255, 255)
           line(this.x, this.y, this.x + 10, this.y - 10)
           line(this.x + 10, this.y - 10, this.x + 20, this.y + 10)

           line(this.x, this.y, this.x - 10, this.y - 10)
           line(this.x - 10, this.y - 10, this.x - 20, this.y + 10)
           pop();
    
           // Body
           push();
           fill(250, 250, 250);
           noStroke();
           ellipse(this.x, this.y, this.size, this.sizeDown);
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