let isActive = false;
let hasPermission = false;
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let float = 3.14159;
let color = "blue";
let fullName = "John Doe";
let age = 30;
let sentence = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;
const bigNumber = 9007199254740991n;
const hugeNumber = BigInt(113483959045098349853);
const uniqueKey = Symbol('description');
const obj = {
    [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]);
