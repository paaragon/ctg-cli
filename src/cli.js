import arg from 'arg';
import buildTemplate from './main';

function parseArgumentsIntoOptions(rawArgs) {
    let args = {};
    try {
        args = arg({
            '--template': String,
            '-t': '--template',
        }, {
            argv: rawArgs.slice(2),
        });
    } catch (e) {}
    return {
        template: args['--template'] || null,
        name: args._ ? args._[0] : null
    };
}

export async function cli(args) {
    let options = parseArgumentsIntoOptions(args);
    if (!options.template) {
        console.log('You must specify a template');
        return;
    }
    await buildTemplate(options);
}