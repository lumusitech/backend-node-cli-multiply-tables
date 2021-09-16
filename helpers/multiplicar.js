const fs = require('fs');
const colors = require('colors');

const crearTabla = async (base = 1, hasta = 10, listar = false) => {

    try {
        let nombreArchivo = `tabla-${base}.txt`;
        let salida = '';
        let consola = '';

        consola += '\n===============\n'.red;
        consola += ('  Tabla del ' + base +'  ').rainbow + '\n';
        consola += '===============\n'.red;

        for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${"X".green} ${i} ${"=".yellow} ${base * i}\n`;
            salida += `${base} X ${i} = ${base * i}\n`;
        }
        
        fs.writeFileSync(`./salida/${nombreArchivo}`, salida);
        
        consola += colors.red('===============');

        if(listar) console.log(consola);
        
        return nombreArchivo;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearTabla
}