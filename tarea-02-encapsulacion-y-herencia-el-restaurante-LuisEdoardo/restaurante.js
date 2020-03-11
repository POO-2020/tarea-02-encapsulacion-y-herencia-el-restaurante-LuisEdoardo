import Direccion from "./direccion.js"
import Pedido from "./pedido.js"
export default class Restaurante{

    constructor(nombre,telefono,direccion){
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.productos = []
        this.pedidos = []

    }
    
    registrarProducto(producto){  
        this.productos.push(producto)
    }

    registrarPedido(pedido){
        this.pedidos.push(pedido)

    }
    
    listarPedidos(){
        this.pedidos.forEach((pedido,i) =>{
            console.log(`Pedido (${i+1}) ${pedido.getResumen()}`)
        })
    }

    listarProductos(){
        this.productos.forEach((producto) =>{
            console.log('Producto:', producto.getDescripcionB())
        })
    }
       
}