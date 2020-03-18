export default class ElementoPedido{

    constructor({cantidad, producto}){
        this._producto = producto;
        this._cantidad = cantidad;
    }
    
    getDescripcionB(){
        return `${this._cantidad} x ${this._producto.getDescripcion()}`
    }
}