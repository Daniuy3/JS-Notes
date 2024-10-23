

const sumar = (a, b) => a + b;
                        /* ↓ Los callbacks siempre se pasan al final */
const callback = (a, b, sumar) => sumar(a, b);


console.log(callback(2, 3, sumar)); // 5


setTimeout(() => {
    console.log('Hola JavaScript');
}, 2000); // 1000 ms = 1 segundo

const saludo = (name) => console.log(`Hola ${name}`);
                        /* ↓ Los argumentos que se le van a pasar al callback */
setTimeout(saludo,2000, "Daniel"); // Hola Daniel