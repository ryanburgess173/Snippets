var EventEmitter = require("events");
var emitter = new EventEmitter();
// Always handle 'error' events
emitter.on("error", function (err) {
    console.error("An error occurred:", err.message);
});
// This will trigger the error handler
emitter.emit("error", new Error("Something went wrong"));
