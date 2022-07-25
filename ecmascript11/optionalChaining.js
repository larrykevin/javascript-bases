//Definición de encadenamiento opcional
//El encadenamiento opcional u optional chaining (?.) detiene la evaluación del objeto 
//cuando el valor es undefined o null antes del ?., retornando undefined sin detener el programa por un error.

const usuario = {}
console.log(usuario.redes?.facebook) 
// undefined

//¿Pero por qué usaría propiedades de un objeto vacío? Cuando realizas peticiones, 
// el objeto no contiene la información correspondiente, por ende, necesitas que el programa 
// no colapse hasta que lleguen los datos y puedas utilizarlos.

// Evita el abuso del encadenamiento opcional
// El encadenamiento opcional se debe utilizar únicamente cuando probablemente un valor no exista.

// Por ejemplo, en un objeto usuario que siempre existe, pero la propiedad redes es opcional, 
//entonces se debería escribir usuario.redes?.facebook y no usuario?.redes?.facebook.

// Si abusas del encadenamiento opcional y existe un error en usuario, el programa podría 
//“ocultarlo” por un undefined, provocando que el debugging sea más complicado.

const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
  console.log('email');
} else {
  console.log('fail');
}