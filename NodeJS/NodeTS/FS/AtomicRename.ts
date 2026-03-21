const fs = require('fs').promises;
const path = require('path');
const os = require('os');

async function updateFileAtomic(filePath: string, newContent: string): Promise<void> {
    const tempPath: string = path.join(
        os.tmpdir(),
        `temp-${Date.now()}-${Math.random().toString(36).substr(2,9)}`
    );
    try{
        await fs.writeFile(tempPath, newContent, 'utf8');

        const stats = await fs.stat(tempPath);
        if(stats.size === 0){
            throw new Error('Temporary file is empty');
        }

        await fs.rename(tempPath, filePath);

        console.log('File updated atomically');
    } catch (err) {
        try { await fs.unlink(tempPath); } catch (e) {}

        console.error('Atomic update failed:', err);
        throw err;
    }
}

updateFileAtomic('important-config.json', JSON.stringify({key: 'value'}, null, 2));

export {}