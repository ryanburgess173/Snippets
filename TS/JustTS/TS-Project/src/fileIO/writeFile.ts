import * as fs from 'fs';
const outputFilePath: string = 'output.txt';

fs.writeFileSync(outputFilePath, "Hello World", 'utf-8');
console.log('file written');