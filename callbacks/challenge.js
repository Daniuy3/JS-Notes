const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API = "https://api.escuelajs.co/api/v1";

/* 
    tipos de readyState:
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
*/

const fetchData = (urlAPI, callback) => {
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", urlAPI, true);

    xhttp.onreadystatechange = (e) => {
        /*  ↓ Indice para Completado */
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error("Error: " + urlAPI);
                return callback(error, null);
            }
        }
    };

    xhttp.send(); /* ← Para ejecutar toda la logica anterior */
};

fetchData(`${API}/products`, (error1, data1) => {
    if (error1) return console.error(error1);
    console.log(data1);

    fetchData(`${API}/products/${data1[0].id}`, (error2, data2) => {
        if (error2) return console.error(error2);
        console.log("segundo producto: ",data2);
    })
    
});
