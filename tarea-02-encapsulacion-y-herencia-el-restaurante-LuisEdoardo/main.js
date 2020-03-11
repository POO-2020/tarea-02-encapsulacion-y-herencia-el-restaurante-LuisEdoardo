import Precio from "./precio.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Direccion from "./direccion.js"
import Cliente from "./cliente.js"
import Producto from "./producto.js"
import ElementoPedido from "./elemento-pedido.js"
import Pedido from "./pedido.js"
import Restaurante from "./restaurante.js"
export default class Main {

    constructor(){
        
    }

    pruebaTiempo(){
        let horas = new Tiempo(5,44,"pm")
        console.log("---------Tiempo--------")
        console.log(horas.getFormato12())
        console.log(horas.getFormato24())
    }

    pruebaFecha(){
        let fecha = new Fecha(5,4,2017)
        console.log("----------Fecha---------")
        console.log(fecha.getAños())
        console.log(fecha.getMeses())
        console.log(fecha.getSemanas())
        console.log(fecha.getDias())
        console.log(fecha.getFecha())
        console.log(fecha.getDiaFecha())
    }

    pruebaPrecio(){
        let precio = new Precio(43200.54)
        console.log("----------Precio----------")
        console.log(precio.getPrecio())
    }

    pruebaDireccion(){
        let calle = "Hacienda el Cortijo"
        let numExt = "601"
        let numInt = "200"
        let colonia = "Real Centenario"
        let CP = "28984"
        let municipio = "Villa de Alvarez"
        let ciudad = "Colima"
        let direccion = new Direccion(calle,numExt,numInt,colonia,CP,municipio,ciudad)
        console.log("--------Direccion---------")
        console.log(direccion.getFormatoCorto())
        console.log(direccion.getFormatoExtendido())
    }

    pruebaCliente(){
        let nombre = "Alberto Esparza Gomez Rodriguez"
        let direccion = new Direccion("Laguna del Calabozo","442","", "Villas Bugambilia", "28956", "Villa de Alvarez", "Colima")
        let telefono = "312245567"
        let cliente = new Cliente(nombre,direccion,telefono)
        console.log("----------Cliente---------")
        console.log(cliente.getPerfil())
    }

    pruebaProducto(){
        let nombre = "Risotto con champiñones"
        let precio = new Precio(150)
        let producto = new Producto(nombre,precio)
        console.log("--------Producto---------")
        console.log(producto.getDescripcion())
    }

    pruebaElementoPedido(){
        let cantidad = 2
        let producto = new Producto("Pasta con allioli", new Precio(130))
        let elemento = new ElementoPedido(cantidad,producto)
        console.log("--------Elemento Pedido--------")
        console.log(elemento.getDescripcionB())
    }
    
    pruebaPedido(){
        let cantidad1 = 1
        let cantidad2 = 3
        this.elemento1 = new ElementoPedido(cantidad1,new Producto("Hamburguesa Vegetariana", new Precio(110)))
        this.elemento2 = new ElementoPedido(cantidad2,new Producto("Filete Mignon", new Precio(200)))
        let pedido = new Pedido(new Fecha(1,5,2020),new Tiempo(1,22,"pm"),new Cliente("Ramon Castro Lopez"),new Direccion ("Miguel Hidalgo","222","","Vista Hermosa","298345","Colima","Colima"), "3124456446")
        console.log("-------Pedido-------")
        pedido.agregarElemento(this.elemento1)
        pedido.agregarElemento(this.elemento2)
        console.log("Hay una cantidad de " + pedido.getNumeroElementos() + " productos distintos")
        console.log("Hay un total de " + pedido.getNumeroProductos()+ " productos") 
        pedido.listarElementos()
        console.log(pedido.getResumen())
        console.log("El costo total es de: " + pedido.getCostoTotal())
    }

    pruebaRestaurante(){
        let cantidad1 = 2
        let cantidad2 = 4
        this.producto1 = new ElementoPedido(cantidad1,new Producto("Hamburguesa Angus", new Precio(130))) 
        this.producto2 = new ElementoPedido(cantidad2, new Producto("Pizza Napoletana", new Precio(120)))
        let pedido1 = new Pedido(new Fecha(1,3,2020),new Tiempo(5,32,"pm"),new Cliente("Alfredo Gomez Tuercas"), new Direccion("Hacienda Venustiano","427","","Calaboide","294578","Guadalajara", "Jalisco"), "312231321")
        let restaurante = new Restaurante("Ristorante L'eterna cima", "312454467", new Direccion("Lapiz Lazuli","567","","Calabozo","294578","Guadalajara", "Jalisco"))
        restaurante.registrarProducto(this.producto1)
        restaurante.registrarProducto(this.producto2)
        pedido1.agregarElemento(this.producto1)
        pedido1.agregarElemento(this.producto2)
        restaurante.registrarPedido(pedido1)
        console.log('------Restaurante------')
        restaurante.listarProductos()
        restaurante.listarPedidos()
        
        
    }
}

let tester = new Main()
tester.pruebaTiempo();
tester.pruebaFecha();
tester.pruebaPrecio();
tester.pruebaDireccion();
tester.pruebaCliente();
tester.pruebaProducto();
tester.pruebaElementoPedido();
tester.pruebaPedido();
tester.pruebaRestaurante();