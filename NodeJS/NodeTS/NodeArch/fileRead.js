var fs = require('fs');
console.log('Before file read');
fs.readFile('myfile.txt', 'utf8', function (err, data) {
    if (err)
        throw err;
    console.log("file contents: ", data);
});
console.log('after file read');
