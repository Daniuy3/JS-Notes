const data = [
    {
        name: 'John Doe',
        age : 30,
        id: 1
    },
    {
        name: 'Jane Doe',
        age : 25,
        id: 2
    },
    {
        name: 'Jim Doe',
        age : 35,
        id: 3
    }
];

const fetchData  = () =>{
    return new Promise((resolve, reject) =>{
        /* Una buena practica es comenzar con el caso de error, y despues ejecutar el codigo en caso de no tener errores */
        if(data.length === 0){
            /* Reject es como un return que se utiliza en caso de que algo salga mal */
            reject('No data found')
        }

        setTimeout(() =>{
            /* Resolve es como un return que se utiliza en caso de que todo salga bien */
            resolve(data)
        }, 2000)
        
    })
}

console.log('Fetching data...')

async function fetchDataAsync(){
    try{
        /* Await basicamente pausa el codigo en esta parte, hasta que se resuelva la promesa */
        const data = await fetchData();
        console.log(data);
    }
    catch(error){
        console.log(error)
    }
}   
/* 
    explica para que se utiliza el async y el await:
    Se utiliza para poder hacer peticiones asincronas de manera mas sencilla y legible
    ya que el await pausa el codigo hasta que la promesa se resuelva, y el async se utiliza
    para poder utilizar el await dentro de una funcion


*/
fetchDataAsync();
    
