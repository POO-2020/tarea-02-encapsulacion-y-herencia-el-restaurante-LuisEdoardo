export default class Fecha {


    constructor(dia, mes, año) {
        this._fecha = new Date (año, mes -1, dia)
        this._mesesAño = [
            "Enero", 
            "Febrero", 
            "Marzo", 
            "Abril", 
            "Mayo", 
            "Junio", 
            "Julio", 
            "Agosto", 
            "Septiembre", 
            "Octubre", 
            "Noviembre", 
            "Diciembre"
        ]
        this._diasSemana = [
            "Domingo",
            "Lunes", 
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado"   
        ]
    }

    getAños() {
        let estYears = new Date (Date.now() - this._fecha)
        var Years = 1000 * 60 * 60 * 24 * 365;
        let cantY = Math.trunc(estYears/Years)
        return `${cantY}`
    }

    getMeses (){
        let estMeses = new Date(Date.now() - this._fecha)
        let Meses = (1000 * 60 * 60 * 24 * 365) / 12;
        let cantM = Math.trunc(estMeses / Meses)
        return `${cantM}`
    }

    getSemanas() {
        let estSemanas = new Date(Date.now() - this._fecha)
        let Semanas = (1000 * 60 * 60 * 24 * 365) / 52.1429
        let cantS = Math.trunc(estSemanas / Semanas)
        return `${cantS}`
    }

    getDias() {
        let estDias = new Date(Date.now() - this._fecha)
        let Dias = 1000 * 60 * 60 * 24
        let cantD = Math.trunc(estDias / Dias)
        return `${cantD}`
    }

    getFecha() {
        return `${this._fecha.getDate()}/${this._mesesAño[this._fecha.getMonth()]}/${this._fecha.getFullYear()}`
    }

    getDiaFecha() {
        return `${this._diasSemana[this._fecha.getDay()]}`
    }
}