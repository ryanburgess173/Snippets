const EventEmitter = require("events");

const myEmitter: InstanceType<typeof EventEmitter> = new EventEmitter();

myEmitter.on("greet", (): void => {
  console.log("Hello there");
});

myEmitter.emit("greet");

export {};
