import Precio from "./precio.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Direccion from "./direccion.js"
import Cliente from "./cliente.js"
import ClienteFrecuente from "./cliente-frecuente.js"
import Producto from "./producto.js"
import ElementoPedido from "./elemento-pedido.js"
import Pedido from "./pedido.js"
import Restaurante from "./restaurante.js"

const cliente1 = new Cliente ({
    nombre: "Alvara Cruz Montes",
    direccion: new Direccion("Valle De Desesperanza","345","", "Nuevo Terreno", "28048", "Colima", "Colima"),
    telefono: "3126789345"
})

const cliente2 = new Cliente ({
    nombre: "Luis Edoardo Morales Leyva",
    direccion: new Direccion("Hacienda del Carmen","456","", "Ostras", "278935", "Colima", "Colima"),
    telefono: "3124537823"
})
export default class Main {

    constructor(){
        
    }

    pruebaTiempo(){
        let horas = new Tiempo(5, 44, "pm")
        console.log("---------Tiempo--------")
        console.log(horas.getFormato12())
        console.log(horas.getFormato24())
    }

    pruebaFecha(){
        let fecha = new Fecha(1 , 2, 2000)
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
        let calle = "Montes Himalaya"
        let numExt = "1215"
        let numInt = ""
        let colonia = "Nuevo Milenio"
        let CP = "28048"
        let municipio = "Colima"
        let ciudad = "Colima"
        let direccion = new Direccion(calle,numExt,numInt,colonia,CP,municipio,ciudad)
        console.log("--------Direccion---------")
        console.log(direccion.getFormatoCorto())
        console.log(direccion.getFormatoExtendido())
    }

    pruebaCliente(){
        let cliente = new Cliente ({
            nombre: "Mariana Ramos Ibarra",
            direccion: new Direccion("Justo Sierra","302","", "Centro", "290867", "Colima", "Colima"),
            telefono: "3121263829"
        })
        console.log("----------Cliente---------")
        console.log(cliente.getPerfil())
    }

    pruebaClienteFrecuente(){
        let clienteFrecuente1 = new ClienteFrecuente({
            numeroCliente: 321,
            fechaRegistro: new Fecha(2,4,2010),
            nombre: ("Maria Fernanda Garcia Solis"),
            direccion: new Direccion ("Nicolas Bravo", "1513", "","Las Quintas","256782","Villa de Alvarez", "Colima"),
            telefono: "3125672345"
        })
        console.log('-----Cliente Frecuente-----')
        console.log(clienteFrecuente1.getPerfil())
    }

    pruebaProducto(){
        let nombre = "Panini"
        let precio = new Precio(150)
        let producto = new Producto(nombre,precio)
        console.log("--------Producto---------")
        console.log(producto.getDescripcion())
    }

    pruebaElementoPedido(){
        let elementoPedido = new ElementoPedido({
            cantidad:2,
            producto: new Producto("Lasagna", new Precio(130))
        })
        console.log("--------Elemento Pedido--------")
        console.log(elementoPedido.getDescripcionB())
    }
    
    pruebaPedido(){
        let pedido1 = new Pedido({
            numeroPedido: 1,
            fecha: new Fecha(1,3,2020),
            hora: new Tiempo(1,44,"pm"),
            cliente: cliente1
        })
        let elementoPedido1 = new ElementoPedido({
            cantidad:2,
            producto: new Producto("Lasagna", new Precio(130))
        })
        let elementoPedido2 = new ElementoPedido({
            cantidad:3,
            producto: new Producto("Tomahawk", new Precio(200))
        })
        console.log("-------Pedido-------")
        pedido1.agregarElemento(elementoPedido1)
        pedido1.agregarElemento(elementoPedido2)
        console.log("Hay una cantidad de " + pedido1.getNumeroElementos() + " productos distintos")
        console.log("Hay un total de " + pedido1.getNumeroProductos()+ " productos") 
        pedido1.listarElementos()
        console.log(pedido1.getResumen())
        console.log("El costo total es de: " + pedido1.getCostoTotal())
    }

    pruebaRestaurante(){
        console.log('------Restaurante------')
        let restaurante = new Restaurante ({
            nombre:"La dulse vida",
            telefono:"33024567",
            direccion: new Direccion("Rio Batacudea","714","","Los Huisaches","267894","Culiacan", "Sinaloa")
        })
        let elementoPedido1 = new ElementoPedido({
            cantidad:2,
            producto: new Producto("Panini", new Precio(130))
        })
        let elementoPedido2 = new ElementoPedido({
            cantidad:4,
            producto: new Producto("Tomahawk", new Precio(200))
        })
        let pedido1 = new Pedido({
            numeroPedido: 1,
            fecha: new Fecha(1, 3, 2020),
            hora: new Tiempo(1, 44, "pm"),
            cliente: cliente1
        })

        let pedido2 = new Pedido({
            numeroPedido: 2,
            fecha: new Fecha(1, 3, 2020),
            hora: new Tiempo(1, 44, "pm"),
            cliente: cliente2
        })

        
        //Registrar Pedidos
        restaurante.registrarPedido(pedido1)
        restaurante.registrarPedido(pedido2)
        //Registrar Productos
        restaurante.registrarProducto(elementoPedido1)
        restaurante.registrarProducto(elementoPedido2)
        pedido1.agregarElemento(elementoPedido1)
        pedido2.agregarElemento(elementoPedido2)
        restaurante.listarPedidos()
        restaurante.listarProductos()
        console.log("")

        
        console.log("----Buscar Pedido----")
        console.log(restaurante.buscarPedido(pedido1))
        console.log(restaurante.buscarPedido(pedido2))
        console.log("")

        console.log("----Buscar Indice Pedidos----")
        console.log(restaurante._encontrarIndicePedido(pedido1))
        console.log(restaurante._encontrarIndicePedido(pedido2))
        console.log("")

        console.log("----Eliminar Pedido----")
        console.log(restaurante.eliminarPedido(pedido1))
        restaurante.listarPedidos()
        restaurante.listarProductos()
        console.log("")

        console.log("----Modificar Pedido----")
        console.log(restaurante.modificarPedido(pedido2,pedido1))
        restaurante.listarPedidos()
        
        
        
        
        
        
    }
}

let tester = new Main()
tester.pruebaTiempo();
tester.pruebaFecha();
tester.pruebaPrecio();
tester.pruebaDireccion();
tester.pruebaCliente();
tester.pruebaClienteFrecuente();
tester.pruebaProducto();
tester.pruebaElementoPedido();
tester.pruebaPedido();
tester.pruebaRestaurante();