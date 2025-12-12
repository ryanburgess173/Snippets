const fs = require('fs').promises;
const path = require('path');

async function deleteDirectory(dirPath: string): Promise<void> {
    try{
        const stats = await fs.stat(dirPath);

        if(!stats.isDirectory()){
            console.log('Path is not a directory');
            return;
        }

        await fs.rm(dirPath, { recursive: true, force: true });

        console.log('Directory deleted successfully');
    } catch (err) {
        if (err instanceof Error && 'code' in err && err.code === 'ENOENT'){
            console.log('Directory does not exist');
        }
        else{
            console.error('Error deleting directory: ',err);
        }
    }
}

deleteDirectory('directory-to-delete');