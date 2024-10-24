const cows = 15;

const promise = new Promise((resolve, reject) => { /* Las promesas comienzan a ejecutarse tan pronto como se definen */
  setTimeout(() => {

    resolve("Data resolved");
  }, 2000);
});

const contCows = new Promise((resolve, reject) => {
    console.log("La promesa ha empezado a ejecutarse...");
  if (cows === 0) {
    reject("Not enough cows");
  }
  setTimeout(() => {
    resolve(cows);
  }, 2000);
});

const fetch = async () => {
  /* Para este punto las dos promesas ya se habian empezado a ejecutar, por que se declararon antes */
console.log("Fetching data...");
  await promise.then((data) => {
    console.log(data);
  });/* Aqui ya solo se accede al resultado, una vez se tiene listo */

  console.log("counting cows...");
  contCows /* esta promesa tambien se empezo a ejecutar desde el momento en el que fue definida */
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

fetch();

/* 
    output:

    La promesa ha empezado a ejecutarse...   //Porque la promesa se empezo a ejecutar en el momento en
                                                el que fue definida


    Fetching data...
    Data resolved
    counting cows...
    15
*/
