/* 
    Aqui simularemos una consulta a una base de datos, usando funciones callback
*/
/* Estos son los datos que simularemos obtener desde la base de datos */
const data = [
    {
        id: 1,
        name: 'Daniel'
    },
    {
        id: 2,
        name: 'Juan'
    },
    {
        id: 3,
        name: 'Pedro'
    }
];

/* Esta es la funcion que simula la consulta a la base de datos */
function consultaBD(callback){
    console.log('Consulta a la base de datos');


    /* Este sera el resultado de la consulta (los datos) */
    const fetchedData = data;

    /* Si no se obtuvieron datos, mostramos un mensaje de error */
    if(!fetchedData){
        console.log('Error al consultar la base de datos');
    }


    /* Simulamos un tiempo de espera de 2 segundos */
    setTimeout(function(){
        callback(fetchedData);
    }, 2000);
}

function mostrarDatos(data){
    console.log('Mostrando datos');
    /* Mostramos los datos obtenidos */
    data.forEach(function(item){
        console.log(item.id, item.name);
    });
}

consultaBD(mostrarDatos); 
// Mostrando datos
// 1 Daniel
// 2 Juan
// 3 Pedro