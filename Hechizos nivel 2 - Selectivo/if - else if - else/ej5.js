const leer = require("prompt-sync")();

/**
 * Ej 5
 * Permiso para Visitar Hogsmeade:
 * Pide al estudiante su edad y si tiene permiso de sus padres, y verifica si puede visitar el pueblo de Hogsmeade.
 * Solo a partir de los 13 años, y con permiso de los padres, o 17 años tendra permitido realizar la actividad
 * 
 * Por ejemplo si tiene 12 años y con permiso de los padres no le sera permitido, si tiene 14 y no cuenta con permiso de los padres no le sera permitido, en otro caso si tiene 18 puede realizar la actividad
 */


function main() {
    let edad = 0;
    let permiso = "";
    console.log("Qué edad tienes?");
    edad = Number(leer());
    if (edad > 13 && edad < 17) {
        console.log("Posees permiso para visitar Hogsmeade? (S) o (N)");
        permiso = leer();
        if (permiso == "S" || permiso == "s") {
            console.log("Puedes ingresar a Hogsmeade con tu permiso.")
        } else if (permiso == "N" || permiso == "n") {
            console.log("No puedo dejarte ingresar")
        }
    } else if (edad > 17) {
        console.log("Puedes ingresar ya que eres mayor de 17 años");
    } else if (edad < 13) {
        console.log("No puedo dejar ingresar a menores de 13 años.")
    }
}


main();