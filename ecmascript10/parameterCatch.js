//Parámetro opcional de catch
//El parámetro opcional de catch permite omitir el error si es 
//necesario, para que esté obligatorio.

try {
  // Manejar el código
} catch (err) {
  // Se utiliza el parámetro `err`
}

try {
  // Manejar el código
} catch {
  // Manejar el error sin el parámetro.
}