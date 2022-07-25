//Objetos

function auto(marca, modelo, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
}

let autoNuevo = new auto('Toyota','Yaris','2014');
let autoNuevo2 = new auto('Tesla','Model 3','2020');

console.log(autoNuevo);
console.log(autoNuevo2);

//Reto - Ejemplo 1

function Auto (nombre, marca, fecha) {
  this.nombre = nombre;
  this.marca = marca;
  this.fecha = fecha;
}

var modelos = ["C-Max","Fiesta", "Focus", "Mondeo", "Ka", "S-MA", "B-MAX", "Grand C-Max", "Tourneo Custom","Kuga", "Galaxy", "Grand Tourneo Connect", "Tourneo Connect", "EcoSport", "Tourneo Courier", "Mustang", "Transit", "Edge", "Ka+","Fiesta", "Focus", "Mondeo", "Ka", "S-MA", "B-MAX", "Grand C-Max", "Tourneo Custom","Kuga", "Galaxy", "Grand Tourneo Connect"];

var marcas = ["Abarth", "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Cadillac", "Caterham", "Chevrolet", "Citroen", "Dacia", "Ferrari", "Fiat", "Ford", "Honda", "Infiniti", "Isuzu", "Iveco", "Jaguar", "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Cadillac", "Caterham", "Chevrolet", "Citroen", "Dacia", "Ferrari"];

var fechas = ["1988", "1989", "1978", "1989", "1928", "1989", "1968", "1989", "1888", "1989", "1288", "1989", "1938", "1989", "1988", "1999", "1983", "1989", "1918", "1989", "1978", "1989", "1928", "1989", "1968", "1989", "1888", "1989", "1288", "1989"];

for (i = 0; i < 30; i++) {
  var autos = new Auto(modelos[i], marcas[i], fechas[i]);
  console.log(`${i + 1}. ${autos.nombre} ${autos.marca} ${autos.fecha}`);
}


//Reto - Ejemplo 2 - Probar en una web

function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

var listaConstruida = [];
var conteo = 0

var cantidadAutos = parseInt(prompt("Agregar cantidad de autos"));

while (conteo < cantidadAutos) {
  var marca = prompt("Ingrese la marca");
  var modelo = prompt("Ingrese el modelo");
  var annio = parseInt(prompt("Ingrese el año"));
  
  var newCar = new auto(marca, modelo, annio);
  conteo++
  listaConstruida.push(newCar);
}


//Reto - Ejemplo 3

//Funcion constructora
function carros(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

//Creamos nuestros modelos 
const listaDeCarros = [];
let models = ['Sierra AT4', 'Sierra Denali', 'Yukon'];
let modelYear = [2019,2021,2022];

for (let i = 0; i < 30; i++) {
  let randomModels = Math.floor(Math.random() * models.length);
  let randomAnnio = Math.floor(Math.random() * modelYear.length);

  listaDeCarros.push(new carros('GMC', models[randomModels], models[randomAnnio]));
}

console.log(listaDeCarros.length);