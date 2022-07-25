//Retorno implícito
//Las funciones flecha tienen un retorno implícito, es decir, se puede omitir
//la palabra reservada return, y que el código sea escrito en una sola línea.

//Función tradicional
function suma (num1, num2) {
    return num1 + num2
}

//Función flecha
const suma = (num1, num2) => num1 + num2


//Si el retorno requiere de más líneas y aún deseas utilizarlo de 
//manera implícita, deberás envolver la instrucción entre paréntesis.
const suma = (num1, num2) => (
    num1 + num2
)