// PARAMETROS EN OBJETOS
// Los parámetros en objetos son una función que consiste en crear objetos
// a partir de variables sin repetir su nombre como propiedad.

// Antes de ES6
const nombre = "Andres";
const edad = 23;

const objeto = {
  nombre: nombre, 
  edad: edad
}

console.log(objeto); // { nombre: 'Andres', edad: 23 }

// Con ES6
//Con los parámetros en objetos puedes obviar la repetición de nombres, JavaScript
//creará la propiedad a partir del nombre de la variable con su respectivo valor.
const nombre2 = "Andres";
const edad2 = 23;

const objeto2 = { nombre2, edad2 };

console.log(objeto2); // { nombre: 'Andres', edad: 23 }