import * as fs from 'fs';
const outputFilePath: string = 'output.txt';

fs.appendFileSync(outputFilePath, "\nAppended text\n", 'utf-8');
console.log("file appended");