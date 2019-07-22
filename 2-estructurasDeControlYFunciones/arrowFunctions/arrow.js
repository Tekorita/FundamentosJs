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


//otra manera de escribir una funcion es de la siguente manera

/*var esMayorDeEdad = function (persona)
{
    return persona.edad >= MAYORIA_DE_EDAD
}*/

//Ejemplo de arrow functions donde se usa => 
//es la misma funcion que el ejemplo anteior
/*
const esMayorDeEdad = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD
}
*/
//ahora la optimizamos mas:

//const esMayorDeEdad = (persona) => persona.edad >= MAYORIA_DE_EDAD

//ahora vamos a optimizar mas la funcion destructurando el objeto persona

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

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

//Funcion escrita en modo convencional
/*
function permitirAcceso(persona)
{
    if(!esMayorDeEdad(persona))
    {
        console.log('Acceso denegado')
    }
}
*/
const permitirAcceso = ({edad}) => {
    if(!esMayorDeEdad(edad))
    {
        console.log("Acceso denegado")
    }
    else
    {
        console.log("Acceso permitido")
    }
}
//Ahora la transformamos en un arrow funcion


//imprimirSiEsMayorDeEdad(juan)
permitirAcceso(juan)