const promise1: Promise<string> = new Promise((resolve: Function) => setTimeout(() => resolve('First result'), 1000));
const promise2: Promise<string> = new Promise((resolve: Function) => setTimeout(() => resolve('Second result'), 500));

Promise.race([promise1, promise2])
    .then(result => {
        console.log('Fastest result:', result);
    });

export {}