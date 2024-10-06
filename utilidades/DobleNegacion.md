# Doble Negacion

En JS en algunas ocasiones queremos utilizar un valor como validacion en ciertos casos por ejemplo:

```javascript
    if(variable){
        /// codigo a ejecutar
    }
```

Pero en ciertos casos esto podria no ser la mejor opcion, por ejemplo, cuando queremos utilizar un arreglo como variable de validacion JavaScript puede confundir ciertas cosas

```javascript
    const tuArreglo = [1,2,3] 
    if(tuArreglo){
        /// codigo a ejecutar
    }
```
Esto podria generar problemas en ciertos casos, ¿Como podemos arreglarlo?
Aqui es donde entra la doble negacion, esto nos permite convertir una variable en un valor boolean:
```javascript
    const tuArreglo = [1,2,3] 
    if(!!tuArreglo){
        /// codigo a ejecutar
    }
```
en este ejemplo el arreglo que se toma como condicion en el if sera un boolean en lugar de un array, evitando ciertos errores que pueden llegar a suceder al usar arreglos y variables como condiciones.