const leer = require("prompt-sync")();

/**
 * Ej 3 
 * Cálculo del Peso de la Nimbus 2000
 * Preguntale a Harry el peso base de la Nimbus 2000 en kg y la cantidad de plumas de fénix utilizadas para su fabricación, luego calcula el peso total de la escoba considerando que cada pluma añade 0.1 kg
 * 
 * Por ejemplo si la cantidad de plumas usadas son 350 y el peso base es de 1.5kg entonces el total es de 36.5kg
 */


function main() {
    
    console.log("Hola Harry, cuántos kilogramos pesa tu Nimbus 2000?");
    let peso=Number(leer());
    console.log("Cuántas plumas utilizaste para fabricarla?");
    let plumas=Number(leer());
    let total=peso+(plumas*.1);
    console.log("Tu Nimbus pesa ", total, "kg");
}


main();