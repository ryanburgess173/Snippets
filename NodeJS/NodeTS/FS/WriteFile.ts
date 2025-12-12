const fs = require('fs').promises;

async function writeFileExample() {
    try{
        await fs.writeFile('myfile.txt', 'Hello, World!', 'utf8');

        const data = { name: 'John', age: 30, city: 'New York' };
        await fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');

        console.log('Files created successfully');
    } catch (err) {
        console.error('Error writing files: ', err);
    }
}

writeFileExample();