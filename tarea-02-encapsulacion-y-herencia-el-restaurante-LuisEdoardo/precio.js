export default class Precio {
    
    constructor(formato){
    this.formato = parseFloat(formato).toFixed(2);
    }

    getPrecio(){
        return `$${this.formato}`
    }
}