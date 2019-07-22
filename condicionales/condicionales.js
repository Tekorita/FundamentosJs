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

function imprimirProfesiones(persona)
{
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero)
    {
        console.log('Ingeniero')
    }
    else
    {
        console.log('No es ingeniero')
    }
    if (persona.cocinero)
    {
        console.log('Es cocinero')
    }
    if (persona.cantante)
    {
        console.log('Es cantante')
    }
    if (persona.guitarrista)
    {
        console.log('Es guitarrista')
    }
    if (persona.drone)
    {
        console.log('Vuela drones')
    }
}

function imprimirSiEsMayorDeEdad(persona)
{
    if(persona.edad >= 18)
    {
        console.log('es mayor de edad')
    }
    else
    {
        console.log('es menor de edad')
    }
}

imprimirProfesiones(sacha)
imprimirSiEsMayorDeEdad(sacha)