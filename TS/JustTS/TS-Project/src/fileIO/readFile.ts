import * as fs from 'fs';
const readFilePath: string = 'output.txt';

const content: string = fs.readFileSync(readFilePath, 'utf-8');
console.log(content);