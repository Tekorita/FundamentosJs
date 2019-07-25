function diasEntreFechas(fecha1, fecha2) {
    const unDia = 1000 * 60 * 60 * 24 // aqui obtenemos cuantos milisegundos hay en 1 día
    //con math.abs calculamos el valor absoluto de la cuenta de fecha1 y fecha2 y si es negativo lo convierte a positivo
    const diferencia = Math.abs(fecha1 - fecha2)

    return Math.floor(diferencia / unDia) // floor para redondear para abajo

}

const hoy = new Date() //new date nos trae la fecha actual 
const nacimiento = new Date(1990, 7, 12) //year-month-day

diasEntreFechas(hoy, nacimiento)