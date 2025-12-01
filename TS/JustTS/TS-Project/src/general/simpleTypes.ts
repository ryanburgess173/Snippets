let isActive: boolean = false;
let hasPermission = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let float: number = 3.14159;

let color: string = "blue";
let fullName: string = "John Doe";
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName} and I'll be ${age+1} next year.`;

const bigNumber: bigint = 9007199254740991n;
const hugeNumber = BigInt(113483959045098349853);

const uniqueKey: symbol = Symbol('description');
const obj = {
    [uniqueKey]: 'This is a unique property'
};

console.log(obj[uniqueKey]);