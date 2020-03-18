export default class Precio {
    
    constructor(formato){
    this._formato = parseFloat(formato).toFixed(2);
    }

    getPrecio(){
        return `$${this._formato}`
    }
}