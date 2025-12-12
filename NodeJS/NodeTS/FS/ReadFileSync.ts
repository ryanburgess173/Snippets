const fs = require('fs');

try{
    const data:string = fs.readFileSync('myfile.txt', 'utf8');
    console.log('File contents:', data);
} catch (err){
    console.error(`\nError: ${err}\n`);
}

export {}