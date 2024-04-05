const leer = require("prompt-sync")();

/**
 * Ej 4 
 * Verificación de Varita Mágica:
 * Pide al usuario el nivel de lealtad y astucia de una varita mágica y verifica si es adecuada para su uso.
 * A partir de 70 nivel de lealtad o 80 en astucia la varita es apta
 * 
 * Por ejemplo si la astucia es 90 y la lealtad es 40 entonces la varita es apta, en otro caso si la astucia es 30 y la lealtad es 60 la varita no es apta
 */


function main() {
    let nivLealtad=0;
    let nivAstucia=0;
    console.log("Ingresa tu nivel de lealtad");
    nivLealtad=Number(leer());
    console.log("Ahora preciso saber tu nivel de astucia");
    nivAstucia=Number(leer());
    if (nivLealtad>70 && nivAstucia>80){
        console.log("Tu varita está apta");
    } else {
        console.log("Tu varita no está apta");
    }
}


main();