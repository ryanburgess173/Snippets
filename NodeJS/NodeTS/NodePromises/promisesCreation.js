var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var success = Math.random() > 0.5;
        if (success) {
            resolve('Operation completed successfully');
        }
        else {
            reject(new Error('Operation failed'));
        }
    }, 1000); // simulating a 1s delay
});
myPromise
    .then(function (result) { return console.log('Success', result); })
    .catch(function (error) { return console.error('Error:', error.message); });
