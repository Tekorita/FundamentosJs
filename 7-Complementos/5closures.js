// Los closures es una funcion que recuerda el estado de una cosa cuando fue invocada

function crearSaludo(finalDeFrase) {
    return function (nombre){
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('guey')
const saludoColombiano = crearSaludo('amigo')

saludoArgentino('David')
saludoMexicano('David')
saludoColombiano('David')