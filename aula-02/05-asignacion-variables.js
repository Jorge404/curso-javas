// Palabra reservada const: Espacio de memoria que luego de asignar su valor no cambia en el tiempo
const valorPasaje = 1650;

console.log(valorPasaje);

const nombrePasajero = 'Violeta';
const apellidoPasajero = 'Gonzalez';

console.log(nombrePasajero);
console.log(apellidoPasajero);

//Palabra reservada let
// Espacio de memoria que puede cambiar durante la ejecucion del programa
let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
console.log(nombreCompletoPasajero);

// Palabra reservada var
// // Palabra reservada const: Espacio de memoria que luego de asignar su valor no cambia en el tiempo
// El alcance
var nombreCompletoPasajero2 = nombrePasajero + " " + apellidoPasajero;

//BLOQUE
{
    let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
    console.log(nombreCompletoPasajero);
}
// console.log(nombreCompletoPasajero);
// nombreCompletoPasajero no se imprime fuera del bloque porque su alcance no se lo permite