const fs = require('fs').promises;

async function readFileExample(){
    try{
        const data: string = await fs.readFile('myfile.txt', 'utf8');
        console.log('File contents:\n', data);
    }catch(err){
        console.error('Error reading file:', err);
    }
}

readFileExample();
console.log('File contents:\n');

const { promisify } = require('util');
const readFileAsync = promisify(require('fs').readFile);

async function readWithPromisify(){
    try{
        const data: string = await readFileAsync('myfile.txt', 'utf8');
        console.log(data);
    }catch(err){
        console.error(err);
    }
}

readWithPromisify();