"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
try {
    var data = fs.readFileSync('myfile.txt', 'utf8');
    console.log('File contents:', data);
}
catch (err) {
    console.error("\nError: ".concat(err, "\n"));
}
