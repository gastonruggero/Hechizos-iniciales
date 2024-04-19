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
const CANTIDAD_HORRO = 5;

const ID_DIARIO_TR = 1;
const ID_ANILLO_G = 2;
const ID_DIADEMA_RR = 4;
const ID_COPA_HH = 3;
const ID_NAGINI = 5;

function generarHorrocrux(horrocrux) {

    let llave = "";
    let pase = "";

    switch (horrocrux) {
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
            console.log("*** Te enfrentarás a la Nagini.\nLa contraseña es", NAGINI, "donde ? es un caracter generado aleatoriamente entre H y K.");
            llave = String.fromCharCode((Math.floor(Math.random() * 4)) + 72);
            pase = NAGINI.replace("?", llave);
            break;
        default:
            console.log("otra opcion");
            break;
    }
    return pase;
}

function main() {
    let salud = PUNTOS_SALUD_MAX;
    let cordura = PUNTOS_CORDURA_MAX;
    let horrocrux = 0;
    let pase = "";
    let ingresoUsuario = "";
    let intento=0;
    let estadoMision=false;
    let danioSaludGen=0;
    let danioTotalGen=0;
   
    console.log("*** Hoy vas a luchar contra los Horrocruxes");
    
    do {
        console.log("### Salud: ", salud, "### Cordura: ", cordura);
        horrocrux = Math.floor(Math.random() * 5) + 1;
        pase = generarHorrocrux(horrocrux);
        ingresoUsuario = String(leer());
        if (ingresoUsuario == pase) {
            console.log("correcto");
            estadoMision=true;
        } else {
            console.log("fallaste");
            estadoMision=false;
        }
    
        console.log("La contraseña correcta es:", pase);
      
    } while (intento<1);
    if (!estadoMision){
        danioTotalGen=Math.random();
        if (danioTotalGen<PROB_DANIO_HORRO){
            console.log("El Horrocrux ha consumido todas tus energías.");
        }
    }




}





main();