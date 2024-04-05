const leer = require("prompt-sync")();

/**
 * Ej 1 
 * Cálculo de Pociones
 * Solicita la cantidad de escarabajos de ojo de tigre y el número de raíces de mandrágora necesarios para hacer una poción, y luego calcula la cantidad total de ingredientes necesarios
 * 
 * Por ejemplo si es necesario 8 raíces de mandrágora y 5 escarabajos de ojo de tigre para hacer la poción entonces el total de ingredientes es 13
 */


function main() {
    let raices=0;
    let escarabajos=0;
    console.log("Cuántas raíces de mandrágora precisas para tu pócima?");
raices=Number(leer());
console.log("Cuántos escarabajos ojo de tigre precisas para tu pócima?");
escarabajos=Number(leer());
    console.log("Precisas un total de ", raices+escarabajos, "ingredientes");
}


main();