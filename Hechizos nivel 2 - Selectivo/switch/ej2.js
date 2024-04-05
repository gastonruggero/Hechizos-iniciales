const leer = require("prompt-sync")();

/**
 * Ej 2
 * Elección de Varita Mágica:
 * Pide al estudiante el núcleo de una varita mágica y muestra un mensaje personalizado dependiendo del tipo de núcleo.
 * Fénix - ¡Excelente elección! Las varitas con núcleo de fénix son poderosas y leales.
 * Unicornio - Las varitas con núcleo de unicornio son conocidas por su pureza y fuerza.
 * Dragón - ¡Cuidado! Las varitas con núcleo de dragón son poderosas pero pueden ser temperamentales.
 * Cualquier otro tipo de nucleo - No reconocemos ese tipo de núcleo. Por favor, ingrese un núcleo válido.
 */


function main() {
    let nombreVarita="";
    console.log("Ingresa el nombre del núcleo de tu varita");
    nombreVarita=leer();
    switch (nombreVarita){
        case "Fénix":
        console.log("¡Excelente elección! Las varitas con núcleo de fénix son poderosas y leales.");
        break;
        case "Unicornio":
        console.log("Las varitas con núcleo de unicornio son conocidas por su pureza y fuerza.");
        break;
        case "Dragón":
            console.log("¡Cuidado! Las varitas con núcleo de dragón son poderosas pero pueden ser temperamentales.");
    break;
    default:
        console.log("No reconocemos ese tipo de núcleo. Por favor, ingrese un núcleo válido.");
        }   
    
}


main();