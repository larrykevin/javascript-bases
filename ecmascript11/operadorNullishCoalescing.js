const foo = null ?? 'default string';
console.log(foo);

const usuario1 = {}
const nombre1 = usuario1.name ?? "Andres"

const usuario2 = {name: "Juan"}
const nombre2 = usuario2.name ?? "Andres"

console.log(nombre1) // 'Andres' 
console.log(nombre2) // 'Juan'

// Diferencia entre el operador OR y el Nullish coalescing
// El operador OR (||) evalúa un valor falsey. Un valor falsy es aquel que es falso en 
//un contexto booleano, estos son: 0, "", false, NaN, undefined o null.

// Puede que recibas una variable con un valor falsy que necesites asignarle a otra variable. 
//Si evalúas con el operador OR, este lo cambiará, provocando un resultado erróneo.

const id = 0

const orId = id || "Sin id"
const nullishId = id ?? "Sin id"

console.log(orId) //  'Sin id'
console.log(nullishId) // 0