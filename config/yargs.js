const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'toma la base de la tabla'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Lista la tabla'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe: 'Limite la tabla'
                })

                .check((argv,options)=>{
                    if(isNaN(argv.b)){
                        throw 'base debe ser numerica'
                    }

                    return true;

                })

                .argv
                
                
                module.exports= argv;