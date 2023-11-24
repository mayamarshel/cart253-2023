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
      }
    

    display(){
            push();
            fill(this.r, this.g, this.b)
            ellipse(this.x, this.y, this.size)
            pop();
        
    }

}