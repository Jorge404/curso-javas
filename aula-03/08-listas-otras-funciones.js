//Definicion de una lista con tipo de dato alfanumerico
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "MonteVideo");
console.log(ciudadesDisponibles);

//Definicion de una lista de forma abreviada

const paisesDisponibles = ["Colombia", "Peru", "Mexico", "Argentina", "Uruguay", "Venezuela"];
console.log(paisesDisponibles);

// Funcion length (Para numero de elementos de una lista)
const cantidadCiudades = ciudadesDisponibles.length;
console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(`En la lista de paises tenemos ${paisesDisponibles.length} elementos`);

// Remover el primer elemento con (shift) 

ciudadesDisponibles.shift();
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);
console.log(`${ciudadesDisponibles}`);

// Remover el ultimo elemento con (pop)

ciudadesDisponibles.pop();
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);
console.log(`${ciudadesDisponibles}`);

// Filtro de elementos de la lista

const paisesFiltrados = paisesDisponibles.filter((e)=> e == 'Mexico');
console.log(paisesFiltrados);

// unificar los elementos en una cadena de caracteres, funcion join
console.log(paisesDisponibles.join('-'));

// Ordenar la lista
console.log(paisesDisponibles.sort());

// Conociendo la posicion

console.log(`Peru esta en la posicion : ${paisesDisponibles.indexOf('Peru')}`);

// Unificar dos listas
const paisesyCiudades = paisesDisponibles.concat(ciudadesDisponibles);

console.log('Lista de Paises y Ciudades');
console.log(paisesyCiudades);
