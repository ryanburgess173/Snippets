const fs = require('fs').promises;
const path = require('path');

async function batchRename(): Promise<void> {
    const directory: string = 'images';
    const pattern: RegExp = /^image(\d+)\.jpg$/;

    try{
        const files: string = await fs.readdir(directory);

        for(const file of files) {
            const match: RegExpMatchArray | null = file.match(pattern);
            if(match){
                const [_, number] = match;
                const newName: string = `photo-${number.padStart(3, '0')}.jpg`;
                const oldPath: string = path.join(directory, file);
                const newPath: string = path.join(directory, newName);

                if(oldPath !== newPath){
                    await fs.rename(oldPath, newPath);
                    console.log(`Renamed: ${file} - ${newName}`);
                }
            }
        }

        console.log('Batch rename completed');
    } catch (err) {
        console.error('Error during batch rename: ', err);
    }
}

batchRename();