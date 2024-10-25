# SINGLETON

Es un patron de diselo que garantiza que una clase tenga solo una instancia y proporciona un punto de acceso global a ella.

## ¿Cual es el problema?
- Queremos asegurar que el acceso a un recurso compartido en diferentes partes de la aplicacion.
- Asegurar que la modificacion al recurso compartido se lleve a cabo en un solo punto de acceso.
## Soluciones
- El patron sugiere hacer privado el constructor de la clase para evirar que sea usado al utilizar el operador new()
- Crear un metodo estatico que actue como constructor y que tras bambalinas llame al constructor privado para crear un objeto que estara guardado en una variable estatica que funcionara como cache.
