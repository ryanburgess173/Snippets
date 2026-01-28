const EventEmitter = require("events");
const emitter: InstanceType<typeof EventEmitter> = new EventEmitter();

// Always handle 'error' events
emitter.on("error", (err: Error): void => {
  console.error("An error occurred:", err.message);
});

// This will trigger the error handler
emitter.emit("error", new Error("Something went wrong"));
