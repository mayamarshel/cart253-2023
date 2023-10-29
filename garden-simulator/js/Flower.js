


class Flower {

    // this is basically a function but since inside of a class we don't need to label it
    // also functions inside of classes are called methods
    //CONSTRUCTOR method runs to initialize the features of a class when a NEW class is called 
    constructor() {
        //'this' refers to the object that will be created with the class
        //this.propertytobechanged = value/way to change property

  //CREATE FLOWER
        this.x = random(0, width);
        this.y = random(0, height);
        this.size = 50;
        this.stemLength = 75;
        this.stemThickness = 10;
        this.petalThickness = 10;
    

        this.stemColor = {
          r: 50,
          g: 150,
          b: 50
        };
        this.petalColor = {
          r: random(1, 255),
          g: random(1, 255),
          b: random(1, 255)
        };
        this.centreColor = {
          r: random(1, 255),
          g: random(1, 255),
          b: random(1, 255)
        };
      
      //sets alive variable so we can check if its dead later
      this.alive = true;

      }

  //creates instructions for how a flower should die
  //creates shrink rate and decreases the flower size by shrink rate
shrink() {
  let shrinkage = random(0, 0.1);
  this.petalThickness = this.petalThickness - shrinkage / 10;
  this.size = this.size - shrinkage

  //checks is flower radius is zero and sets alive to false
if (this.petalThickness <= 0 || this.size <= 0) {
  this.alive = false;
}

}

 
//DISPLAY FLOWER 
  display() {
    push();
    // Set the stroke weight for the petals and the stem
    strokeWeight(this.stemThickness);
    // Draw a line for the stem
    stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
    line(this.x, this.y, this.x, this.y + this.stemLength);
    // Draw a circle with a heavy outline for the flower
    strokeWeight(this.petalThickness);
    fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
    stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }

  
  //actually defines what to do when the mouse is pressed
  mousePressed(){
    //creates distance variable as radius of full flower top
    let d = dist(this.x, this.y, mouseX, mouseY);
    //if click is inside flower top increase stem length by 5 and decrease 
    // flower position by 5
    if (d < this.size/2 + this.petalThickness) {
      this.stemLength = this.stemLength + 5;

      this.y = this.y -5;
    }
  }
}
