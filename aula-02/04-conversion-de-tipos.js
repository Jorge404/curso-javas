// TIPOS DE DATOS EN JS

//Alfanumerico

//const nombrePasajero = 'Pedro Silva'; //Variable tipo const que contiene Pedro Silva
//console.log(nombrePasajero); //Imprime nombrePasajero
//nombrePasajero = 'Ramon Silva'; //Inicializamos la variable nombrePasajero con el nombre 'Ramon Silva'
//console.log(nombrePasajero); //Imprimimos la variable nombrePasajero, pero javaScript nos mostrara ERROR!, ya que el tipo 'const' no se puede cambiar el valor
//Para eso usamos el tipo let

// let nombrePasajero = 'Pedro Silva';
// nombrePasajero = 'Ramon Silva'

//Numerico

let valorBoleto = 1000;
const impuestoAeropuerto = 100;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;
// console.log(valorBoleto);

//Logicos (true, false)
let boletoActivo= true;

//Operaciones aritmeticas
//suma
// let totalBoletos = valorBoleto + tasaEmbarque + gestionAgencia;
// console.log(totalBoletos);

//Orden de presedencia

// (), */, + -
let totalBoletoForma2 = (valorBoleto + impuestoAeropuerto) + (valorBoleto + impuestoAeropuerto)*porcentajeTasaEmbarque + gestionAgencia;
console.log(totalBoletoForma2);

//Concatenacion de texto


let nombrePasajero = 'Violeta';
let apellidoPasajero = 'Gonzalez';

let nombreCompleto = nombrePasajero + apellidoPasajero; //Concatena las cadenas de texto 'nombrePasajero' y 'apellidoPasajero'
let pasaporte = '1000' + '12'; //JS lo entiende como dos cadenas de texto y las concatena
let multiplicacion = parseInt('1000') / parseFloat('10'); //JS entiende que son valores numericos aun estando entre comillas
//Existen dos funciones parseInt y parseFloat, indica que lo que esta entre parentesis sera un numero de tipo flotante o de tipo entero(int)

console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);

let nosEsUnNumero = parseInt('ASDSSD');
console.log(nosEsUnNumero);
