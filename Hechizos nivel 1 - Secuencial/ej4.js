const leer = require("prompt-sync")();

/**
 * Ej 4 
 * Cálculo del Hechizo Patronus:
 * Solicita al usuario la edad del mago y la cantidad de días de práctica del hechizo Patronus, luego calcula la potencia del hechizo. La potencia se obtiene duplicando la edad sumado a la mitad de todos los días de practica realizados para dominar el Patronus
 * 
 * Por ejemplo si la edad es 25 y los días de practica son 158 entonces su potencia con el hechizo patronus es de 129
 */


function main() {
    console.log("Cuántos años tiene el mago?");
    let edad=Number(leer());
    console.log("Cuántos días de práctica posee?");
    let diasPractica=Number(leer());
    let potencia=(edad*2)+(diasPractica/2);
    console.log("La potencia calculada para el hechizo Patronus es de", potencia);
    
}


main();