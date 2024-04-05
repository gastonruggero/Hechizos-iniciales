const leer = require("prompt-sync")();

/**
 * Ej 1
 * Clasificación de Pociones:
 * Solicita al estudiante el nombre de una poción y muestra su nivel de dificultad de acuerdo a su complejidad.
 * 
 * Pociones conocidas: 
 * Felix Felicis - es extremadamente compleja y peligrosa.
 * Polvo de Flu - es compleja pero útil en la red de transportación.
 * Poción Multijugos - es complicada pero muy útil para transformaciones temporales.
 * Cualquier otro tipo de pocion indicar que: No tenemos información sobre esa poción en nuestros registros.
 * 
 */


function main() {
    let pocion="";
    let comentarios="";
    console.log("Ingresa el nombre de una poción");
    pocion=leer();
    switch (pocion) {
        case "Felix Felicis":
            console.log("Es extremadamente compleja y peligrosa.")
            break;
    
        case "Polvo de Flu":
            console.log("Es compleja pero útil en la red de transportación.");
            break;
        case "Poción Multijugos":
            console.log("Es complicada pero muy útil para transformaciones temporales.")
            break;
        default:
            console.log("No tenemos información sobre esa poción en nuestros registros.");
    }
}


main();