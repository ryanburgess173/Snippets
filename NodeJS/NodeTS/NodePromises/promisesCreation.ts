const myPromise = new Promise((resolve: Function, reject: Function) => {
    setTimeout(() => {
        const success = Math.random() > 0.5;
        if(success){
            resolve('Operation completed successfully');
        }else{
            reject(new Error('Operation failed'));
        }
    }, 1000); // simulating a 1s delay
});

myPromise
    .then(result => console.log('Success!', result))
    .catch(error => console.error('Error:', error.message));