var Fs = require('fs');
console.log('1. Starting async read...');
Fs.readFile('myfile.txt', 'utf8', function (err, data) {
    if (err)
        throw err;
    console.log('2. File contents: ', data);
});
console.log('3. Done starting read operation');
