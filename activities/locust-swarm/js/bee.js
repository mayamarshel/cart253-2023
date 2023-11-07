class Bee {

constructor(x, y) {
    //sets initial player controls 
    this.x = mouseX;
    this.y = mouseY;
    this.size = 40;

    this.alive = true; 

  }

  // turns locust to not alive and takes locust out of array if they touch
  killLocust(locust) {
    let d = dist(this.x, this.y, locust.x, locust.y);
    if (d < this.size / 2 + locust.size / 2) {
      let indexPos = crops.locusts.indexOf(locust)
      locust.alive = false;
      crops.locusts.splice(locust, indexPos)
      console.log(crops.locusts)
      
  }
  }

  //draws locust
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
       fill(225, 0, 0);
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