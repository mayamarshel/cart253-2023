class Stranger {

    constructor(x, y, vx, vy, r, g, b) {
        this.x = x;
        this.y = y;
        this.size = 60;
        this.vx = vx;
        this.vy = vy;
        this.r = r;
        this.g = g;
        this.b = b;
        this.jitteriness = 0.1;
        this.speed = 1.5;
      }
    

    display(){
            push();
            fill(this.r, this.g, this.b)
            ellipse(this.x, this.y, this.size)
            pop();
        
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
  
}