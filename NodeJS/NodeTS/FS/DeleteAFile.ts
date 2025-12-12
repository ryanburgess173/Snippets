const fs = require('fs').promises;

async function deleteFile() {
    const filePath: string = 'file-to-delete.txt';

    try{
        // check if file exists first
        await fs.access(filePath);

        // delete the file
        await fs.unlink(filePath);
        console.log('File deleted successfully');
    } catch (err) {
        if (err instanceof Error && 'code' in err && err.code === 'ENOENT') {
            console.log('File does not exist');
        } else {
            console.error('Error deleting file:', err);
        }
    }
}

deleteFile();

export {}