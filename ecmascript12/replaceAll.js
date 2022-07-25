// El método replaceAll retorna un nuevo string, reemplazando todos los elementos por otro.

// Este método recibe dos argumentos:

// El patrón a reemplazar, puede ser un string o una expresión regular.
// El nuevo elemento que sustituye al reemplazado.
// Este método fue creado para solucionar el problema que tenía el método replace, 
//que realizaba la misma función de reemplazar elementos, pero solamente una sola vez.

const mensaje = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

mensaje.replace("JavaScript", "Python")
// 'Python es maravilloso, con JavaScript puedo crear el futuro de la web.'

mensaje.replaceAll("JavaScript", "Python")
// 'Python es maravilloso, con Python puedo crear el futuro de la web.'

mensaje.replaceAll(/a/g, "*")
// 'J*v*Script es m*r*villoso, con J*v*Script puedo cre*r el futuro de l* web.'