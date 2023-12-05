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
        this.chance = 0.1;
        this.fastest = 5;
        this.slowest = 2;
      }
    

    display(){
            push();
            fill(this.r, this.g, this.b)
            ellipse(this.x, this.y, this.size)
            pop();
        
    }

    move() {
      //changed the velocity with a 1 in 10 change 
      let r = random(0, 4);
      if (r < this.jitteriness) {
        this.vx = random(-this.speed, this.speed);
        this.vy = random(-this.speed, this.speed);
      }
  
      //add random velocity to movement patterns 
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
    }  
}