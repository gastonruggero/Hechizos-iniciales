const leer = require("prompt-sync")();
const DEMENTOR_MAX=1000;
const ESTU_MAX=350;
const DANIO_ESTU=75;
const DANIO_DEMENTOR=267;
const TURNOS_MAX=5;
const HECHIZO_CORRECTO="Patronus";
/**
 * Ej 2
 * Los Dementores son criaturas oscuras que se alimentan de la felicidad de las personas, dejándolas con recuerdos dolorosos y desesperación. Para protegerse de los Dementores, los estudiantes de Hogwarts aprenden el hechizo Patronus, que repele a estas criaturas y los aleja con recuerdos felices. En este ejercicio, simularemos un encuentro con un Dementor en un mini juego donde un estudiante debe lanzar el hechizo Patronus correctamente para repeler al Dementor y proteger su felicidad. Dependiendo de la cantidad de vida del estudiante, se necesitará ingresar el hechizo Patronus varias veces para vencer al Dementor. Si el estudiante no ingresa el hechizo correctamente, perderá turnos y el Dementor consumirá su felicidad y recuerdos felices, acercándose más a la derrota del estudiante. En otro caso si el estudiante ingresa bien los hechizos y logra vencer al dementor entonces se mostrar un mensaje de victoria
 * 
 * Vida maxima del dementor: 1000
 * Vida maxima del estudiante: 350
 * Daño por turno perdido del dementor al estudiante: 75
 * Daño por hechizo acertado del estudiante contra dementor: 267
 * Turnos totales: 5 
 */
let turnos=0;
let hechizo="";
let dementorVida=DEMENTOR_MAX;
let estuVida=ESTU_MAX;

function main() {
    console.log("Estudiante:"+estuVida+"\nDementor:"+dementorVida);
    for (let turnos = 1; turnos <= TURNOS_MAX; turnos++) {
            console.log("ingrese su hechizo");
            hechizo=leer();
            if (hechizo=="Patronus"){
                console.log("Hechizo correcto!");
                dementorVida=dementorVida-DANIO_DEMENTOR;
                console.log("Estudiante:"+estuVida+"\nDementor:"+dementorVida);
                if (dementorVida<0){
                    console.log("Has derrotado al Dementor");
                    turnos=TURNOS_MAX;
                }} else {
                    console.log("Hechizo incorrecto");
                    estuVida=estuVida-DANIO_ESTU;
                    console.log("Estudiante:"+estuVida+"\nDementor:"+dementorVida);
                    if (estuVida<0){
                        console.log("Has muerto en el intento");
                        turnos=TURNOS_MAX;
                    }
                
            }
    }
    
}


main();