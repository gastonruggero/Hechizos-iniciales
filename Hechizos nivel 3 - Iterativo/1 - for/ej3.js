const leer = require("prompt-sync")();
const CANT_SR=3;
const CANT_PCB=5;
const CANT_PGN=1;
const CANT_CDS=2;
const CANT_IP=5;
/**
 * Ej 3
 * La preparación de pociones es una habilidad esencial enseñada en la clase de Pociones de Hogwarts. Cada poción requiere una combinación precisa de ingredientes y una ejecución exacta de los pasos para ser exitosa. En este ejercicio, nos sumergiremos en la atmósfera de la clase de Pociones, donde los estudiantes aprenderán a preparar una de las pociones más icónicas: la poción Multijugos. Para preparar esta poción, los estudiantes deben seguir la receta exacta y medir cuidadosamente las cantidades de cada ingrediente. Cada ingrediente tiene un límite de intentos definido, y solo si se logra ingresar la cantidad correcta del ingrediente previo, el estudiante puede avanzar al siguiente. Si el estudiante no logra ingresar la cantidad correcta de un ingrediente dentro de los intentos permitidos, la preparación de la poción fallará y el proceso se verá interrumpido. Solo aquellos estudiantes que sean precisos y persistentes podrán dominar la preparación de la poción Multijugos y disfrutar de sus efectos transformadores.
 * 
 * Receta de la Poción Multijugos:
 * Ingredientes:
 * 3 sanguijuelas reventadas
 * 5 unidades de pulverizado de cuerno de Bicornio
 * 1 pelo de gato negro
 * 2 colas de serpiente
 * 
 * Instrucciones:
    Agrega las 3 sanguijuelas reventadas a la caldera.
    Agita la mezcla lentamente durante 30 segundos en dirección horaria.
    Incorpora las 5 unidades de pulverizado de cuerno de Bicornio y remueve con la cuchara de palo.
    Añade el pelo de gato negro y mezcla suavemente en sentido antihorario durante 1 minuto.
    Por último, agrega las 2 colas de serpiente y revuelve vigorosamente durante 2 minutos.
    Deja que la poción repose durante 5 minutos antes de su uso.
 * 
 */


function main() {
   let sanguijuelasIngresadas=0;
   let intentos=0;
   let unidadesPCB=0;
   console.log("Hoy prepararemos poción Multijugos!");
   
   for (intentos = 1; intentos <= CANT_IP; intentos++) {
      console.log("-Cuántas sanguijuelas reventadas son necesarias?");
      sanguijuelasIngresadas=leer();
      if (sanguijuelasIngresadas==CANT_SR) {
         console.log("* Agrega las",CANT_SR, "sanguijuelas reventadas a la caldera.\n* Agita la mezcla lentamente durante 30 segundos en dirección horaria.");
         intentos=CANT_IP;
               } else {
         console.log("x Fallaste. Tienes otro intento.");
         
      }
      
   }
   for (intentos = 1; intentos <= CANT_IP; intentos++) {
      console.log("-Cuántas unidades de polvo de cuerno de Bicornio son necesarias?");
      unidadesPCB=leer();
      if (unidadesPCB==CANT_PCB) {
         console.log("* Agrega las", CANT_PCB,"unidades de polvo de cuerno de Bicornio a la caldera.\n* Remueve con la cuchara de palo.");
         intentos=CANT_IP;
               } else {
         console.log("x Fallaste. Tienes otro intento.");
         
      }
      
   }
   for (intentos = 1; intentos <= CANT_IP; intentos++) {
      console.log("-Cuántos pelos de gato negro son necesarios?");
      PGNIngresadas=leer();
      if (PGNIngresadas==CANT_PGN) {
         console.log("* Agrega los",CANT_PGN, "pelos de gato negro necesarios.\n* Mezcla suavemente 1 minuto en dirección antihoraria.");
         intentos=CANT_IP;
               } else {
         console.log("x Fallaste. Tienes otro intento.");
         
      }
      
   }
   for (intentos = 1; intentos <= CANT_IP; intentos++) {
      console.log("-Cuántas colas de serpiente son necesarias?");
      CDSIngresadas=leer();
      if (CDSIngresadas==CANT_CDS) {
         console.log("* Agrega las",CANT_CDS, "colas de serpiente a la caldera.\n* Revuelve vigorosamente durante 2 minutos.\n*Deja reposar la poción durante 5 minutos y estará lista para usar.");
         intentos=CANT_IP;
               } else {
         console.log("x Fallaste. Tienes otro intento.");
         
      }
      
   }

}


main();