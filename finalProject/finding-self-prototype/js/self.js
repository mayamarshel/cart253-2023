class Self {
    constructor(size) {
        this.x = mouseX;
        this.y = mouseY;
        this.size = 40;
        this.sizeIncrease = 20;
    
        this.color = {
            r: 40,
            g: 0,
            b: 0
          };

        
        }
        




      display() {
        push()
        fill(this.color.r, this.color.g, this.color.b);
        ellipse(this.x, this.y, this.size);
        pop()
      }

      infectColor() {
        let stranger = new Stranger()
        let d = dist(this.x, this.y, stranger.x, stranger.y);
        if (d < this.size / 2 + stranger.size / 2) {
            ellipse(this.x, this.y, this.size + this.sizeIncrease)
            this.size = this.size + this.sizeIncrease
        }
    }


    newSelf(size) {
        push()
        ellipse(this.x, this.y, size + 100);
        pop()
    }


    displayAllCircles() {
        //display array 
    }
    }

    

    