const fs = require('fs');
const { pipeline } = require('stream/promises');
const { Readable } = require('stream');

async function writeLargeFile() {
    const data = Array(1000).fill(null).map((_, i) => `Line ${i+1}: ${'x'.repeat(100)}\n`);
    const readable = Readable.from(data);

    const writable = fs.createWriteStream('large-file.txt');

    try{
        await pipeline(readable, writable);
        console.log('Large file written successfully');
    } catch (err) {
        console.error('Error writing file:',err);
    }
}

writeLargeFile();