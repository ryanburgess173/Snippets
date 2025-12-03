import Component from "./models/Component.js";
let myGamePiece;
let mySecondGamePiece;
var myGameArea = {
    canvas: document.createElement("canvas"),
    interval: 0,
    start: function () {
        this.canvas.width = 1600;
        this.canvas.height = 1100;
        this.canvas.style.border = "1px solid black";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0] || null);
        this.interval = setInterval(updateGameArea, 20);
        console.log("Canvas created and inserted:", this.canvas);
    },
    clear: function () {
        if (!this.context) {
            throw new Error("this.context doesn't exist inside myGameArea");
        }
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
};
function startGame() {
    console.log("startGame called");
    myGameArea.start();
    myGamePiece = new Component(30, 30, "green", 10, 1050, myGameArea);
    mySecondGamePiece = new Component(10, 50, "silver", 1100, 1070, myGameArea);
    document
        .getElementById("up")
        ?.addEventListener("click", () => myGamePiece.moveUp());
    document
        .getElementById("down")
        ?.addEventListener("click", () => myGamePiece.moveDown());
    document
        .getElementById("left")
        ?.addEventListener("click", () => myGamePiece.moveLeft());
    document
        .getElementById("right")
        ?.addEventListener("click", () => myGamePiece.moveRight());
}
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
    mySecondGamePiece.y -= 3;
    mySecondGamePiece.update();
}
// Auto-start the game when the script loads
console.log("Script loaded, starting game...");
startGame();
//# sourceMappingURL=index.js.map