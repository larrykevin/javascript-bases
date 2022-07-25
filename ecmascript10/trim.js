//Eliminar espacios en blanco de un string
//Existen tres métodos para eliminar espacios en blanco de un string:

//El método trim elimina los espacios en blanco al inicio y al final.
//El método trimStart o trimLeft elimina los espacios al inicio.
//El método trimEnd o trimRight elimina los espacios al final.
const saludo = "      hola      "
const result1 = saludo.trim()
const result2 = saludo.trimStart()
const result3 = saludo.trimEnd()

console.log(result1) // 'hola'
console.log(result2) // 'hola      '
console.log(result3) // '      hola'