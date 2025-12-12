import * as fs from 'fs/promises';
import * as path from 'path';
import { Dirent } from 'fs';

async function emptyDirectory(dirPath: string): Promise<void> {
    try{
        const files = await fs.readdir(dirPath, { withFileTypes: true });
        await Promise.all(
            files.map((file: Dirent) => {
                const fullPath = path.join(dirPath, file.name);
                return file.isDirectory()
                    ? fs.rm(fullPath, { recursive: true, force: true })
                    : fs.unlink(fullPath);
            })
        );

        console.log('Directory emptied successfully');
    } catch (err) {
        console.error('Error emptying directory: ', err);
    }
}

emptyDirectory('directory-to-empty');