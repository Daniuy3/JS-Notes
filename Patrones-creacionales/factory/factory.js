


/* 
    Como implementar el patrón de diseño Factory en JavaScript

    1 declara el producto base, este sera retornado por la clase factory y sus subclases 
    2 Implementar los productos concretos, que extenderan el producto base
    3 Declarar la classe factory quue retornara los productos
    4 implementar las factorys concretas que retornaran los productos concretos

 */

class baseCar { /* ←Este es el producto base del que derivaran los productos concretos */
    showCost(){
        throw new Error('This method is not implemented yet!');
    }
}

class carA extends baseCar { /*  ← El producto a que hereda de el producto base */
    showCost(){
        return 10000; 
    }
}

class carB extends baseCar {
    showCost(){ 
        return 20000; /* ← El producto b que hereda del producto base */
    }
}

class factory {
    createCar(){
        throw new Error('This method is not implemented yet!');
    }
}

class factoryA extends factory {
    createCar(){
        return new carA(); /* ← La factory a que retorna el producto a */
    }
}

class factoryB extends factory {
    createCar(){
        return new carB(); /* ← La factory b que retorna el producto b */
    }
}

const factoryAInstance = new factoryA();
const factoryBInstance = new factoryB();

const carAInstance = factoryAInstance.createCar();
const carBInstance = factoryBInstance.createCar();

console.log(carAInstance.showCost()); // 10000
console.log(carBInstance.showCost()); // 20000