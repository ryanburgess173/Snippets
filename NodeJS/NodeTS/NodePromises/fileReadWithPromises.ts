const fs = require('fs').promises;
const promise1: Promise<string> = Promise.resolve('First result');
const promise2: Promise<string> = new Promise(
    (resolve: Function) => setTimeout(
        () => resolve('second result'), 1000
    )
);
const promise3: Promise<string> = fs.readFile('myfile.txt', 'utf8');

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log('Results:',results);
    })
    .catch(error => {
        console.log('Error in one of the promises:', error);
    });