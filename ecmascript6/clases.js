//CLASES EN JAVASCRIPT
//La palabra reservada class es una forma para crear clases y manejar la 
//herencia en JavaScript, permitiendo resolver problemas con el paradigma 
//de programación orientada a objetos (POO).

//La estructura de clases en JavaScript consiste en:

//Definir la clase con la palabra reservada class, seguido del nombre 
//(por convención se empieza con mayúscula).
//La función constructora sirve para crear las variables necesarias en 
//la instancia del objeto.
//Para definir atributos necesitas el contexto this, que representa 
//la instancia del objeto.
//Métodos para definir las acciones de la clase.
//Para crear una instancia, deberás declarar una variable e invocar 
//la clase con la palabra reservada new.


class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    
    suma(num1, num2){
        this.valueA = num1;
        this.valueB = num2;
        return this.valueA + this.valueB;
    }

    resta(num1, num2){
      this.valueA = num1;
      this.valueB = num2;
      return this.valueA - this.valueB;
    }
}

// Instancia
const calculadora = new Calculator()

calculadora.suma(2,2) //4
calculadora.resta(10,4) //6