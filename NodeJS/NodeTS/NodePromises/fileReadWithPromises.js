var fs = require('fs').promises;
var promise1 = Promise.resolve('First result');
var promise2 = new Promise(function (resolve) { return setTimeout(function () { return resolve('second result'); }, 1000); });
var promise3 = fs.readFile('myfile.txt', 'utf8');
Promise.all([promise1, promise2, promise3])
    .then(function (results) {
    console.log('Results:', results);
})
    .catch(function (error) {
    console.log('Error in one of the promises:', error);
});
