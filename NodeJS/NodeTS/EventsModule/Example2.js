var EventEmitter = require("events");
var myEmitter = new EventEmitter();
myEmitter.on("greet", function () {
    console.log("Hello there");
});
myEmitter.emit("greet");
