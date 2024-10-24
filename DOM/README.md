# DOCUMENT OBJECT MODEL
Es una interfaz de programacion HTML y XML. Representa la estructura de un arbol de nodos, donde cada nodo es un elemento del documento. Este modelo permite que js sea capaz de acceder y manipular el contenido, estructura y el estilo del documento de manera mas dinamica.
Es una interfaz de programacion HTML y XML. Representa la estructura de un arbol de nodos, donde cada nodo es un elemento del documento. Este modelo permite que js sea capaz de acceder y manipular el contenido, estructura y el estilo del documento de manera mas dinamica.


<div style="display: flex; gap: 10px;">
    <img src="image.png" alt="alt text" width="300"/>
    <div>
        <h2>Window Object</h2>
        <p>Es el Objeto global en el entorno de ejecucion del navegador y actua como el contenedor global para las variables, funciones y objetos globales. Basicamente todas las variables se convierten en propiedades y metodos de "window"</p>
    </div>
</div>

## Traversing the DOM
Es el Proceso de navegar a traves de los elementos y sus relaciones en el DOM de un documento HTML. Esto permite acceder y modificar cualquier parte del contenido del documento.

### Metodos comunes
- Acceder al nodo padre:
``` javascript
    const child = document.querySelector('.child');
    const parent = child.parentNode;  
```

- Accede a todos los nodos hijos
``` javascript
    const parent = document.querySelector('.parent');
    const children = parent.childNodes;
```

- Acceder al primer y ultimo nodo hijo
``` javascript
    const first = parent.firstChild;
    const last = parent.lastChild
```

## Atributos HTML y propiedades JS
Los atributos HTML son valores adicionales que configuran elementos HTML o ajustan su comportamiento. En JavaScript, estos atributos HTML se representan como propiedades de los objetos del DOM, como value, id, name, etc. Es importante mencionar que los atributos son la representacion inicial del HTML, si nosotros lo modificamos mediante JS, esto no va a cambiar en el HTML, pero si en el DOM.
Cuando se accede a un elemento del DOM en JavaScript, sus atributos HTML se convierten automaticamente en propiedades del objeto correspondiente. Esto permite leer y modificar estos atributos de manera programatica.

### Ejemplos
- Acceder Y modificar el atributi 'src' de una imagen 
``` javascript
    const img = document.querySelector('img');
    console.log(img.src); // Muestra la URL actual
    img.src = 'nueva-imagen.jpg'; // Cambia la imagen
```
- Trabajar con el atributo "class"
``` javascript
    const div = document.querySelector('div');g
    console.log(div.className); // Muestra las clases actuales
    div.className += ' nueva-clase'; // Añade una nueva clase
```

### Creacion de elementos HTML
Las maneras de crear HTML de manera dinamica son las siguientes:
- HTML strings:
Los HTML strings son cadenas de texto que contienen codigo HTML. En JavaScript, se puedden utilizar para crear ekementos HTML de forma dinamica. Esta tecnica implica crear una cadena de texto que representa una estructura HTML deseada y luego indertarla en el DOM.
Debes recordar que los HTML strings pueden representar problemas de seguridad. Es recomendable no utilizarlos cuando se crean a traves de datos proporcionados por el cliente. El uso de innerHTML puede afectar al rendimiento de la aplicacion, ya que provoca la re-renderizacion del DOM desde cero. Esto puede ser costoso en terminos de rendimiento, especialmente si se hace de manera frecuente o con elementos de gran volumen.

Ejemplo de uso:   
``` javascript
    // Crear un elemento usando HTML string
    const newElement = `<div class="new-element">
    <h2>Título</h2>
    <p>Este es un párrafo creado dinámicamente.</p>
    </div>`;

    // Insertar el elemento en el DOM
    document.body.innerHTML += newElement;
```

- InsertAdjacentElement()
El metodo InsertAdjacentElement es una funcion de JavaScript que permite insertar un elemento del DOM en una posicion especifica en relacion con otro elemento. Este metodo proporciona un control preciso sobre donde se inserta el nuevo elemento. Es mas eficiente en terminos de rendimiento, ya que permite insertar un  nuevo elemento en una posicion especifica sin afectar el contenido existente.

La sintaxis basica es la siguiente:

``` javascript
    targetElement.insertAdjacentElement(position, element)
```

Donde:
- targetElement: es el elemento de referencia junto al cual se insertara el nuevo elemento.

- position: Es una cadena que especifica la posicion donde se insertara el nuevo elemento:

    - "beforebegin": Antes del elemento de referencia

    - "afterbegin": Dentro del elemento de referencia, antes de su primer hijo

    - "beforeEnd": Dentro del objeto de referencia, despues de su ultimo hijo

    - "afterend": Despues del elemento de referencia

- element: Es el nuevo elemento que se va a insertar

Ejemplo de uso:

``` javascript
    // Crear un nuevo elemento
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Este es un nuevo párrafo';

    // Obtener el elemento de referencia
    const referenceElement = document.getElementById('existingElement');

    // Insertar el nuevo párrafo después del elemento de referencia
    referenceElement.insertAdjacentElement('afterend', newParagraph);
```

## Fases en los eventos de JS
Los eventos de JavaScript pasan por tres fases principales en su ciclo de vida:
- Captura
    Es la parte principal del evento, el evento se propaga desde el nodo raiz del DOM hacia abajo, llegando al objetivo del evento.
- Target
    El evento llega al nodo objetivo especifico donde se origino el evento, los manejadores de eventos son establecidos en esta parte.
- Bubbling
    El evento se propaga hacia arriba desde el nodo objetivo hasta en nodo raiz del DOM.

### Event Object
El event object es un objeto que se crea automaticamente cuando ocurre un evento. Contiene informacion sobre el evento que acaba de ocurrir y permite manejarlo de una forma mas detallada. Este objeto se pasa como argumento a los manejadores de eventos.

``` javascript
    element.addEventListener('click', function(event) {
        console.log(event.type); // 'click'
    });
```

Dentro de este objeto podremos encontrar metodos utiles a la hora de trabajar con eventos:
- preventDefault()
``` javascript
    element.addEventListener('click', function(event) {
        event.preventDefault();
    });
```
- stopPropagation()

``` javascript
    element.addEventListener('click', function(event) {
        event.stopPropagation();
    });
```