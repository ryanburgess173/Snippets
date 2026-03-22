import { ReadStream } from "node:fs";

let fs = require("fs");
let rs: ReadStream = fs.createReadStream("./demofile.txt");

rs.on("open", function (): void {
  console.log("The file is open");
});
