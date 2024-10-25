# Factory
Es un patron de diseño creacional, que define una interfaz para crear objetos, pero permite a las subclases decidir que clase instanciar. Es util cuando se necesita delegar la creacion de objetos a subclases, proporcionando mas flexibilidad y encapsulacion en el proceso de instanciacion.

## ¿Cual es el problema?
Se requiere crear objetos de manera eficiente y flexible en situaciones donde se conoce de antemano la clase exacta del objeto que se debe crear

## Soluciones
- El patron sugiere que en lugar de utilizar el operador new() se invoque a un metodo fabrica que se encargue de la creacion de los objetos. Estos objetos son llamados productos.
- Internamente este metodo seguira utilizando el operador new(), pero de manera condicional dependiendo del caso
- Las superclases de fabrica estaran basadas en una clase o interfaz comun, esto nos permite intercambiarlas segun sea necesario
- Los productos retornados por las fabricas deben estar basados en una clse o interefaz.