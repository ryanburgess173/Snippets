var EventEmitter = require("events");
var emitter = new EventEmitter();
// emit event with args
emitter.on("userJoined", function (username, userId) {
    console.log("".concat(username, " (").concat(userId, ") has joined the chat"));
});
emitter.emit("userJoined", "JohnDoe", 42);
