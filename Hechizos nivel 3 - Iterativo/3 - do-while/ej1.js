const leer = require("prompt-sync")();
const PROB_ATAQUE = .5;
const DECREMENTO_PROB_ATAQUE = .11875
const PROB_DANIO_TOTAL_HORRO = .05;
const INCREMENTO_PROB_DANIO_TOTAL_HORRO = 0.024;
const PROB_ESQUIVAR_DANIO = .5;
const PUNTOS_CORDURA_MAX = 200;
const PUNTOS_SALUD_MAX = 400;
const DANIO_CORDURA = .057;
const DANIO_SALUD = .104;
const DIARIO_TR = "R1dd13?";
const ANILLO_G = "?G4unt!";
const COPA_HH = "H3l?ga!";
const DIADEMA_RR = "?R4vena";
const NAGINI = "N@9ini?";
const MAX_INTENTOS = 30;
const ID_NAGINI = 5;
const MENSAJE_DERROTA = "- En el oscuro manto de la derrota, el estudiante enfrentó una verdad devastadora: a pesar de sus esfuerzos incansables, los horrocruxes permanecen intactos, y la sombra del mal se alza triunfante sobre el mundo mágico. Aunque la batalla fue ardua y valiente, el destino ha dictado su veredicto, dejando al estudiante con el amargo sabor de la derrota. Pero incluso en la oscuridad más profunda, la llama de la esperanza aún arde, recordando que la lucha nunca termina y que el mañana siempre guarda la promesa de una nueva oportunidad para la redención y la victoria."
const MENSAJE_VICTORIA = "- ¡Victoria para el estudiante valiente que, con coraje y determinación, ha destruido todos los horrocruxes! Con cada fragmento de alma oscura eliminado, la luz de la esperanza ha brillado más brillante sobre el mundo mágico. ¡Su sacrificio y valentía han salvado a nuestra comunidad de las sombras de la oscuridad, asegurando un futuro lleno de paz y prosperidad para todas las generaciones venideras!"

let salud = PUNTOS_SALUD_MAX;
let cordura = PUNTOS_CORDURA_MAX;
let llave = "";
let ataqueAcumulado = PROB_ATAQUE;

function mensaje(horrocruxActual) {
    let horroNombre = ["", "al Diario de Tom Riddle", "al Anillo de Gaunt", "a la Copa de Helga Hufflepuff", "a la Diadema de Rowena Ravenclaw", "a Nagini"];
    let horroComodin = ["", DIARIO_TR, ANILLO_G, COPA_HH, DIADEMA_RR, NAGINI];
    let finDeMensaje = ["", "numero generado aleatoriamente entre -3 y 20.", "generado aleatoriamente entre -100 y -70.", "numero generado aleatoriamente entre 4 y 12.", "caracter generado aleatoriamente entre a y e.", "caracter generado aleatoriamente entre H y K."];
    let llaves = ["", String((Math.floor(Math.random() * 23)) - 3), String((Math.floor(Math.random() * 30)) - 100), String((Math.floor(Math.random() * 8)) + 4), String.fromCharCode((Math.floor(Math.random() * 5)) + 97), String.fromCharCode((Math.floor(Math.random() * 4)) + 72)];
    console.log("*** Te enfrentarás ", horroNombre[horrocruxActual], "\nLa contraseña es", horroComodin[horrocruxActual], "donde ? es un ", finDeMensaje[horrocruxActual]);
    console.log("(muestro caracter faltante para pruebas)", llaves[horrocruxActual]);
    llave = llaves[horrocruxActual];

}
/**
 * Nos muestra el puntaje en salud, cordrura, así como el número de intento y nos pregunta sobre el caracter faltante
 * @param {Number} intento número de intento
 * @param {Number} horrocruxActual el Horrocrux que tenemos delante actualmente 
 * @returns una variable que compararemos al caracter faltante.
 */
function generarDialogo(intento) {
    let ingresoUsuario = "";
    console.log("### Salud: ", salud.toFixed(2), "### Cordura: ", cordura.toFixed(2), "### Intento: ", intento);
    ingresoUsuario = String(leer());
    return ingresoUsuario;
}
/**
 * Función que aplica cuando acertamos al caracter faltante de la contraseña (pase)
 *  //comprobar si es el último horrocrux!
  */
