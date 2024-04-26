const leer = require("prompt-sync")();
const PROB_DANIO_HORRO = .005;
const INCREMENTO_PROB_DANIO_HORRO = 0.0024;
const PUNTOS_CORDURA_MAX = 200;
const PUNTOS_SALUD_MAX = 400;
const DANIO_CORDURA = .057;
const DANIO_SALUD = .104;
const DIARIO_TR = "R1dd13?";
const ANILLO_G = "?G4unt!";
const COPA_HH = "H3l?ga!";
const DIADEMA_RR = "?R4vena";
const NAGINI = "N@9ini?";
const LLAVE_FIN = 25;
const MAX_INTENTOS = 30;
const ID_DIARIO_TR = 1;
const ID_ANILLO_G = 2;
const ID_COPA_HH = 3;
const ID_DIADEMA_RR = 4;
const ID_NAGINI = 5;
MENSAJE_DERROTA="- En el oscuro manto de la derrota, el estudiante enfrentó una verdad devastadora: a pesar de sus esfuerzos incansables, los horrocruxes permanecen intactos, y la sombra del mal se alza triunfante sobre el mundo mágico. Aunque la batalla fue ardua y valiente, el destino ha dictado su veredicto, dejando al estudiante con el amargo sabor de la derrota. Pero incluso en la oscuridad más profunda, la llama de la esperanza aún arde, recordando que la lucha nunca termina y que el mañana siempre guarda la promesa de una nueva oportunidad para la redención y la victoria."
MENSAJE_VICTORIA="- ¡Victoria para el estudiante valiente que, con coraje y determinación, ha destruido todos los horrocruxes! Con cada fragmento de alma oscura eliminado, la luz de la esperanza ha brillado más brillante sobre el mundo mágico. ¡Su sacrificio y valentía han salvado a nuestra comunidad de las sombras de la oscuridad, asegurando un futuro lleno de paz y prosperidad para todas las generaciones venideras!"
/**
 * Genera un Horrocrux para luchar contra él.
 * @param {Number} horrocruxActual que aparece frente nuestro para luchar.
 * @returns llave: el caracter o número generado al azar para completar la contraseña (pase).
 */
function generarHorrocrux(horrocruxActual) {
    let llave = "";
    let pase = "";
    switch (horrocruxActual) {
        case ID_DIARIO_TR:
            console.log("*** Te enfrentarás al Diario de Tom Riddle.\nLa contraseña es", DIARIO_TR, "donde ? es un numero generado aleatoriamente entre -3 y 20.");
            llave = String((Math.floor(Math.random() * 23)) - 3);
            pase = DIARIO_TR.replace("?", llave);
            break;
        case ID_ANILLO_G:
            console.log("*** Te enfrentarás al Anillo de Gaunt.\nLa contraseña es", ANILLO_G, "donde ? es un numero generado aleatoriamente entre -100 y -70.");
            llave = String((Math.floor(Math.random() * 30)) - 100);
            pase = ANILLO_G.replace("?", llave);
            break;
        case ID_COPA_HH:
            console.log("*** Te enfrentarás a la Copa de Helga Hufflepuff.\nLa contraseña es", COPA_HH, "donde ? es un numero generado aleatoriamente entre 4 y 12.");
            llave = String((Math.floor(Math.random() * 8)) + 4);
            pase = COPA_HH.replace("?", llave);
            break;
        case ID_DIADEMA_RR:
            console.log("*** Te enfrentarás a la Diadema de Rowena Ravenclaw.\nLa contraseña es", DIADEMA_RR, "donde ? es un caracter generado aleatoriamente entre a y e.");
            llave = String.fromCharCode((Math.floor(Math.random() * 5)) + 97);
            pase = DIADEMA_RR.replace("?", llave);
            break;
        case ID_NAGINI:
            console.log("*** Te enfrentarás a Nagini.\nLa contraseña es", NAGINI, "donde ? es un caracter generado aleatoriamente entre H y K.");
            llave = String.fromCharCode((Math.floor(Math.random() * 4)) + 72);
            pase = NAGINI.replace("?", llave);
            break;
        default:
            victoria();
            llave = LLAVE_FIN;
            break;
    }
    return llave;
}
/**
 * En esta función, matamos al Horrocrux que tenemos actualmente en frente porque adivinamos el caracter faltante en la contraseña y pasa al siguiente.
 * @param {Number} horrocruxActual es el horrocrux que tenemos actualmente en frente
 * @returns pasa al siguiente horrocrux mediante la variable todosMuertos - caso true ganamos el juego
 */
