# Consumo API
## ¿Qué es un API?
Application Programing interface, es un conjunto de deficiniones y protocolos que permiten que diferentes aplicaciones se comuniquen entre si. Facilitan la integración de sistemas al proporcionar un estándar para que los programas interactúen.
### API REST
Son un estilo arquitectónico para diseñar servicios web que permiten la interacción entre sistemas utilizando HTTP.
## HTTP
### ¿Que son los metodos HTTP?
Los metodos HTTP (HyperText Transfer Protocol) son acciones que se realizan en recursos especificos en el servidor. Se utilizan en las solicitudes HTTP para definir que accion debe llevarse a cabo en un recurso determinado.

### GET
Recupera datos de un recurso especifico del servidor

``` javascript
    fetch('https://api.example.com/usuarios/123', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
    })
```

### POST 
Envia datos para crear un nuevo recurso
``` javascript
    fetch('https://api.example.com/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: 'Juan',
            email: 'juan@example.com'
        })
    })
```
### PUT
Actualiza un recurso existente (edicion del objeto completo)
``` javascript
    fetch('https://api.example.com/usuarios/123', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: 'Juan',
            email: 'nuevoemail@example.com'
        })
    })
```
### PATCH
Actualiza parcialmente un recurso
``` javascript
    fetch('https://api.example.com/usuarios/123', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: 'actualizado@example.com'
        })
    })
```
### ¿Que son los headers?
Son metadatos que se envian a una transaccion HTTP que contienen información del estado de la transacción en curso. Proporcionan informacion adicional sobre la solicitud y la respuesta, como detalles sobre el contenido, el cliente, el servidor, la autenticación y más.
Se organizan el pares ordenados llave : valor

```Content-Type: application/json ```
``` javascript
    fetch('https://api.example.com/data', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer token123',
            'Accept': 'application/json'
        }
    })
```
