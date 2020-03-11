export default class Tiempo {
   
    constructor(hora, minutos, periodos) {
        this.hora = hora;
        this.minutos = minutos;
        this.periodos = periodos.toLowerCase();
        
    }

    getFormato12(){
        return `${this.hora}:${this.minutos} ${this.periodos}`
    }

    getFormato24(){
        if (this.periodos == "pm"){
            let masHora = this.hora + 12
                return `${masHora}:${this.minutos}`
        }  else {
                return `${this.hora}:${this.minutos}`
        }
    }

}