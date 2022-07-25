//Qué son los Parámetros rest
//Los parámetros rest consisten en agrupar el residuo de elementos 
//mediante la sintaxis de tres puntos (...) seguido de una variable 
//que contendrá los elementos en un array.

//Esta característica sirve para crear funciones que acepten 
//cualquier número de argumentos para agruparlos en un array.

function hola (primero, segundo, ...resto) {
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5]
}

hola(1,2,3,4,5);

//También sirve para obtener los elementos restantes de un array 
//u objeto usando desestructuración.

const objeto = {
  nombre: "Andres",
  age: 23,
  plataforma: "Platzi"
}
const numbers = [0,1,2,3,4,5];

const { plataforma, ...usuario } = objeto;
const [ cero, ...positivos ] = numbers;

//usuario // { nombre: 'Andres', age: 23 }
//positivos // [ 1, 2, 3, 4, 5 ]
//El parámetro rest siempre deberá estar en la última posición, caso 
//contrario existirá un error de sintaxis.

function hola (primero, /*...rest,*/ ultimo) { /*...*/ }
// SyntaxError: Rest element must be last element. 


//Diferencias entre el parámetro rest y el operador de propagación

//Aunque el parámetro rest y el operador de propagación utilicen 
//la misma sintaxis, son diferentes. El parámetro rest agrupa el 
//residuo de elementos y siempre debe estar en la última posición, 
//mientras que el operador de propagación expande los elementos de un 
//iterable en un array y no importa en que lugar esté situado.

const array = [1,2,3,4,5]

function hola (primero, segundo, ...resto) { // <- Parámetro Rest
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5, "final"]
}

hola(...array, "final") //<- Operador de propagación
//Lo mismo que hacer -> hola(1,2,3,4,5, "final")


//Propiedades de propagación
//Las propiedades de propagación consisten en expandir las propiedades 
//de un objeto utilizando el spread operator. Sirve para crear nuevos 
//objetos a partir de otros.

const objeto2 = {
  nombre: "Andres",
  age: 23,
}

const usuario3 = {
    ...objeto2,
    plataforma: "Platzi"
}
console.log(usuario3); //{ nombre: 'Andres', age: 23, plataforma: 'Platzi' }


//Crear copias de objetos utilizando las propiedades de propagación

//Semenjante a crear copias de arrays utilizando el operador de propagación, 
//se puede realizar copias de objetos en un solo nivel mediante las 
//propiedades de propagación. De esta manera el segundo objeto tendrá 
//una referencia en memoria diferente al original.

const objetoOriginal = {a: 1, b: 2}
const objetoReferencia = objetoOriginal
const objetoCopia = {...objetoOriginal}

objetoReferencia === objetoOriginal // true
objetoOriginal === objetoCopia // false