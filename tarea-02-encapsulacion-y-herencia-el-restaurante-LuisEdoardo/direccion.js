export default class Direccion {

    constructor(calle,numExt,numInt,colonia,CP,municipio,ciudad){
        this._calle = calle;
        this._numExt = numExt;
        this._numInt = numInt;
        this._colonia = colonia;
        this._CP = CP;
        this._ciudad = ciudad;
        this._municipio = municipio;
    }

    getFormatoCorto(){
        return `${this._calle} ${this._numExt}`
    }

    getFormatoExtendido(){
        return `${this._calle} ${this._numExt}, ${this._numInt}, ${this._colonia}, ${this._CP}, ${this._municipio}, ${this._ciudad}`
    }
}