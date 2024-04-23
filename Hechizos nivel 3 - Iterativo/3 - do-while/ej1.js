const leer = require("prompt-sync")();
const PROB_DANIO_HORRO = .005;
const INCREMENTO_PROB_DANIO_HORRO = 0.0024;
const INTENTOS_ESTUDIANTE = 30;
const PUNTOS_CORDURA_MAX = 200;
const PUNTOS_SALUD_MAX = 400;
const DANIO_CORDURA = .057;
const DANIO_SALUD = .104;
const DIARIO_TR = "R1dd13?";
const ANILLO_G = "?G4unt!";
const COPA_HH = "H3l?ga!";
const DIADEMA_RR = "?R4vena";
const NAGINI = "N@9ini?";
const CANTIDAD_HORRO_INICIAL = 5;

const ID_DIARIO_TR = 1;
const ID_ANILLO_G = 2;
const ID_DIADEMA_RR = 4;
const ID_COPA_HH = 3;
const ID_NAGINI = 5;

let vida = true;
let vidaNagini = true;
let vidaDiademaRR = true;
let vidaAnilloG = true;
let vidaCopaHH = true;
let vidaDiarioTR = true;

/* function estaVivoHorrocrux(horrocrux, vida) {
    if (!vida && horrocrux<=4 && horrocrux>=1){
        horrocrux=horrocrux+1;
        
    } else if (!vida && horrocrux==5) {
        horrocrux=horrocrux-1;        
    } else {
        console.log(`no quedan mas horrocruxes vivos`);
    }
   
} */

function todosMuertos(){
    !vidaAnilloG && !vidaCopaHH && !vidaDiademaRR && !vidaDiarioTR && !vidaNagini;
}

function generarHorrocrux(horrocrux) {
    let llave = "";
    let pase = "";
    
        switch (horrocrux) {

            case ID_DIARIO_TR:
                if (vidaDiarioTR) {
                    console.log("*** Te enfrentarás al Diario de Tom Riddle.\nLa contraseña es", DIARIO_TR, "donde ? es un numero generado aleatoriamente entre -3 y 20.");
                    llave = String((Math.floor(Math.random() * 23)) - 3);
                    pase = DIARIO_TR.replace("?", llave);
                    console.log("La contraseña correcta es:", pase);
                } else {
                    horrocrux = horrocrux + 1;
                    generarHorrocrux(horrocrux);
                }


                break;
            case ID_ANILLO_G:
                if (vidaAnilloG) {
                    console.log("*** Te enfrentarás al Anillo de Gaunt.\nLa contraseña es", ANILLO_G, "donde ? es un numero generado aleatoriamente entre -100 y -70.");
                    llave = String((Math.floor(Math.random() * 30)) - 100);
                    pase = ANILLO_G.replace("?", llave);
                    console.log("La contraseña correcta es:", pase);
                } else {
                    horrocrux = horrocrux + 1;
                    generarHorrocrux(horrocrux);
                }
                break;
            case ID_COPA_HH:
                if (vidaCopaHH) {
                    console.log("*** Te enfrentarás a la Copa de Helga Hufflepuff.\nLa contraseña es", COPA_HH, "donde ? es un numero generado aleatoriamente entre 4 y 12.");
                    llave = String((Math.floor(Math.random() * 8)) + 4);
                    pase = COPA_HH.replace("?", llave);
                    console.log("La contraseña correcta es:", pase);
                } else {
                    horrocrux = horrocrux + 1;
                    generarHorrocrux(horrocrux);
                }
                break;
            case ID_DIADEMA_RR:
                if (vidaDiademaRR) {
                    console.log("*** Te enfrentarás a la Diadema de Rowena Ravenclaw.\nLa contraseña es", DIADEMA_RR, "donde ? es un caracter generado aleatoriamente entre a y e.");
                    llave = String.fromCharCode((Math.floor(Math.random() * 5)) + 97);
                    pase = DIADEMA_RR.replace("?", llave);
                    console.log("La contraseña correcta es:", pase);
                } else {
                    horrocrux = horrocrux + 1;
                    generarHorrocrux(horrocrux);
                }

                break;
            case ID_NAGINI:
                if (vidaNagini) {
                    console.log("*** Te enfrentarás a la Nagini.\nLa contraseña es", NAGINI, "donde ? es un caracter generado aleatoriamente entre H y K.");
                    llave = String.fromCharCode((Math.floor(Math.random() * 4)) + 72);
                    pase = NAGINI.replace("?", llave);
                    console.log("La contraseña correcta es:", pase);
                } else {
                    horrocrux = ID_DIARIO_TR;
                    generarHorrocrux(horrocrux);
                }

                break;
            default:
                console.log("otra opcion");
                break;
        }

        return llave;
    }

function muerteHorrocrux(horrocrux) {

    switch (horrocrux) {
        case ID_DIARIO_TR:
            console.log("Acabaste con el Diario de TR");
            vidaDiarioTR = false;
            break;
        case ID_ANILLO_G:
            console.log("Acabaste con el Anillo de G");
            vidaAnilloG = false;
            break;
        case ID_COPA_HH:
            console.log("Acabaste con la Copa HH");
            vidaCopaHH = false;
            break;
        case ID_DIADEMA_RR:
            console.log("Acabaste con la diadema RR");
            vidaDiademaRR = false;
            break;
        case ID_NAGINI:
            console.log("Acabaste con Nagini");
            vidaNagini = false;
            break;

    }

}


function main() {
    let salud = PUNTOS_SALUD_MAX;
    let cordura = PUNTOS_CORDURA_MAX;
    let horrocrux = 0;
    let llave = "";
    let ingresoUsuario = "";
    let intento = 1;
    let danioTotalGen = 0;
    let danioAcumulado = PROB_DANIO_HORRO;
    console.log("*** Hoy vas a luchar contra los Horrocruxes");
    do {

        console.log("### Salud: ", salud, "### Cordura: ", cordura, intento);
        horrocrux = Math.floor(Math.random() * CANTIDAD_HORRO_INICIAL) + 1;
        console.log(horrocrux);
        llave = generarHorrocrux(horrocrux);
        ingresoUsuario = String(leer());
        if (ingresoUsuario === llave) {
            console.log("correcto");
            console.log("Has acertado y destruido al Horrocrux. Atención! Su capacidad de daño aumentó!");
            danioAcumulado = PROB_DANIO_HORRO + INCREMENTO_PROB_DANIO_HORRO;
            muerteHorrocrux(horrocrux);
          
            intento = intento + 1;
        } else {
            console.log("fallaste");
            danioTotalGen = Math.random();
            console.log("daño", danioTotalGen);
            if (danioTotalGen < danioAcumulado) {
                console.log("El Horrocrux ha consumido todas tus energías.", danioTotalGen);
                cordura = 0;
                salud = 0;
                intento = 30;
            }
            else {
                salud = salud - (salud * DANIO_SALUD);
                cordura = cordura - (cordura * DANIO_CORDURA);
                intento = intento + 1;
            }
        }





    }
    while (intento <= 10 && salud >= 1 && cordura >= 1 || todosMuertos());
    console.log("Juego finalizado.");

}
main();