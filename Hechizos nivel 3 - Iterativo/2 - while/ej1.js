const leer = require("prompt-sync")();
const MAX_VOLDEMORT=10;
const MAX_ESTUDIANTE=10;
const MIN_VOLDEMORT=-1;
const MIN_ESTUDIANTE=1;
const VALOR_DANIO_VOLDEMORT=3;
const CANT_HECHIZOS=3;


/**
 * Ej 1
 * En este ejercicio, te convertirás en un joven mago o bruja que se enfrenta a la misión más importante de todas: derrotar a Lord Voldemort. Sin embargo, para hacerlo, necesitarás afinar tus habilidades mágicas y tu astucia.

Tu tarea es programar un simulador de batalla mágica donde tú, como estudiante de Hogwarts, puedas lanzar hechizos contra Voldemort.

El mecanismo es el siguiente: cada vez que lanzas un hechizo, ingresarás un número que representa tu hechizo. Si ese número coincide con un número aleatorio el cual simula acertar un ataque, lograrás un ataque exitoso contra Voldemort y reducirás su vida. Sin embargo, si no logras acertar el número, Voldemort contraatacará y perderás puntos de vida.

El simulador debe seguir funcionando hasta que alguno de los dos, tú o Voldemort, llegue a sus puntos mínimos de vida. Para el estudiante, los puntos de vida son 1, mientras que para Voldemort son -1 (sí, él es un ser oscuro, después de todo).

¡Prepárate para enfrentar la oscuridad y demuestra que eres digno de portar la varita de sauco!

Recuerda, en Hogwarts la valentía, la inteligencia y el trabajo en equipo son fundamentales. ¡Buena suerte!

Vidas iniciales/minimas, daño jugador/enemigo y hechizos a usar (minimo 3) quedan a su propia eleccion
Considerar que:
- la vida del enemigo no puede ser menor que la del jugador
- cada hechizo tiene un valor de daño unico y el enemigo tiene 1 solo hechizo de ataque
 */


function main() {
    let voldemort=MAX_VOLDEMORT;
    let estudiante=MAX_ESTUDIANTE;
    let numAtaqueIng=0;
    let numAtaqueGen=0;
    console.log("**** Vas a luchar contra Voldemort ****");
    console.log("--- Estudiante:", estudiante,"--- Voldemort:", voldemort);
    while(estudiante>=MIN_ESTUDIANTE && voldemort>=MIN_VOLDEMORT){
    console.log("### Puedes lanzar tu ataque, ingresando un número del 1 al", CANT_HECHIZOS);
    numAtaqueIng=Number(leer());
    numAtaqueGen=Math.floor(Math.random()*CANT_HECHIZOS)+1;
    if (numAtaqueIng==numAtaqueGen) {
        voldemort=voldemort-numAtaqueGen;
        console.log(numAtaqueGen);
        console.log("--- Has acertado!");
        console.log("--- Estudiante:", estudiante, "Voldemort:", voldemort);
    } else {
        estudiante=estudiante-VALOR_DANIO_VOLDEMORT;
        console.log(numAtaqueGen);
        console.log("--- Fallaste en tu ataque!");
        console.log("--- Estudiante:", estudiante, "Voldemort:", voldemort);
    }
}
}

main();