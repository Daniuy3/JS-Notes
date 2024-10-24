/* Esta es la funcion callback que utilizaremos */
function mostrarSaludo(){
    return 'Hola: ';
}

/* Esta es la funcion de orden superior que recibe un callback */
function highOrder(callback){
    /* Aqui es donde mandas a llamar la funcion que recibe como parametro */
    console.log(callback(), "daniel");
}

/* Mandamos a llamar la funcion de orden superior y le pasamos como parametro la funcion callback */

highOrder(mostrarSaludo); // Hola: daniel
/* lo que veras en pantalla es lo siguiente:
    Estoy en la funcion hola
    Estoy en la funcion highOrder
    Hola: daniel
*/