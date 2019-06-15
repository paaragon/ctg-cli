import fs from 'fs';
import vash from 'vash';

export function findTemplate(tplName) {

}

export async function renderTemplate(tplName, params, lang) {

    const tplContent = await getTplContent(tplName, lang);
    const tpl = vash.compile(tplContent);
    return tpl(params);
}

async function getTplContent(tplName, lang) {
    const tplPath = `templates/${lang}/${tplName}.vash`;
    return fs.readFileSync(tplPath, 'utf8');
}