export default class ElementoPedido{

    constructor(cantidad, producto){
        this.producto = producto;
        this.cantidad = cantidad;
    }
    
    getDescripcionB(){
        return `${this.cantidad} x ${this.producto.getDescripcion()}`
    }
}