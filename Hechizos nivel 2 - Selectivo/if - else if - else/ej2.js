const leer = require("prompt-sync")();

/**
 * Ej 2 
 * Elección de Casa en Hogwarts:
 * Solicita al estudiante su puntuación en un examen y determina a qué casa de Hogwarts pertenecería.
 * Gryffindor - a partir de 90 puntos
 * Hufflepuff - a partir de 70 puntos
 * Ravenclaw - a partir de 50 puntos
 * Slytherin - menos de 50 puntos
 * 
 * Por ejemplo si el estudiante saco 100 puntos entonces pertenece a Gryffindor o si sacara 30 entonces pertenece a Slytherin
 */


function main() {
    let puntaje=0;
    let casa="";
    console.log("Qué puntaje obtuviste en la prueba?");
    puntaje=Number(leer());
    if (puntaje>90){
        casa="Gryffindor";
        console.log("De acuerdo a tu puntaje, perteneces a la casa ", casa);
            } else if (puntaje>70){
                casa="Hufflepuff";
                console.log("De acuerdo a tu puntaje, perteneces a la casa ", casa);
            } else if (puntaje>50){
                casa="Ravenclaw";
                console.log("De acuerdo a tu puntaje, perteneces a la casa ", casa);
            } else if (puntaje<50){
                casa="Slytherin";
                console.log("De acuerdo a tu puntaje, perteneces a la casa ", casa);
            }

            
}


main();