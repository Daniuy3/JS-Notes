/* 
    Como implementar un singleton en JavaScript

    1. Hacer el constructor privado
    2. Crear el metodo estatico que llame al constructor privado y guarde la instancia
        en una variable

*/

class Singleton {
    static instance = undefined;
    
    constructor(version){
        this.version = version
    }

    static getInstance(version){
        if(!Singleton.instance) {
            Singleton.instance = new Singleton(version); /* ←Aqui se manda a llamar el constructor */
        }

        return Singleton.instance;
    }
};

function appSingleton(){
    const instance1 = Singleton.getInstance("v1.0.0"); /* Aqui se crea la primer instancia */
    const instance2 = Singleton.getInstance("v2.0.0");/* Aqui se intenta crear la 2da */

    console.log(instance1); // Singleton { version: 'v1.0.0' }
    console.log(instance2); // Singleton { version: 'v1.0.0' }

    /* 
        Como ya existia la instancia, no se crea una nueva, por lo que ambas variables contendran la misma informacion
    */
};

appSingleton();