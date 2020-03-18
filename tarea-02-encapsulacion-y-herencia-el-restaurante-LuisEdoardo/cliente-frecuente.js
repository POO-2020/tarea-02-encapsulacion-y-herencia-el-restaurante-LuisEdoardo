import Cliente from "./cliente.js"
import Fecha from "./fecha.js"
export default class ClienteFrecuente extends Cliente {

    constructor({numeroCliente, fechaRegistro,nombre,direccion,telefono,}){
        super({nombre,direccion,telefono})
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
        this._numeroCliente = numeroCliente;
        this._fechaRegistro = fechaRegistro;
    }
    
    getPerfil(){
        return `${this._numeroCliente} ${this._fechaRegistro.getFecha()} ${this._nombre} ${this._direccion.getFormatoExtendido()} ${this._telefono}`
    }
}