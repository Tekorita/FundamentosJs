// El concepto de memoizacion nos permite ahorrar procesamiento, ahorrar computo guardando ciertos resultados de algunas cuentas

/*

por ejemplo calculos el factorial de 6 y 12

!6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
!12 = 12 * 11 * 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

como podemos ver cuando calculamos el factorial de 12 al llegar al valor de 6 estamos repitiendo
todo el proceso del factorial de 6 q esta arriba

la idea de memoizacion es guardar por ejemplo el !6 para que cuando se calcule el factorial de 12 y llego al 6 no tenga q volver
hacer el calculo ya q existe el !6 por ejemplo

!12 = 12 * 11 * 10 * 9 * 8 * 7 * !6

*/

function factorial(n) {
    if (!this.cache) {
        this.cache = {}
    }
    debugger
    if (this.cache[n]) {
        return this.cache[n]
    }

    if (n === 1) {
        return 1
    }

    this.cache[n] = n * factorial(n - 1)
    debugger
    return this.cache[n]


}

//a medida de q se recorre la funcion se va a ir guardando el resultado en this.cache[] de la funcion
//es decir que queda guardado en memoria
// de tal manera que cuando vuelvas a calcular el factorial por ejemplo de 6 ya no tiene que volver hacer todo el calculo
// si no que devuelve automaticamente el resultado que ya se encuentra en memoria
//AHorrando asi tiempo, costo y procesamiento del codigo
