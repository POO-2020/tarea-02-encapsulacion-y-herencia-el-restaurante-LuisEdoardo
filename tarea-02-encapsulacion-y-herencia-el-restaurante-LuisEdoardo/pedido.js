import Precio from "./precio.js";
import Cliente from "./cliente.js"
import Producto from "./producto.js"
import ElementoPedido from "./elemento-pedido.js"

export default class Pedido{

    constructor({numeroPedido,fecha,hora,cliente}){
        this._fecha = fecha;
        this._hora = hora;
        this._cliente = cliente;
        this._numeroPedido = numeroPedido;
        this._elementosPedidos = [];
    }

    getNumeroPedido(){
        return this._numeroPedido;
    }

    esIgualA(pedido){
        if (pedido.getNumeroPedido() === this._numeroPedido){
            return true;
        }
        return false;
    }

    getNumeroElementos(){
        return `${this._elementosPedidos.length}`
    }

    getNumeroProductos(){
        var productoNum = 0;
        this._elementosPedidos.forEach(elemento =>{
            productoNum += elemento._cantidad 
        })
        return productoNum;
    }

    getCostoTotal(){
        var costo = 0;
        this._elementosPedidos.forEach(elemento1 => {
            costo += elemento1._cantidad * elemento1._producto._precio._formato
        })
        return `${new Precio(costo).getPrecio()}`
    }

    agregarElemento(elemento1){
        return `${this._elementosPedidos.push(elemento1)}`
    }
            
    listarElementos(){
        console.log("Listado de Platillos")
        this._elementosPedidos.forEach(elemento =>{
            console.log(elemento.getDescripcionB())
            
        })
    }

    getResumen(){
        return `#${this._numeroPedido} ${this._fecha.getFecha()} ${this._hora.getFormato12()} \n- ${this.getNumeroElementos()} elementos con ${this.getNumeroProductos()} productos.`
    }

}