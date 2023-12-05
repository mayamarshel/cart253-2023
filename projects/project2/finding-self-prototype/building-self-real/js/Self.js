class Self {
    
    constructor(x, y, r, g, b) {
        this.x = x
        this.y = y
        this.size = 10
        this.r = []
        this.g = []
        this.b = []
        this.sizeIncrease = 10;
    }

    //draws the actual self
display() {
    push();
    fill(255)
    ellipse(this.x, this.y, this.size)
    pop();
    
}


}