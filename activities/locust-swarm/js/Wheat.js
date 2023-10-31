class Wheat {

    //sets inital variables for wheat stalks
    constructor(x, y, size, stemLength, petalColor) {
        this.x = random(0, width);
        this.y = random(0, height);
        this.stalkLength = 75;
        this.stalkThickness = 10;

        this.stalkColor = {
            r: 50,
            g: 150,
            b: 50
          };


        this.alive = true;
    
    }       


    shrink() {
        let shrinkage = random(0, 0.5);
        this.stalkThickness = this.stalkThickness - shrinkage / 10;
        this.stalkLength = this.stalkLength - shrinkage;
        
      
      
        //turn stalk brown and stop skrinking if it gets to the minimum sixe
        //ADD CODE to make numbers into stalk minimum
      if (this.stalkLength <= 10) {
        this.alive = false;
        this.stalkColor = {
            r: 100,
            g: 100,
            b: 20}
        shrinkage = 0
      }
      
      }


//DISPLAY WHEAT
  display() {
    push();
    strokeWeight(this.stalkThickness);
    stroke(this.stalkColor.r, this.stalkColor.g, this.stalkColor.b);
    line(this.x, this.y, this.x, this.y + this.stalkLength);
    pop();
  }
}

