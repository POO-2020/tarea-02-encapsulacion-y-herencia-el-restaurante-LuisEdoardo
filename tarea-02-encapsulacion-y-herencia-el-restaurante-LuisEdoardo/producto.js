export default class Producto{

    constructor(nombre,precio){
        this._nombreP = nombre;
        this._precio = precio;
    }

    getDescripcion(){
        return `${this._nombreP} ${this._precio.getPrecio()}`
    }
}