function ingresoOK(jugadorStatus) {
    console.log("Correcto");
    if (jugadorStatus.horrocruxActual !== ID_NAGINI) {
        jugadorStatus.danioAcumulado = jugadorStatus.danioAcumulado + INCREMENTO_PROB_DANIO_TOTAL_HORRO;
        jugadorStatus.esquivarDanioAcumulado = jugadorStatus.esquivarDanioAcumulado - DECREMENTO_PROB_ATAQUE;
        jugadorStatus.horrocruxActual = jugadorStatus.horrocruxActual + 1;
        jugadorStatus.intento = jugadorStatus.intento + 1;
        console.log("Has acertado y destruido al Horrocrux. Atención! El próximo tendrá una capacidad de daño de:", jugadorStatus.danioAcumulado.toFixed(2));
    } else {
        victoria();
        console.log("Fin del juego");
        jugadorStatus.intento = MAX_INTENTOS;
        jugadorStatus.todosMuertos = true;
    }
    return jugadorStatus;
}
/**
 * Muestra el mensaje de derrota
 */
function derrota() {
    console.log(MENSAJE_DERROTA);
}
/**
 * Muestra el mensaje de victoria sobre los Horrocruxes
 */
function victoria() {    
    console.log(MENSAJE_VICTORIA);    
}
/**
 * Función que aplica cuando no acertamos al caracter faltante en la contraseña (pase)
 * @param {Number} danioAcumulado el daño que puede causarnos el Horrocrux
 * @param {Number} intento número de intentos
 * @returns pasa al siguiente intento
 */
function ingresoErrado(jugadorStatus) {
    let danioTotalGen = 0;
    let probEsquivarGen = 0;
    console.log("Fallaste");
    danioTotalGen = Math.random();
    probEsquivarGen = Math.random();
    console.log("La posibilidad de esquivar al Horrocrux es de", probEsquivarGen.toFixed(2), " sobre ", jugadorStatus.esquivarDanioAcumulado);
    if (probEsquivarGen < jugadorStatus.esquivarDanioAcumulado) {
        salud = salud - (salud * DANIO_SALUD);
        cordura = cordura - (cordura * DANIO_CORDURA);
        jugadorStatus.intento = jugadorStatus.intento + 1;
        console.log("No pudiste esquivar el ataque :(");
    } else {
        safaste();
        jugadorStatus.intento = jugadorStatus.intento + 1;
    }
    if (danioTotalGen < jugadorStatus.danioAcumulado) {
        cordura = 0;
        salud = 0;
        jugadorStatus.intento = MAX_INTENTOS;
        derrota();
    }
    return jugadorStatus;
}
//control espacio arriba de la funcion para documentar
function safaste() {
    let opcion = "";
    console.log("Estás de suerte!!!! \nPuedes esquivar este ataque. Deseas proteger tu cordura [C] o tu salud [S]?");
    opcion = leer();
    switch (opcion) {
        case "C":
            console.log("Elegiste cuidar tu cordura.Perderás puntos de salud");
            salud = salud - (salud * 0.104);
            break;
        case "S":
            console.log("Elegiste cuidar tu salud.Perderás puntos de cordura");
            cordura = cordura - (cordura * 0.057);
            break;
        default:
            console.log("Opción equivocada, perdiste tu chance");
            salud = salud - (salud * 0.104);
            cordura = cordura - (cordura * 0.057);
            break;
    }
}
/**
 * Función principal del juego
 */
function main() {
    let ingresoUsuario = "";
    const jugadorStatus = {
        danioAcumulado: PROB_DANIO_TOTAL_HORRO,
        esquivarDanioAcumulado: PROB_ESQUIVAR_DANIO,
        horrocruxActual: 1,
        intento: 1,
        todosMuertos: false
    }
   console.log("*** Hoy vas a luchar contra los Horrocruxes");
    while (jugadorStatus.intento < MAX_INTENTOS || jugadorStatus.todosMuertos == false) {
        mensaje(jugadorStatus.horrocruxActual);
        ingresoUsuario = generarDialogo(jugadorStatus.intento);
        if (ingresoUsuario === llave) {
            ingresoOK(jugadorStatus);
            do {
                ataqueAcumulado = ataqueAcumulado + INCREMENTO_PROB_DANIO_TOTAL_HORRO;
            } while (jugadorStatus.intento < 1);
            jugadorStatus.danioAcumulado = jugadorStatus.danioAcumulado + INCREMENTO_PROB_DANIO_TOTAL_HORRO;
        } else {
            intento = ingresoErrado(jugadorStatus);
        }
    }
}
main();