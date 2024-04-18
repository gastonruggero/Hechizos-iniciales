const leer = require("prompt-sync")();
const MAX_ATAQUE = 3;
const MAX_ATAQUE_DEMENTORES = 5;
const POS_ATAQUE = 3;
const MAX_ESTUDIANTE = 6;
const MAX_LASTRE = 6;


/**
 * Ej 2
 * te enfrentarás a un desafío único y emocionante. Te encuentras en un oscuro y tormentoso bosque, rodeado de la neblina que parece estar cargada de misterio y peligro. En este bosque, los temidos Dementores, criaturas de la oscuridad que se alimentan de la felicidad y los recuerdos alegres, están acechando.

Eres un valiente estudiante de Hogwarts, y tu misión es defender tu propia felicidad y los recuerdos alegres al igual que de una persona querida contra los Dementores. Pero ten cuidado, estos seres malignos no dudarán en atacarte y tratar de absorber tu felicidad y la de tu ser querido.

El desafío comienza ahora. Te encontrarás en un enfrentamiento constante contra los Dementores. Para defenderte, deberás ingresar números aleatorios entre 0 y 3. Si adivinas correctamente el número aleatorio generado por los Dementores, lograrás defenderte y proteger tus recuerdos.

Pero aquí hay un giro: si los Dementores lanzan más de cinco ataques, existe la posibilidad de que aparezca una persona misteriosa para ayudarte a derrotar a los Dementores y restaurar la paz en el bosque.

Recuerda, tanto tú como tu ser querido pueden recibir ataques de los Dementores, pero solo uno a la vez, a menos que ocurra un número especial que permita atacar a los dos al mismo tiempo. Si tu felicidad y recuerdos alegres llegan a cero o la de tu ser querido entonces es el fin para ambos. Mantén tu concentración y tu valentía mientras te enfrentas a este desafío.

¿Estás listo para adentrarte en esta emocionante aventura y demostrar tu valentía contra las fuerzas oscuras? ¡Adelante, el destino del bosque dependen de vos!
 */


function main() {
    let numAtaqueIng = 0;
    let numAtaqueGen = 0;
    let ataqueDementores = 0;
    let blancoDementores = 0;
    let estudiante = MAX_ESTUDIANTE;
    let lastre = MAX_LASTRE;
    let ayuda = 1;
    console.log("*** Comienza un ataque de Dementores :( ***");
    console.log("Estudiante: ", estudiante, " Lastre: ", lastre);
    while (ataqueDementores < MAX_ATAQUE_DEMENTORES && estudiante >= 1 && lastre >= 1) {
        console.log("### Ingresa un número entre 0 y ", MAX_ATAQUE, " para lanzar un ataque");
        numAtaqueGen = Math.floor(Math.random() * MAX_ATAQUE);
        numAtaqueIng = leer();
        if (numAtaqueIng == numAtaqueGen) {
            console.log(numAtaqueGen);
            console.log("**** Te defendiste con éxito!");
        } else {
            ataqueDementores = ataqueDementores + 1;
            blancoDementores = Math.floor(Math.random() * POS_ATAQUE) + 1;
            // 1 ataca al estudiante - 2 al lastre - 3 a ambos // 
            console.log(blancoDementores);
            switch (blancoDementores) {
                case 1:
                    console.log("Has sido atacado :(");
                    console.log("Los Dementores han atacado",ataqueDementores,"veces.");
                    estudiante = estudiante - 1;
                    console.log("Estudiante: ", estudiante, " Lastre: ", lastre);
                    break;
                case 2:
                    console.log("Atacaron al lastre :(");
                    console.log("Los Dementores han atacado",ataqueDementores,"veces.");
                    lastre = lastre - 1;
                    console.log("Estudiante: ", estudiante, " Lastre: ", lastre);
                    break;
                case 3:
                    console.log("Ambos han sido atacados :o");
                    console.log("Los Dementores han atacado",ataqueDementores,"veces.");
                    lastre = lastre - 1;
                    estudiante = estudiante - 1;
                    console.log("Estudiante: ", estudiante, " Lastre: ", lastre);
                    break;
                default:
                    break;
            }

        }
    }
    //genero la posibilidad de ayuda -- 1 si -- 2 no
ayuda = Math.floor(Math.random()*2)+1;
switch (ayuda) {
    case 1:
        console.log("Recibirás ayuda de un ser misterioso");
        break;
    case 2:
        console.log("Estás más solo que Kung-fu");
        break;
    default:
        break;
}
}


main();