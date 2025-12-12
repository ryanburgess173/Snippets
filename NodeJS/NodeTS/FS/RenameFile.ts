const fs = require('fs').promises;

async function renameFile(): Promise<void> {
    const oldPath: string = 'old-name.txt';
    const newPath: string = 'new-name.txt';
    
    try{
        await fs.access(oldPath);

        try{
            await fs.access(newPath);
            console.log('Destination file already exists');
            return;
        } catch (err) {
        }

        await fs.rename(oldPath, newPath);
        console.log('File renamed successfully');
    } catch (err) {
        if (err instanceof Error && 'code' in err && err.code === 'ENOENT'){
            console.log('Source file does not exist');
        } else {
            console.error('Error renaming file: ', err);
        }
    }
}

renameFile();