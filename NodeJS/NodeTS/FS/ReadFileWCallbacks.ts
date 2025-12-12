const fs = require('fs');

// Read file asynchronously with callback
fs.readFile('myfile.txt', 'utf8', (err: Error, data: string) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content: ', data);
});

// For binary data (like images), omit encoding
fs.readFile('image.jpg', (err: Error, data: string) => {
    if (err) throw err;
    // data is a Buffer containing the file content
    console.log('Image size: ', data.length, 'bytes');
});