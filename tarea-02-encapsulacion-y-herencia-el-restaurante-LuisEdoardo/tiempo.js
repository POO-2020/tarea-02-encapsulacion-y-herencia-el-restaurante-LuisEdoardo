export default class Tiempo {
   
    constructor(hora, minutos, periodos) {
        this._hora = hora;
        this._minutos = minutos;
        this._periodos = periodos.toLowerCase();
        
    }

    getFormato12(){
        return `${this._hora}:${this._minutos} ${this._periodos}`
    }

    getFormato24(){
        if (this._periodos == "pm"){
            let masHora = this._hora + 12
                return `${masHora}:${this._minutos}`
        }  else {
                return `${this.hora}:${this._minutos}`
        }
    }

}