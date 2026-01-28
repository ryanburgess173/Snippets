const EventEmitter = require("events");
const emitter: InstanceType<typeof EventEmitter> = new EventEmitter();

// emit event with args
emitter.on("userJoined", (username: string, userId: number) => {
  console.log(`${username} (${userId}) has joined the chat`);
});

emitter.emit("userJoined", "JohnDoe", 42);
