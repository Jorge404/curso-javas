// PLantillas de Texto
const nombrePasajero = 'Violeta';
const apellidoPasajero = 'Gonzalez';

//Interpolacion de candenas
// formato ---> `${variable} ${variable}, ${....`
let nombreCompleto = `El nombre completo es ${nombrePasajero} ${apellidoPasajero}`; 
console.log(nombreCompleto);

//Inmutabilidad y conversion de tipo de datos en variables

let segundoPasajero = "Violeta";
console.log(`El nombre del segundo pasajero es ${segundoPasajero}`);
segundoPasajero = 123232323423;
console.log(`El nombre del segundo pasajero es ${segundoPasajero}`);