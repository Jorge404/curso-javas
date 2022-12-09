
// For .... valor inicial hacia un valor final

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
let i = 0;
ciudadSeleccionada = '';
for (let i = 0; i < datos.length; i++) {
    if (datos[i].precio < presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
        break;
    }
    
}

// do{
//     if (datos[i].precio < presupuestoDisponible) {
//         ciudadSeleccionada = datos[i].ciudad;
//         break;
//     }
//     i++;
// }while(i < datos.length && ciudadSeleccionada == '');

if (ciudadSeleccionada == '') {
        console.log('No tenemos pasajes disponibles');
    }else{
        console.log(`Puedes comprar pasaje para: ${datos[i].ciudad}`);
    }