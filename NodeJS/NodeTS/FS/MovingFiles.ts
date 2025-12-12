const fs = require('fs').promises;
const path = require('path');

async function moveFile(): Promise<void> {
    const sourceFile: string = 'source/file.txt';
    const targetDir: string = 'destination';
    const targetFile = path.join(targetDir, 'file.txt');

    try{
        await fs.access(sourceFile);

        await fs.mkdir(targetDir, { recursive: true });

        await fs.rename(sourceFile, targetFile);

        console.log(sourceFile, targetFile);
    } catch (err) {
        if (err instanceof Error && 'code' in err){
            if (err.code === 'ENOENT'){
                console.log('Source file does not exist');
            } else if (err.code === 'EXDEV') {
                console.log('Cross-device move detected, using copy+delete fallback');
                await moveAcrossDevices(sourceFile, targetFile);
            } else {
                console.error('Error moving file: ', err);
            }
        }
    }
}

async function moveAcrossDevices(source: string, target: string): Promise<void> {
    try{
        await fs.copyFile(source, target);

        await fs.unlink(source);

        console.log('File moved across devices successfully');
    } catch (err) {
        try { await fs.unlink(target); } catch (e) {}
        throw err;
    }
}

moveFile();