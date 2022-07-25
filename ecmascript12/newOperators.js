//En ES2021 se agregaron tres operadores de asignación:

//Asignación AND (&&=), en caso de cumplirse una verdad, asigna un valor a una variable.
//Asignación OR (||=), en caso de cumplirse una falsedad, asigna un valor a una variable.
//Asignación Nullish (??=), en caso de cumplirse undefined o null, asigna un valor a una variable.
// Antes de ES2021
x && (x = y)
x || (x = y)
x ?? (x = y)

// Después de ES2021
x &&= y
x ||= y
x ??= y
//De esta manera se omite código innecesario.

// Asignación AND
let saludo = true
saludo ??= "Hola"
console.log(saludo) // "Hola"

// Asignación OR
let saludo2 = true
saludo2 ||= "Hola"
console.log(saludo2) // true

// Asignación Nullish
let saludo3 = undefined
saludo3 ??= "Hola"
console.log(saludo3) // "Hola"