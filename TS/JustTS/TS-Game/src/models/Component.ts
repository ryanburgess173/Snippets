import GameArea from "../types/GameArea.js";

class Component {
  width: number;
  height: number;
  color: string;
  x: number;
  y: number;
  ctx: CanvasRenderingContext2D;
  speedX: number;
  speedY: number;

  constructor(
    width: number,
    height: number,
    color: string,
    x: number,
    y: number,
    myGameArea: GameArea
  ) {
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

  update(): void {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos(): void {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  moveUp(): void {
    console.log("moveUp() called");
    this.speedY -= 1;
    console.log(`Speed Y: ${this.speedY}`);
  }

  moveDown(): void {
    console.log("moveDown() called");
    this.speedY += 1;
  }

  moveLeft(): void {
    console.log("moveLeft() called");
    this.speedX -= 1;
    console.log(`Speed X: ${this.speedX}`);
  }

  moveRight(): void {
    console.log("moveRight() called");
    this.speedX += 1;
  }
}

export default Component;
