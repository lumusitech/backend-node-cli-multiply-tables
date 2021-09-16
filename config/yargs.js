const colors = require('colors');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Set multiply base'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'list created table'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'table\'s limit'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) throw new Error('Error: base must be a number'.red)
        if (isNaN(argv.h)) throw new Error('Error: limit must be a number'.red)
        return true;
    })
    .argv;

module.exports = {
    argv
}