// Ejemplo 1
let person = {
  'name': 'Oscar',
  'age' : 32,
  'country': 'MX'
}

let personOne = person.name;
console.log(personOne);

let { age } = person;
console.log(age);

// Ejemplo 2
const animals = ['🐳','🐆','🦘'];

const [ballena, tigre, canguro] = animals;
console.log(ballena,tigre,canguro);

// Ejemplo 3 - Asignando un valor por default
const comida = ['🍕','🍟'];

const [pizza, papas, tacos = '🌮'] = comida;
console.log(pizza, papas, tacos);

//Ejemplo 4 - Valores de retorno
function vehiculos() {
  return ['🏍','🚚','🚕'];
}

let [moto, camion, taxi] = vehiculos();
console.log(moto,taxi);

// otro ejemplo 4
  function useState(value){
    return [value, updateValue()]
  }
  //Sin desestructuración 
  const estado = useState(3);
  const valor = estado[0];
  const actualizador = estado[1];
  //Con desestructuración 
  const [valorDos, actualizadorDos] = useState(3)



//Ejemplo 5 - Usando Rest
const deportes = ['🏀', '🎾', '🏈', '⚽'];

const [basquet, tenis, ...otros] = deportes;
console.log(basquet, tenis, otros);

//Ejemplo 6 - Cambiando el nombre de las variables con desestructuración
const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

const { nombre: name, edad: age, plataforma: platform } = usuario

console.log(name)  // 'Andres' 
console.log(age)  // 23
console.log(platform)  // 'Platzi'

console.log(nombre)   // Uncaught ReferenceError: nombre is not defined


//Ejemplo 7
// En este ejemplo el spred operator + la palabra reservada arguments toman todos
// los parametros y los introduce en un arreglo

function favoriteSongs() {
  const array = [...arguments];
  array.map((song,i) => {
    console.log(`${i + 1}. ${song}`);
  });
}

favoriteSongs('🎉🎟🎃','🌚🌚🌚🌝🌝','🛑🚘');