const EventEmitter = require("events");
const emitter: InstanceType<typeof EventEmitter> = new EventEmitter();

// This listener will be called only once
emitter.once("connection", (): void => {
  console.log("First connection established");
});

emitter.emit("connection"); // This will trigger the listener
emitter.emit("connection"); // This won't trigger the listener again

export {};
