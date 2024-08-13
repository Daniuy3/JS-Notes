# Promises
una promesa es utilizada para facilitar el manejo de codigo asincrono, gracias a su facilidad durante el manejo de errores, ya que a diferencia de los callback estos te permiten acceder a los metodos **"then"** y **"catch"**

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