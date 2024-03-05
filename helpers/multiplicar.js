const fs = require('node:fs');
var colors = require('colors');
const { argv } = require('node:process');

const  crearArchivoTabla = async(base = 5, listar= false, hasta=10)=>{

    
    let salida = "";

    try {
        for (let index = 1; index <= hasta; index++) {
    
            salida+= ` ${base} x ${index} = ${base*index} \n`;
            
        }

        console.log(argv);

        if(listar==true){

            console.log("---------------------------".green);
            console.log("   Tabla del:" , colors.green(base));
            console.log("---------------------------".green);
            console.log(salida.rainbow);
        
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`,  salida );

        return `tabla-${base}.txt`
         
    } catch (err) {

        throw err;
        
    }
    
    

}
module.exports = {
    crearArchivoTabla
}