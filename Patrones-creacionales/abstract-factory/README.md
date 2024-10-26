# Abstract Factory

El patron de diseño nos provee una estrategia para encapsular multiples fabricas de diferentes productos bajo una sola familia sin especificar clases concretas, Este patron facilita la creacion de componentes que funcionen bien juntos.

## ¿Cual es el problema?

Cuando se desarrolla una aplicación que necesita crear multiples tipos de objetos relacionados, puede ser complicado y desordenado gestionar la creación de estos objetos directamente en el código del cliente. Si se crean instancias directamente, el código se acopla a las clases concretas, lo que reduce la flexibilidad y dificulta la mantenibilidad.

## Solucion
Abstract factory proporciona una capa de abstraccion para crear familias de objetos relacionados. Esto permite que el codigo cliente use una interfaz comun para crear objetos, sin preocuparse por las clases concretas. Asi, puedes cambiar facilmente las familias de productos sin modificar el codigo del cliente