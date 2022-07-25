//Método finally en promesas
//El método finally para promesas consiste en ejecutar código después 
//que una promesa haya sido ejecutada como resuelta o rechazada.

promesa()
  .then(response => console.log(response) // Promesa resuelta
  .catch(error => console.log(response) // Promesa rechazada
  .finally( () => console.log("Finalizado") ) // Código final