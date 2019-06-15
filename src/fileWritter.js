import fs from 'fs';
import path from 'path';

export async function createFolders(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}

export async function createFile(dir, fileName, content) {

    const pathChunks = [];
    if (dir) {
        pathChunks.push(dir);
    }
    pathChunks.push(fileName);
    const pathRoute = path.join(...pathChunks);
    fs.writeFileSync(pathRoute, content);
}