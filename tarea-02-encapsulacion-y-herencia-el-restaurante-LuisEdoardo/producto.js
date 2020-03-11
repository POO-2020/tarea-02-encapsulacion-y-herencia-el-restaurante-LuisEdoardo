export default class Producto{

    constructor(nombre,precio){
        this.nombreP = nombre;
        this.precio = precio;
    }

    getDescripcion(){
        return `${this.nombreP} ${this.precio.getPrecio()}`
    }
}