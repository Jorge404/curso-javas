// const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "MonteVideo");
// const precioCiudad = new Array(500, 400, 300, 200);

const presupuestoDisponible = 800;
const datos = [
    {
        'ciudad':'Bogota',
        'precio': '1000'
    },
    {
        'ciudad':'Lima',
        'precio':'200'
    },
    {
        'ciudad':'Santiago',
        'precio':'600'
    },
    {
        'ciudad':'MonteVideo',
        'precio':'800'
    }, 
]
// while 0 o mas veces
// Do while.... 1 o mas veces

let i = 0;
// while (i < datos.length && datos[i].precio > presupuestoDisponible) {
//     i++;
// }
// if (i == datos.length) {
//     console.log('No tenemos pasajes disponibles');
// }else
// console.log(`Puedes comprar pasaje para: ${datos[i].ciudad}`);
ciudadSeleccionada = '';

do{
    if (datos[i].precio < presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
        break;
    }
    i++;
}while(i < datos.length && ciudadSeleccionada == '');

if (ciudadSeleccionada == '') {
        console.log('No tenemos pasajes disponibles');
    }else{
        console.log(`Puedes comprar pasaje para: ${datos[i].ciudad}`);
    }