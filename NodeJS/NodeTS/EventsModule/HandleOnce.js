var EventEmitter = require("events");
var emitter = new EventEmitter();
// This listener will be called only once
emitter.once("connection", function () {
    console.log("First connection established");
});
emitter.emit("connection"); // This will trigger the listener
emitter.emit("connection"); // This won't trigger the listener again
