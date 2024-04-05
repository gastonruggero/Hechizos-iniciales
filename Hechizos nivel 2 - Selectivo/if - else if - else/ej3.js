const leer = require("prompt-sync")();

/**
 * Ej 3 
 * Examen de Herbología:
 * Pide al estudiante el nombre de la planta que encontro y determina si es apta para el examen de Herbología.
 * Si es Mandrágora o Valeriana entonces son aptas
 * Si son Bubotuber o Whomping Willow es necesario informar que no es posible debido a lo peligrosas que son
 * Cualquier otro tipo de planta no sera aceptada
 * 
 * Por ejemplo si el estudiante quiere traer un Whomping Willow no podra hacer el examen, en otro caso si trae una Valeriana se le otorgara el permiso
 */


function main() {
    let planta="";
    console.log("Qué planta encontraste?");
    planta=leer();
    if (planta=="Mandragora" || planta=="Valeriana"){
        console.log("Tu planta es apta para el examen");
    }    else if (planta=="Bobotuber" || planta=="Whompling Willow"){
        console.log("No te será posible rendir el examen ya que son plantas muy peligrosas!");
    } else {
        console.log("No aceptamos ese tipo de planta :(");
    }
}


main();