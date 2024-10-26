


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

class Factory {
    static create(type) {
        switch (type) {
            case "product1":
                return new Product1();
            case "product2":
                return new Product2();
        }
    }
}

const carAInstance = Factory.create("product1");
const carBInstance = Factory.create("product2");

console.log(carAInstance.showCost()); // 10000
console.log(carBInstance.showCost()); // 20000