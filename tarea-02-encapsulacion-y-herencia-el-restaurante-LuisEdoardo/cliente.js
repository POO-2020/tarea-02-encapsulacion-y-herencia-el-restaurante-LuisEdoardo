export default class Cliente {

    constructor(nombre,direccion,telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    getPerfil(){
        return `${this.nombre} | ${this.direccion.getFormatoExtendido()} | ${this.telefono}`
    }
}