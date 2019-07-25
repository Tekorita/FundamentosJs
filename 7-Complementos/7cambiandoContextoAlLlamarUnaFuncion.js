//Cuando hablamos del contexto de una funcion es el saber quien es el this

const sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc'
}

function saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`)
}

//si ejecutamos saludar(sacha) el resultado sera Hola, mi nombre es undefined
//y sucede porque el this hace referencia a window y en window no se encuentra el nombre

// ahora como hacemos para cambiar el this?
// exite un metodo que se llama bind q justamente lo que hace es cambiar el contexto de una funcion
//por ejemplo:

const saludarASacha = saludar.bind(sacha)

// de esta manera bind lo que hace es regresarnos una nueva funcion atando el this de esa funcion al sacha
//entonces si ejecutamos saludarASacha() nos regresa hola, mi nombre es Sacha
//el contexto de this en saludarASacha es sacha q la pasamos por parametros en saludar


//otro ejemplo puede ser el siguiente

function saludar2(saludo='Hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}
// le colocamos por parametro un hola

setTimeout(saludar.bind(sacha),1000)
setTimeout(saludar.bind(sacha,'hoojojojojo'),1000)

//IMPORTANTE LA FUNCION BIND NO EJECUTA LA FUNCION SI NO SIMPLEMENTE NOS RETORNA UNA NUEVA FUNCION CON EL CONTEXTO CAMBIADO



//TAMBIEN EXITE CALL Y APLY

saludar.call(sacha) // aqui nos trae Hola, mi nombre es sacha! si cambiamos el call por un bind no nos trae nada

saludar.apply(sacha, ['holaa cheee chee chee']) // la diferencia del apply con el call es que como segundo parametro le pasamos un arreglo con los parametros de la funcion
