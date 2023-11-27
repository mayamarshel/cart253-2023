class Self {
    
    constructor(x, y) {
        this.x = x
        this.y = y
        this.size = 10
    }

display() {
    push();
    fill(255)
    ellipse(this.x, this.y, this.size)
    pop();
    
}
}