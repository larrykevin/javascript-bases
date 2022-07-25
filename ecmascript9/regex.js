//Expresiones regulares
//Las expresiones regulares o RegEx (regular expresions) son 
//patrones de búsqueda y manipulación de cadenas de caracteres 
//increíblemente potente y están presentes en todos los lenguajes 
//de programación. En JavaScript se crea estre patrón entre barras 
//inclinadas (/patrón/) y se utiliza métodos para hacer coincidir la búsqueda.

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
console.log(typeof year)

//Este es un tema extenso, por lo que te recomiendo seguir el curso 
//y leer los métodos sobre expresiones regulares en JavaScript.