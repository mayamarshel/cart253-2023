class Stranger {

    constructor(x, y, r, g, b) {
        //sets initial player controls 
        this.x = x;
        this.y = y;
        this.size = 60;
        this.r = r,
        this.g = g, 
        this.b = b
       

      
    
      }

      display(r, g, b) {
        noStroke()
        ellipse(this.x, this.y, this.size);

      }
    }