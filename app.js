const { crearTabla } = require('./helpers/multiplicar');
const colors = require('colors');
const { argv } = require('./config/yargs');

console.clear();

crearTabla(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.blue))
    .catch(err => console.log('Error: ', err));

// yargs básico
// console.log();
// console.log(argv);
// console.log(process.argv);


// la forma sin librerías: Usando process.argv
// if (process.argv[2] === '--version') console.log('v0.1.0');
// const [, , arg3='--base=5'] = process.argv;
// const [, base] = arg3.split('=');
// console.log(base);






// let salida = '';
// const tabla = n => {
//     salida += '\nTabla del '+ n + '\n';
//     salida += '\n===============\n\n';
//     for (let i = 1; i <= 10; i++) {
//         salida += `${n} X ${i} = ${n * i}\n`;
//     }
//     salida += '\n===============\n';
// }

// Todas las tablas
// for (let i = 1; i <= 10; i++) {
//     tabla(i);
// }

// fs.writeFile('tablas.txt', salida, (err) => {
//     if(err) throw new Error(`Error: ${err}`);
//     else console.log('Archivo escrito correctamente');
// });

