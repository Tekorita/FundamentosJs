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

imprimirNombreEnMayusculas(david)
imprimirNombreEnMayusculas(daniela)
imprimirNombreEnMayusculas2({ nombre: 'Mierdin'})

imprimirNombreYEdad(david)

