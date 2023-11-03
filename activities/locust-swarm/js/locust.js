class Locust {

      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 40;
        this.vx = 0;
        this.vy = 0;
        this.speed = 5;
        this.jitteriness = 0.1; 

        this.alive = true; 
      }


      killCrops(wheat) {
        let d = dist(this.x, this.y, wheat.x, wheat.y);
        if (d < this.size / 2 + wheat.size / 2) {
          wheat.alive = false;
        }
      }

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