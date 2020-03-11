export default class Direccion {

    constructor(calle,numExt,numInt,colonia,CP,municipio,ciudad){
        this.calle = calle;
        this.numExt = numExt;
        this.numInt = numInt;
        this.colonia = colonia;
        this.CP = CP;
        this.ciudad = ciudad;
        this.municipio = municipio;
    }

    getFormatoCorto(){
        return `${this.calle} ${this.numExt}`
    }

    getFormatoExtendido(){
        return `${this.calle} ${this.numExt}, ${this.numInt}, ${this.colonia}, ${this.CP}, ${this.municipio}, ${this.ciudad}`
    }
}