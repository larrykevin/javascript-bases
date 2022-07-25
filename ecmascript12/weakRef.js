//Referencias débiles
//Un objeto WeakRef consiste en mantener una referencia débil a otro objeto, para evitar 
//que ese objeto sea eliminado por el Garbage Collection{target="_blank"}.

class Clase {
    constructor(valor){
        this.ref = new WeakRef(valor)
    }
    // ...
}