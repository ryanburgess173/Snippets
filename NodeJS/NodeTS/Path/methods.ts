const path = require("path");

const filename = path.basename("/users/docs/file.txt");
console.log(filename);

const filenameWithoutExt = path.basename("/users/docs/file.txt", ".txt");
console.log(filenameWithoutExt);

export {};
