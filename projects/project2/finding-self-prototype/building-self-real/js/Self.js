class Self {
    
    constructor(x, y, r, g, b) {
        this.x = x
        this.y = y
        this.size = 10
        this.r = r
        this.g = g
        this.b = b
    }

display() {
    push();
    fill(255)
    ellipse(this.x, this.y, this.size)
    pop();
    
}
}