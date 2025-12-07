class Component {
    width;
    height;
    color;
    x;
    y;
    ctx;
    speedX;
    speedY;
    constructor(width, height, color, x, y, myGameArea) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        if (!myGameArea.context) {
            throw new Error("Canvas context is not available");
        }
        this.ctx = myGameArea.context;
        this.update();
    }
    update() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    stopMove() {
        console.log("stopMove() called");
        this.speedX = 0;
        this.speedY = 0;
        console.log(`Speed X: ${this.speedX}`);
        console.log(`Speed Y: ${this.speedY}`);
    }
    moveUp() {
        console.log("moveUp() called");
        this.speedY -= 1;
        console.log(`Speed Y: ${this.speedY}`);
    }
    moveDown() {
        console.log("moveDown() called");
        this.speedY += 1;
    }
    moveLeft() {
        console.log("moveLeft() called");
        this.speedX -= 1;
        console.log(`Speed X: ${this.speedX}`);
    }
    moveRight() {
        console.log("moveRight() called");
        this.speedX += 1;
    }
}
export default Component;
//# sourceMappingURL=Component.js.map