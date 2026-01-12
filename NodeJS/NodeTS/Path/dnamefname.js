/*
In Node.js, __dirname and __filename are special variables available in CommonJS modules that provide the directory name and file name of the current module.
*/
var path = require("path");
console.log("Directory name: ", __dirname);
console.log("File name: ", __filename);
var configPath = path.join(__dirname, "config", "app-config.json");
console.log("Config file path: ", configPath);
console.log("Directory using path.dirname():", path.dirname(__filename));
