# Funcion Callback
Una funcion de **callback** es una funcion que se pasa como argumento otra funcion, para despues ser ejecutada.
Una funcion que recibe como parametro otra funcion es llamada **"Funcion de orden superior"** o **"high-order"**.
```javascript
    <!-- Callback         ↓↓↓↓↓-->
    function highOrder(MostrarSaludo){

    console.log(MostrarSaludo(), "daniel");
    
    }
```
## ¿Porque Utilizar Callbacks?
La gran mayoria de nuestro codigo se ejecuta de una manera sincrona, es decir se ejecuta una linea despues de otra, Usualmente cuando hacemos consultas a servidores externos desconocemos el tiempo que esta consulta tomara. Esta es una situacion donde las funciones callback pueden ser utiles.

## Ejemplos de callbacks
- .forEach
- .map
- .filter
- .findIndex
- setTimeOut
- setTimeInterval
