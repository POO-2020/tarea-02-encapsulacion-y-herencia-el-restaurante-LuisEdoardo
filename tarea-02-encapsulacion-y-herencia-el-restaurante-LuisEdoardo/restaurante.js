import Direccion from "./direccion.js"
import Pedido from "./pedido.js"
export default class Restaurante{

    constructor({nombre,telefono,direccion}){
        this._nombre = nombre;
        this._telefono = telefono;
        this._direccion = direccion;
        this._productos = [];
        this._pedidos = [];

    }
    
    registrarProducto(producto){  
        return `${this._productos.push(producto)}`
    }


    registrarPedido(pedido){
        this._pedidos.push(pedido)

    }
    
    listarPedidos(){
        this._pedidos.forEach((pedido,i) =>{
            console.log(`Pedido (${i+1}) ${pedido.getResumen()}`)
        })
    }

    buscarPedido(pedido){
        let result = this._pedidos.find(order => order.esIgualA(pedido))
        return result;
    }

    _encontrarIndicePedido(pedido){
        let indice = this._pedidos.findIndex(orders => orders.esIgualA(pedido))
        return indice;
    }

    eliminarPedido(pedido){
        let indice = this.buscarPedido(pedido)
        if (indice < 0 ){
            return false;
        }
        this._pedidos.splice(indice,1)
        return true; 
    }

    modificarPedido(pedido,nuevoPedido){
        let indice = this._encontrarIndicePedido(pedido);
        if (indice < 0){
            return false;
        }
        this._pedidos.splice(indice,1,nuevoPedido)
        return true;
    }

    listarProductos(){
        console.log("Listado de productos")
        this._productos.forEach(producto =>{
            console.log(producto.getDescripcionB())
            
        }) 
    }
       
}