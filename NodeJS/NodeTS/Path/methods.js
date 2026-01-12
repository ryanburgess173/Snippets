"use strict";
exports.__esModule = true;
var path = require("path");
var filename = path.basename("/users/docs/file.txt");
console.log(filename);
var filenameWithoutExt = path.basename("/users/docs/file.txt", ".txt");
console.log(filenameWithoutExt);
