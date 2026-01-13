var path = require("path");
var fullPath = path.join("/users", "docs", "file.txt");
console.log(fullPath);
console.log(path.join("/users", "../system", "./logs", "file.txt"));
console.log(path.join("users", "//docs", "file.txt"));
