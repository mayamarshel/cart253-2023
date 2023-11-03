class Bee {

constructor(x, y) {
    this.x = mouseX;
    this.y = mouseY;
    this.size = 40;

    this.alive = true; 

  }


  killLocust(locust) {
    let d = dist(this.x, this.y, locust.x, locust.y);
    if (d < this.size / 2 + locust.size / 2) {
      locust.alive = false;
      console.log('they overlap')
    }
  }

  display() {
    push();
    
       // Wings
       fill(255, 255, 255);
       noStroke();
       ellipse(this.x - this.size / 2, this.y, this.size / 2);
       ellipse(this.x + this.size / 2, this.y, this.size / 2);
       pop();

       // Body
       push();
       fill(225, 225, 50);
       noStroke();
       ellipse(this.x, this.y, this.size);
       pop();
   
       // Eyes
       push();
       fill(0, 0, 0);
       noStroke();
       ellipse(this.x - this.size / 10, this.y, this.size / 10);
       ellipse(this.x + this.size / 10, this.y, this.size / 10);

    pop();
     }
}