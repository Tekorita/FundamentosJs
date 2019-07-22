var david = {
    nombre : 'David',
    apellido : 'Palma',
    altura : 1.80,
    cantidadDeLibros : 120
}

var andres = {
    nombre : 'Andres',
    apellido : 'Jhonson',
    altura : 1.98,
    cantidadDeLibros : 280
}

var luis = {
    nombre : 'Luis',
    apellido : 'Pernia',
    altura : 1.82,
    cantidadDeLibros : 90
}

var geraldine = {
    nombre : 'Geraldine',
    apellido : 'Rojas',
    altura : 1.70,
    cantidadDeLibros : 320
}

var ana = {
    nombre : 'Ana',
    apellido : 'De sousa',
    altura : 1.66,
    cantidadDeLibros : 50
}

var personas = [david, andres, luis, geraldine, ana]

//imprimimos la altura de david
/*
for (var i = 0; i < personas.length; i++)
{
    //var persona = personas[i]
    console.log(`${personas[i].nombre} mide ${personas[i].altura}`)
}*/

//-------------------------FILTER-----------------------------
//-------FILTRAS ELEMENTOS DE UN ARRAY---------
// PARA ESO USAMOS FILTER

const esAlta = persona => persona.altura > 1.8 // ahora desglozamos esAlta
// const esAlta = ({altura}) => altura > 1.8
const esBaja = persona => persona.altura < 1.73
const esMediana = persona => persona.altura > 1.73 && persona.altura <= 1.80

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)
var personasMedianas = personas.filter(esMediana)
//otro modo de escribir la funcion
/*
var personasAltas = personas.filter(function(){
    return persona.altura > 1.8    
})
*/
console.log("personas altas")
console.log(personasAltas)
console.log("personas bajas")
console.log(personasBajas)
console.log("personas medianas")
console.log(personasMedianas)


//-------------------------MAP-----------------------------
//Transformar un array con MAP donde con map se modifica un array

const pasarAlturaACms1 = persona => {
    //persona.altura = persona.altura * 100
    persona.altura *= 100
    return persona
}

//hasta aqui lo q hemos hecho es modificar el array
//ahora vamos a retornar un nuevo objeto con la altura modificada

/*
const pasarAlturaACms2 = persona => {
    //creamos un nuevo objeto con la altura modificada
    return {
        ...persona, //tres puntos para desglozar a la persona
        altura: persona.altura * 100
    }
}
*/

//como pasarAlturaACms2 returna un solo objeto podemos optimizar la funcion de la siguiente manera

const pasarAlturaACms2 = persona => ({
        ...persona, //tres puntos para desglozar a la persona
        altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms2)
console.log("personas en centimetros")
console.log(personasCms)

//ahora si comparamos y vemos el array original notamos que no fue modificado
//si usamos pasarAlturaACms1 modificamos el array de origen
//si usamos pasarAlturaACms2 no modificamos el array de origen

console.log(personas)


//-------------------------REDUCE-----------------------------
//reduce lo que hace es reducir un array a un valor unico

/*
var acum = 0

for (var i = 0; i < personas.length; i++)
{
    acum = acum + personas[i].cantidadDeLibros
}

console.log(`En total todos tienen ${acum} libros`)
*/

//Ahora hacemos lo mismo pero usando el reduce

const reducer = (acum, persona) => {
    return acum + persona.cantidadDeLibros
}

//podemos optimizar la funcion reducer como siempre de la siguiente manera:
//const reducer (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

//los parametros que recibe reduce son el contador por ejemplo i++, i el valor de inicio q es 0
//En este caso le pasaremos por parametro un funcion llamada reducer
var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)










