import {
    renderTemplate
} from './template';

import {
    createFolders,
    createFile
} from './fileWritter';

export default async function buildTemplate(options) {

    const template = options.template;
    const name = options.name;
    const lang = options.lang;

    const pathAndName = buildFilePath(name);
    if (!pathAndName) {
        console.log('Target name not found');
        return;
    }

    const fileName = pathAndName.fileName;
    const pathName = pathAndName.path;

    const tplParams = {
        name: fileName
    };

    const out = await renderTemplate(template, tplParams, lang);

    if (pathName) {
        await createFolders(pathName);
    }

    await createFile(pathName, fileName + '.' + lang, out);
}

function buildFilePath(name) {
    if (!name) {
        return null;
    }
    const pathChunks = name.split('/');
    if (pathChunks.length === 0) {
        return null;
    }
    const fileName = pathChunks.pop();

    return {
        fileName: fileName,
        path: pathChunks.join('/')
    };
}