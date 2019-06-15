import fs from 'fs';
import os from 'os';
import vash from 'vash';

export function findTemplate(tplName) {

}

export async function renderTemplate(tplName, params) {

    let tplContent = await getTplContent(tplName);

    // getting custom extension
    const linesInFile = tplContent.split(/\r?\n/);
    const firstLine = linesInFile[0];
    const langExp = /#!(.*)/.exec(firstLine);
    let lang = 'js';
    if (langExp != null) {
        linesInFile.splice(0, 1);
        tplContent = linesInFile.join(os.EOL);
        lang = langExp[1];
    }

    if (!tplContent) {
        return {
            lang,
            out: ''
        }
    }

    const tpl = vash.compile(tplContent);
    return {
        lang,
        out: tpl(params)
    };
}

async function getTplContent(tplName) {
    const tplPath = `templates/${tplName}.vash`;
    return fs.readFileSync(tplPath, 'utf8');
}