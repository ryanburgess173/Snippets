import GameArea from "../types/GameArea.js";
declare class Component {
    width: number;
    height: number;
    color: string;
    x: number;
    y: number;
    ctx: CanvasRenderingContext2D;
    speedX: number;
    speedY: number;
    constructor(width: number, height: number, color: string, x: number, y: number, myGameArea: GameArea);
    update(): void;
    newPos(): void;
    stopMove(): void;
    moveUp(): void;
    moveDown(): void;
    moveLeft(): void;
    moveRight(): void;
}
export default Component;
//# sourceMappingURL=Component.d.ts.map