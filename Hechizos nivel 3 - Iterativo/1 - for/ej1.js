const leer = require("prompt-sync")();
const HECHIZO_UNO="Wingardium leviosa";
const HECHIZO_DOS="Tucu tucu";
const HECHIZO_TRES="Pim pum pam"

/**
 * Ej 1
 * Es crucial que los estudiantes aprendan los nombres de los hechizos correctamente para realizar magia de manera efectiva. En la clase de Encantamientos, los estudiantes deben demostrar su habilidad para recordar y lanzar los hechizos correctamente. Ayuda a simular este proceso creando un programa que solicite al usuario el nombre de un hechizo y le dé un número limitado de intentos para ingresarlo correctamente. Si el usuario ingresa el nombre del hechizo correctamente, el programa lo felicitará y finalizará. Si el usuario no logra ingresar el hechizo correctamente después de los intentos permitidos, el programa lo informará y finalizará.
 * 
 * 
 * Por ejemplo: hechizo "Wingardium leviosa", cantidad de intentos maximos 4
 * 
 * Extra: permitir que el programa acepte 3 hechizos diferentes
 */


function main() {
    let intentosMax=4;
    let hechizo="";   
    for (let intentosMax = 1; intentosMax < 4; intentosMax++) {
        console.log("Ingresa un nombre de hechizo");
        hechizo=leer();
        if(hechizo==HECHIZO_UNO|| hechizo== HECHIZO_DOS|| hechizo==HECHIZO_TRES)
        {
            console.log("Nombre de hechizo correcto");
            intentosMax=4;
        } else {
            console.log("Hechizo inexistente o mal nombrado");
        }
    } 
    console.log("Los hechizos correctos eran: ", HECHIZO_UNO+"\n"+ HECHIZO_DOS+"\n"+ HECHIZO_TRES);
    
}


main();