function muerteHorrocrux(horrocruxActual) {
    let todosMuertos = false;
    switch (horrocruxActual) {
        case ID_DIARIO_TR:
            console.log("Acabaste con el Diario de Tom Riddle");
            break;
        case ID_ANILLO_G:
            console.log("Acabaste con el Anillo de Gaunt");           
            break;
        case ID_COPA_HH:
            console.log("Acabaste con la Copa Helga Hufflepuff");
            break;
        case ID_DIADEMA_RR:
            console.log("Acabaste con la diadema Ravena Ravenclaw");
            break;
        case ID_NAGINI:
            console.log("Acabaste con Nagini");           
            break;
    }
    return todosMuertos;
}
/**
 * Nos muestra el puntaje en salud, cordrura, así como el número de intento y nos pregunta sobre el caracter faltante
 * @param {Number} salud cantidad de salud del usuario
 * @param {Number} cordura cantidad de cordura del usuario 
 * @param {Number} intento número de intento
 * @param {Number} horrocruxActual el Horrocrux que tenemos delante actualmente 
 * @returns una variable que compararemos al caracter faltante.
 */
function generarDialogo(salud, cordura, intento, horrocruxActual) {
    let ingresoUsuario = "";
    console.log("### Salud: ", salud, "### Cordura: ", cordura, "### Intento: ", intento);
    console.log(horrocruxActual);
    ingresoUsuario = String(leer());
    return ingresoUsuario;
}
/**
 * Función que aplica cuando acertamos al caracter faltante de la contraseña (pase)
 * @param {Number} danioAcumulado acrescenta el daño que podemos recibir al matar un Horrocrux
 * @returns actualiza la variable danioAcumulado
 */
function ingresoOK(danioAcumulado) {
    console.log("correcto");
    danioAcumulado = danioAcumulado + INCREMENTO_PROB_DANIO_HORRO;
    console.log("Has acertado y destruido al Horrocrux. Atención! Su capacidad de daño aumentó a", danioAcumulado);
    return danioAcumulado;
}
/**
 * Muestra el mensaje de derrota
 */
function derrota(){
    console.log(MENSAJE_DERROTA);
}
/**
 * Muestra el mensaje de victoria sobre los Horrocruxes
 */
function victoria(){
    console.log(MENSAJE_VICTORIA);
}
/**
 * Función que aplica cuando no acertamos al caracter faltante en la contraseña (pase)
 * @param {Number} danioAcumulado el daño que puede causarnos el Horrocrux
 * @param {Number} salud la cantidad de salud que poseemos
 * @param {Number} cordura la cantidad de cordura que poseemos
 * @param {Number} intento número de intentos
 * @returns pasa al siguiente intento
 */
function ingresoErrado(danioAcumulado, salud, cordura, intento) {
    let danioTotalGen = 0;
    console.log("fallaste");
    danioTotalGen = Math.random();
    console.log("daño", danioTotalGen, danioAcumulado);
    if (danioTotalGen < danioAcumulado) {
        cordura = 0;
        salud = 0;
        intento = MAX_INTENTOS;
        derrota();
    } else {
        salud = salud - (salud * DANIO_SALUD);
        cordura = cordura - (cordura * DANIO_CORDURA);
        intento = intento + 1;
    }
    return intento;
}
/**
 * Función principal del juego
 */
function main() {
    let salud = PUNTOS_SALUD_MAX;
    let cordura = PUNTOS_CORDURA_MAX;
    let llave = "";
    let ingresoUsuario = "";
    let intento = 1;
    let danioAcumulado = PROB_DANIO_HORRO;
    let horrocruxActual = 1;
    let todosMuertos = false;
    console.log("*** Hoy vas a luchar contra los Horrocruxes");
    do {
        llave = generarHorrocrux(horrocruxActual);
        ingresoUsuario = generarDialogo(salud, cordura, intento, horrocruxActual);
        if (ingresoUsuario === llave) {
            danioAcumulado = ingresoOK(danioAcumulado);
            horrocruxActual = horrocruxActual + 1;
            intento = intento + 1;
            llave = generarHorrocrux(horrocruxActual);
            todosMuertos=muerteHorrocrux(horrocruxActual);
        } else {
            intento = ingresoErrado(danioAcumulado, salud, cordura, intento);
        }
    } while (llave != LLAVE_FIN && intento <= MAX_INTENTOS && todosMuertos != true);
}
main();