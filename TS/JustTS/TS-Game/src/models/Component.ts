import GameArea from "../types/GameArea.js";

class Component {
  width: number;
  height: number;
  color: string;
  x: number;
  y: number;
  ctx: CanvasRenderingContext2D;

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
}

export default Component;
