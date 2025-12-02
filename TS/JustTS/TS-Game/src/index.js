var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.canvas.style.border = "1px solid black";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0] || null);
        console.log("Canvas created and inserted:", this.canvas);
    }
};
function startGame() {
    console.log("startGame called");
    myGameArea.start();
}
// Auto-start the game when the script loads
console.log("Script loaded, starting game...");
startGame();
export {};
//# sourceMappingURL=index.js.map