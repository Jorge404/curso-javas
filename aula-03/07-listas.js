// Gestion de datos del mismo tipo

//Definicion de una lista con tipo de dato alfanumerico
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago");
console.log(ciudadesDisponibles);

//Definicion de una lista de forma abreviada

const paisesDisponibles = ["Colombia", "Peru", "Mexico", "Argentina"];
console.log(paisesDisponibles);

{
// Funcion push para agregar elementos al final de la lista

    paisesDisponibles.push("Uruguay");
    ciudadesDisponibles.push("Montevideo");

    // Funcion unshift para agregar elementos al inicio de la lista
    paisesDisponibles.unshift("Ecuador");
    ciudadesDisponibles.unshift("Quito");
    console.log(paisesDisponibles);
    console.log(ciudadesDisponibles);
    
    // Borrar elementos de una lista
    // MOstrando el primer elemento de la lista
    console.log(paisesDisponibles[0]);
    console.log(ciudadesDisponibles[0]);
}

// Funcion splice

paisesDisponibles.splice(1, 2, 'Venezuela', 'Paraguay');
console.log(paisesDisponibles);