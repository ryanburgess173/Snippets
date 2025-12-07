console.log('1. start');
process.nextTick(function () { return console.log('2. Next tick'); });
Promise.resolve().then(function () { return console.log('3. Promise'); });
setTimeout(function () { return console.log('4. Timeout'); }, 0);
setImmediate(function () { return console.log('5. Immediate'); });
console.log('6. End');
