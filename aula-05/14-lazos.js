const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "MonteVideo");
const precioCiudad = new Array(500, 400, 300, 200);
const presupuestoDisponible = 190;

// while 0 o mas veces
// Do while.... 1 o mas veces

let i = 0;
while (precioCiudad[i] > presupuestoDisponible && i < ciudadesDisponibles.length) {
    i++;
}
if (i == ciudadesDisponibles.length) {
    console.log('No tenemos pasajes disponibles');
}else
console.log(`Puedes comprar pasaje para: ${ciudadesDisponibles[i]}`);