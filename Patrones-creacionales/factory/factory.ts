

type Product = "product1" | "product2";
type BaseProduct = {
    returnProduct(): void;
}

class Product1 implements BaseProduct {
    returnProduct() {
        console.log("Product1 created");
    }
}
class Product2 implements BaseProduct {
    returnProduct() {
        console.log("Product2 created");
    }
}

class Factory {
    static create(type: Product) {
        switch (type) {
            case "product1":
                return new Product1();
            case "product2":
                return new Product2();
        }
    }
}

const product1 = Factory.create("product1");
const product2 = Factory.create("product2");

console.log(product1.returnProduct()); 
console.log(product2.returnProduct());
