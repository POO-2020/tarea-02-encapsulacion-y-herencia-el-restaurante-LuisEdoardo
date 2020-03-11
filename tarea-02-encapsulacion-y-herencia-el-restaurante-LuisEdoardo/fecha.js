export default class Fecha {


    constructor(dia, mes, año) {
        this.fecha = new Date (año, mes -1, dia)
        this.mesesAño = [
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
        this.diasSemana = [
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
        let estYears = new Date (Date.now() - this.fecha)
        var Years = 1000 * 60 * 60 * 24 * 365;
        let cantY = Math.trunc(estYears/Years)
        return `${cantY}`
    }

    getMeses (){
        let estMeses = new Date(Date.now() - this.fecha)
        let Meses = (1000 * 60 * 60 * 24 * 365) / 12;
        let cantM = Math.trunc(estMeses / Meses)
        return `${cantM}`
    }

    getSemanas() {
        let estSemanas = new Date(Date.now() - this.fecha)
        let Semanas = (1000 * 60 * 60 * 24 * 365) / 52.1429
        let cantS = Math.trunc(estSemanas / Semanas)
        return `${cantS}`
    }

    getDias() {
        let estDias = new Date(Date.now() - this.fecha)
        let Dias = 1000 * 60 * 60 * 24
        let cantD = Math.trunc(estDias / Dias)
        return `${cantD}`
    }

    getFecha() {
        return `${this.fecha.getDate()}/${this.mesesAño[this.fecha.getMonth()]}/${this.fecha.getFullYear()}`
    }

    getDiaFecha() {
        return `${this.diasSemana[this.fecha.getDay()]}`
    }
}