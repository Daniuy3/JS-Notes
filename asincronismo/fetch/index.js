import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

const fetchData = async (urlAPI) => {
    try{
        const response = await fetch(urlAPI);
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error);
    }
}

fetchData(`${API}/products`)
    .then(console.log)