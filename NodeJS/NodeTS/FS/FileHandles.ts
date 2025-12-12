const fs = require('fs').promises;

async function writeWithFileHandle() {
    let fileHandle;
    try{
        fileHandle = await fs.open('output.txt', 'w');

        await fileHandle.write('First line\n');
        await fileHandle.write('Second line\n');
        await fileHandle.write('Third line\n');

        console.log('Content written successfully');
    } catch (err) {
        console.error('Error writing to file:', err);
    } finally {
        if (fileHandle) {
            await fileHandle.close();
        }
    }
}

writeWithFileHandle();