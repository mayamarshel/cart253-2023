class Wheat {

    //sets inital variables for wheat stalks and sets state to alive
    constructor() {

        this.x = random(0, width);
        this.y = random(0, height);
        this.stalkLength = 75;
        this.stalkThickness = 10;
        this.size = 20;

        this.stalkColor = {
            r: 240,
            g: 190,
            b: 0
          };


        this.alive = true;
    
    }       



//DISPLAY WHEAT
  display() {
    push();
    strokeWeight(this.stalkThickness);
    stroke(this.stalkColor.r, this.stalkColor.g, this.stalkColor.b);
    line(this.x, this.y, this.x, this.y + this.stalkLength);
    pop();

    //wheat grains on top
    push();
    noStroke();
    fill(this.stalkColor.r, this.stalkColor.g, this.stalkColor.b);
    ellipse(this.x, this.y, this.size)
    pop();

    push();
    noStroke();
    fill(this.stalkColor.r, this.stalkColor.g, this.stalkColor.b);
    ellipse(this.x, this.y - 10, this.size - 5)
    pop();

    push();
    noStroke();
    fill(this.stalkColor.r, this.stalkColor.g, this.stalkColor.b);
    ellipse(this.x, this.y - 20, this.size - 7)
    pop();
  }

}

