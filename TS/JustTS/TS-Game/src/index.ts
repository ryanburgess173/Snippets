import Component from "./models/Component.js";
import GameArea from "./types/GameArea.js";

let myGamePiece: Component;

var myGameArea: GameArea = {
  canvas: document.createElement("canvas"),
  interval: 0,
  start: function (): void {
    this.canvas.width = 1600;
    this.canvas.height = 1200;
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
  myGamePiece = new Component(30, 30, "green", 10, 120, myGameArea);
}

function updateGameArea(): void {
  myGameArea.clear();
  myGamePiece.x += 1;
  myGamePiece.update();
}

// Auto-start the game when the script loads
console.log("Script loaded, starting game...");
startGame();
