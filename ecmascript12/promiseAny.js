//Promise.any() es otra forma de manejar varias promesas, que retornará la 
//primera promesa que sea resuelta y se rechazará si todas las promesas son rechazadas.

//Ejemplo1
const promesa1 = new Promise((resolve, reject) => reject('Ups promesa 1 fallo'));
const promesa2 = new Promise((resolve, reject) => reject('Ups promesa 2 fallo'));
const promesa3 = new Promise((resolve, reject) => resolve('Promesa 3 success'));

Promise.any([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta)) // Promise 3
    .catch(error => console.log(error))

//Ejemplo 2
const promesa4 = Promise.reject("Ups promesa 1 falló");
const promesa5 = Promise.reject("Ups promesa 2 falló");
const promesa6 = Promise.resolve("Promesa 6");


Promise.any([promesa4, promesa5, promesa6])
    .then(respuesta => console.log(respuesta)) // Promise 6
    .catch(error => console.log(error))