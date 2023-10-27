class Flower {

    // this is basically a function but since inside of a class we don't need to label it
    // also functions inside of classes are called methods
    constructor() {
        //'this' refers to the object that will be created with the class
        //this.propertytobechanged = value/way to change property
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
          r: 200,
          g: 50,
          b: 50
        };
        this.centreColor = {
          r: 50,
          g: 0,
          b: 0
        };
      }
}