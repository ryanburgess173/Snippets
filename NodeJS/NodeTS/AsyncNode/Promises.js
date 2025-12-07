var FileSys = require('fs').promises;
console.log('1. Reading file...');
FileSys.readFile('myfile.txt', 'utf8')
    .then(function (data) {
    console.log('3. File content: ', data);
})
    .catch(function (err) { return console.error('Error:', err); });
console.log('2. This runs before file is read!');
