//declaramos un objetos con las llaves
var david = 
{
    nombre: 'David',
    apellido: 'Palma',
    edad: 29
}

var daniela = 
{
    nombre: 'Daniela',
    apellido: 'Moros',
    edad: 25
}

function imprimirNombreEnMayusculas(persona) 
{
    //var nombre = persona.nombre.toUpperCase()
    //console.log(nombre)
    var { nombre } = persona
    //console.log(persona.nombre.toUpperCase())
    console.log(nombre.toUpperCase())
}

//Otro metodo para obtener por parametros de una funcion el atributo de un objeto
function imprimirNombreEnMayusculas2({ nombre })
{
    console.log(nombre.toUpperCase())
}

function imprimirNombreYEdad(persona)
{
    var {nombre, apellido, edad} = persona
    console.log(`${nombre} ${apellido} tiene ${edad} años`)
}

//Parametros como referencia o como valor donde una funcion recibe
//como parametros un objeto y retorna un nuevo objeto sin modificar
//el atributo del objeto inicial

function cumpleaños(persona)
{
    return {
        //... es para copiar o desglozar el objeto
        ...persona, 
        edad: persona.edad +1
    }
}

imprimirNombreEnMayusculas(david)
imprimirNombreEnMayusculas(daniela)
imprimirNombreEnMayusculas2({ nombre: 'Mierdin'})

//ahora cuando imprimimos esta funcion modificamos el atributo
//edad del objeto david pero si despues de eso llamamos al objeto david
//vemos que el atributo no se modifico
imprimirNombreYEdad(david)

