# Closures y Scope
## ¿Qué es el scope?
El alcance que determina la accesibilidad de las variables. Se refiere al contexto en el cual se definen las variables y se determina la accesibilidad. Básicamente el scope define desde donde puedes acceder a ciertas variables y funciones el el código.

### Global Scope
Son las variables definidas en el ámbito global y que son accesibles desde cualquier parte del código.

```javascript
    var globalVar = "I'm global";
    function test() {
        console.log(globalVar); // "I'm global"
    }
```

### Fuction Scope
Las variables definidas dentro de una función son accesibles solo dentro de esa función

```javascript
    function test() {
        var localVar = "I'm local";
        console.log(localVar); // "I'm local"
    }

    console.log(localVar);
```

Se debe tener cuidado al momento de declarar una variable dentro de un scope. Ya que si no se inicializa con una palabra reservada esta variable pasara automaticamente al scope global.

```javascript
    function test() {
        localVar = "I'm local"; // Aqui no se declaro con "var"
        console.log(localVar); // "I'm local"
    }
    /* ↓ Se puede acceder a ella en el scope global */
    console.log(localVar); // "i'm local"
```

### Block Scope
Se refiere a las variables definidas con let y const dentro de bloques {} como bucles o condicionales son accesibles solo dentro de ese bloque.

```javascript
    if (true) {
        let blockVar = "I'm block scoped";
        console.log(blockVar); // "I'm block scoped"
    }

    console.log(blockVar); /* Undefined */
```

### Reglas del Scope

- Cada función crea un ambito local.
- Los bloques {} crean un ambito si las variables se declaran con let o const
- No se puede re-declarar una variable dentro del mismo scope (a menos que uses la palabra reservada "var", pero es una mala practica)

## Modo Estricto
El modo estricto es una caracteristica que se introdujo en ES5 para ayudar a escribir codigo mas seguro y limpio. Se activa añadiendo  "use strict" al comienzo de un script o funcion y cambia la manera en que el lenguaje se comporta, eliminando algunas caracteristicas problematicas.

## Closure
Un cierre en JS es una funcion que recuerda el scope en el que fue cerada. Permiten acceder al ambito de una funcion exterior desde una funcion interior, incluso despues de que la funcione externa haya terminado su ejecucion.

```javascript
    function crearContador() {
        let contador = 0; // Variable de la función externa

        return function() {
            contador++; // Accede a la variable externa
            console.log(contador);
        };
    }

    const miContador = crearContador();
    miContador(); // 1
    miContador(); // 2
    miContador();
```