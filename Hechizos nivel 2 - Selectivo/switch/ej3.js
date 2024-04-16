const leer = require("prompt-sync")();
const HECHIZO_UNO="Expecto Patronum";
const HECHIZO_DOS="Wingardium Leviosa";
const HECHIZO_TRES="Expelliarmus";
const HECHIZO_CUATRO="Avada Kedavra";
const ID_HECHIZO_UNO="3007";
const ID_HECHIZO_DOS="0112";
const ID_HECHIZO_TRES="1234";
const ID_HECHIZO_CUATRO="4567";

/**
 * Ej 3
 * Permitir a los estudiantes lanzar hechizos mágicos utilizando un código numérico de 4 dígitos.

Instrucciones:

El programa solicitará al usuario que ingrese un código numérico de 4 dígitos.
Basado en el código ingresado, el programa determinará qué hechizo lanzar.
Utiliza la estructura de control switch para asociar cada código con un hechizo específico.
Si el código ingresado coincide con alguno de los códigos asignados, el programa mostrará el nombre del hechizo correspondiente.
Si el código no coincide con ninguno de los códigos asignados, el programa mostrará un mensaje indicando que el código es incorrecto.
El programa debe asegurarse de que el código ingresado sea un número entero de 4 dígitos.
Hechizos Disponibles:

Expecto Patronum

Expelliarmus
Avada Kedavra
 */
let IdIngresado="";

function main() {
    console.log("Ingrese el código de hechizo por favor:");
    IdIngresado=leer();
    switch (IdIngresado){
        case ID_HECHIZO_UNO:
            console.log("Elegiste ", HECHIZO_UNO);
            break;
        case ID_HECHIZO_DOS:
            console.log("Elegiste ", HECHIZO_DOS);
            break;
        case ID_HECHIZO_TRES:
            console.log("Elegiste ", HECHIZO_TRES);
            break;
        case ID_HECHIZO_CUATRO:
            console.log("Elegiste ", HECHIZO_CUATRO);
            break;
        default:
            console.log("No corresponde a un código de hechizo válido");
    }

    
}


main();