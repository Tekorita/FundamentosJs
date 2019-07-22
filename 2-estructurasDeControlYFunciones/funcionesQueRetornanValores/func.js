var sacha = 
{
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 18,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

var juan = {
    nombre: 'Juan',
    apellido: 'Arvelo',
    edad: 17
}

const MAYORIA_DE_EDAD = 18 //Las constantes son valores fijos globales se escriben en mayusculas y se separan con _

function esMayorDeEdad(persona)
{
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona)
{
    if (esMayorDeEdad(persona))
    {
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else
    {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad(juan)

