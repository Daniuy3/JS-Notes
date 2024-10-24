# Promises
Una promesa en JS es un objeto que representa la eventual finalizacion de una operacion asincrona. Escencialmente es una forma de manejar codigo asincrono de una manera mas elegante y legible que las callbacks tradicionales

Las promesas tienen tres estados
- Pending: estado inicial, ni cumplido ni rechazado
- Fulfilled: la operacion se completo con exito
- Rejected: la operacion fallo

### Creacion de una promesa
Una promesa se crea utilizando el constructor Promise
``` javascript
const miPromesa = new Promise((resolve, reject) => {
  // Operación asíncrona
  setTimeout(() => {
    const exito = true;
    if (exito) {
      resolve("Operación completada");
    } else {
      reject("Error en la operación");
    }
  }, 1000);
});

miPromesa
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error));
```

## Resolve y Reject

Al declarar la promesa se utiliza un callback, que recibe como parametros dos elementos, **"resolve"** y **"reject"**. 

Basicamente ambos son un return, con la diferencia que son utilizados en diferentes casos
- **reject**: Lo utilizas para devolcer un valor en caso de que la promesa falle.
- **resolve**: es el valor que retornas cuando no hubo ningun error durante el proceso

## Catch, Then y Finally
Cuando mandas a llamar la ufuncion que retorna una promesa, automaticamente tienes acceso a diversos metodos, resultado de las promesas.

- **Then**: Es el codiugo que se ejecutara en el caso de que la promesa se resuelva correctamente (lo que retornamos con resolve).
- **Catch**: Es el codigo que se ejecutara en caso de que la promesa sea rechazada (por medio del reject)
- **Finally**: Es el codigo que se ejecutara cuando la promesa sea finalizada, sin imnportar si es rechazada o resuelta, este codigo se mandara a llamar cuando "finalice"