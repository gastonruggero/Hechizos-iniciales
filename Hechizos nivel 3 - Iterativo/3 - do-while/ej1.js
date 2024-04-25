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
const MAX_INTENTOS=30;
const ID_DIARIO_TR = 1;
const ID_ANILLO_G = 2;
const ID_COPA_HH = 3;
const ID_DIADEMA_RR = 4;
const ID_NAGINI = 5;



function generarHorrocrux(horrocruxActual) {
    let llave = "";
    let pase = "";

    switch (horrocruxActual) {

        case ID_DIARIO_TR:
            console.log("*** Te enfrentarás al Diario de Tom Riddle.\nLa contraseña es", DIARIO_TR, "donde ? es un numero generado aleatoriamente entre -3 y 20.");
            llave = String((Math.floor(Math.random() * 23)) - 3);
            pase = DIARIO_TR.replace("?", llave);
            console.log("La contraseña correcta es:", pase);
            break;
        case ID_ANILLO_G:

            console.log("*** Te enfrentarás al Anillo de Gaunt.\nLa contraseña es", ANILLO_G, "donde ? es un numero generado aleatoriamente entre -100 y -70.");
            llave = String((Math.floor(Math.random() * 30)) - 100);
            pase = ANILLO_G.replace("?", llave);
            console.log("La contraseña correcta es:", pase);
            break;
        case ID_COPA_HH:
            console.log("*** Te enfrentarás a la Copa de Helga Hufflepuff.\nLa contraseña es", COPA_HH, "donde ? es un numero generado aleatoriamente entre 4 y 12.");
            llave = String((Math.floor(Math.random() * 8)) + 4);
            pase = COPA_HH.replace("?", llave);
            console.log("La contraseña correcta es:", pase);
            break;
        case ID_DIADEMA_RR:
            console.log("*** Te enfrentarás a la Diadema de Rowena Ravenclaw.\nLa contraseña es", DIADEMA_RR, "donde ? es un caracter generado aleatoriamente entre a y e.");
            llave = String.fromCharCode((Math.floor(Math.random() * 5)) + 97);
            pase = DIADEMA_RR.replace("?", llave);
            console.log("La contraseña correcta es:", pase);
            break;
        case ID_NAGINI:
            console.log("*** Te enfrentarás a la Nagini.\nLa contraseña es", NAGINI, "donde ? es un caracter generado aleatoriamente entre H y K.");
            llave = String.fromCharCode((Math.floor(Math.random() * 4)) + 72);
            pase = NAGINI.replace("?", llave);
            console.log("La contraseña correcta es:", pase);
            break;
        default:
            console.log("Derrotaste a todos los Horrocruxes");
            llave = LLAVE_FIN;
            break;
    }

    return llave;
}

function muerteHorrocrux(horrocruxActual) {
    let todosMuertos = false;
    switch (horrocruxActual) {
        case ID_DIARIO_TR:
            console.log("Acabaste con el Diario de TR");
            
            break;
        case ID_ANILLO_G:
            console.log("Acabaste con el Anillo de G");
            vidaHorrocrux = false;
            break;
        case ID_COPA_HH:
            console.log("Acabaste con la Copa HH");
            
            break;
        case ID_DIADEMA_RR:
            console.log("Acabaste con la diadema RR");
            
            break;
        case ID_NAGINI:
            console.log("Acabaste con Nagini");
            vidaHorrocrux = true;
            break;


    }

    return todosMuertos;
}
function generarDialogo(salud, cordura, intento, horrocruxActual) {
    let ingresoUsuario = "";
    console.log("### Salud: ", salud, "### Cordura: ", cordura, intento);
    console.log(horrocruxActual);
    
    ingresoUsuario = String(leer());
    return ingresoUsuario;
}
function ingresoOK(danioAcumulado) {

    console.log("correcto");
    danioAcumulado = danioAcumulado + INCREMENTO_PROB_DANIO_HORRO;
    console.log("Has acertado y destruido al Horrocrux. Atención! Su capacidad de daño aumentó a", danioAcumulado);
    return danioAcumulado;
}
function ingresoErrado(danioAcumulado, salud, cordura,intento) {
    let danioTotalGen=0;
    console.log("fallaste");
                danioTotalGen = Math.random();
            console.log("daño", danioTotalGen, danioAcumulado);
            if (danioTotalGen < danioAcumulado) {
                console.log("El Horrocrux ha consumido todas tus energías.", danioTotalGen);
                cordura = 0;
                salud = 0;
                intento=MAX_INTENTOS;

            } else {
                salud = salud - (salud * DANIO_SALUD);
                cordura = cordura - (cordura * DANIO_CORDURA);  
                intento = intento + 1;              
            }
            return intento;    
}

function main() {
    let salud = PUNTOS_SALUD_MAX;
    let cordura = PUNTOS_CORDURA_MAX;
    let llave = "";
    let ingresoUsuario = "";
    let intento = 1;
    let danioAcumulado = PROB_DANIO_HORRO;
    let horrocruxActual = 1;
    let todosMuertos=false;

    console.log("*** Hoy vas a luchar contra los Horrocruxes");
    do {
        llave = generarHorrocrux(horrocruxActual);
        ingresoUsuario = generarDialogo(salud, cordura, intento, horrocruxActual);

        if (ingresoUsuario === llave) {
            danioAcumulado = ingresoOK(danioAcumulado);
            horrocruxActual = horrocruxActual + 1;
            intento = intento + 1;
            llave=generarHorrocrux; 
                  
        } else {
            intento=ingresoErrado(danioAcumulado,salud, cordura,intento);
           
            
        }
    } while (llave != LLAVE_FIN && intento <= MAX_INTENTOS && todosMuertos!=true);

}



main();