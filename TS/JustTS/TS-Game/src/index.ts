import Component from "./models/Component.js";
import GameArea from "./types/GameArea.js";

let myGamePiece: Component;
let mySecondGamePiece: Component;

var myGameArea: GameArea = {
  canvas: document.createElement("canvas"),
  interval: 0,
  start: function (): void {
    this.canvas.width = 800;
    this.canvas.height = 500;
    this.canvas.style.border = "1px solid black";
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(
      this.canvas,
      document.body.childNodes[0] || null
    );
    this.interval = setInterval(updateGameArea, 20);
    console.log("Canvas created and inserted:", this.canvas);
  },
  clear: function (): void {
    if (!this.context) {
      throw new Error("this.context doesn't exist inside myGameArea");
    }
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function startGame(): void {
  console.log("startGame called");

  myGameArea.start();

  myGamePiece = new Component(30, 30, "green", 10, 450, myGameArea);
  mySecondGamePiece = new Component(10, 50, "silver", 300, 450, myGameArea);

  document
    .getElementById("up")
    ?.addEventListener("keydown", () => myGamePiece.moveUp());
  document
    .getElementById("up")
    ?.addEventListener("keyup", () => myGamePiece.stopMove());
  document
    .getElementById("down")
    ?.addEventListener("keydown", () => myGamePiece.moveDown());
  document
    .getElementById("down")
    ?.addEventListener("keyup", () => myGamePiece.stopMove());
  document
    .getElementById("left")
    ?.addEventListener("keydown", () => myGamePiece.moveLeft());
  document
    .getElementById("left")
    ?.addEventListener("keyup", () => myGamePiece.stopMove());
  document
    .getElementById("right")
    ?.addEventListener("keydown", () => myGamePiece.moveRight());
  document
    .getElementById("right")
    ?.addEventListener("keyup", () => myGamePiece.stopMove());
}

function updateGameArea(): void {
  myGameArea.clear();

  myGamePiece.newPos();
  myGamePiece.update();

  mySecondGamePiece.y -= 3;
  mySecondGamePiece.update();
}

// Auto-start the game when the script loads
console.log("Script loaded, starting game...");
startGame();

export {};
