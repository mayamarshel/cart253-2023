class Stranger {

    constructor(x, y) {
        //sets initial player controls 
        this.x = x;
        this.y = y;
        this.size = 40;
       
    
      }

      display(stranger, x, y) {
        noStroke()
        ellipse(this.x, this.y, this.size);

      }
    }