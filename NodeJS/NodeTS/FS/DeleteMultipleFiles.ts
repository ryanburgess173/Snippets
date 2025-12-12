const fs = require('fs').promises;
const path = require('path');

async function deleteFiles(){ 
    const filesToDelete: string[] = [
        "temp1.txt",
        "temp2.txt",
        "temp3.txt"
    ];

    try{
        await Promise.all(
            filesToDelete.map(file =>
                fs.unlink(file).catch((err: unknown) => {
                    if (err instanceof Error && 'code' in err && err.code !== 'ENOENT'){
                        console.error(`Error deleting ${file}:`, err);
                    }
                })
            )
        );

        console.log('Files deleted successfully');
    } catch(err) {
        console.error('Error during file deletion: ', err);
    }
}

deleteFiles();

export {}