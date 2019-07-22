var david = {
    nombre : 'David',
    apellido : 'Palma',
    altura : 1.80
}

var andres = {
    nombre : 'Andres',
    apellido : 'Jhonson',
    altura : 1.98
}

var luis = {
    nombre : 'Luis',
    apellido : 'Pernia',
    altura : 1.82
}

var geraldine = {
    nombre : 'Geraldine',
    apellido : 'Rojas',
    altura : 1.70
}

var ana = {
    nombre : 'Ana',
    apellido : 'De sousa',
    altura : 1.66
}

var personas = [david, andres, luis, geraldine, ana]

//imprimimos la altura de david
for (var i = 0; i < personas.length; i++)
{
    //var persona = personas[i]
    console.log(`${personas[i].nombre} mide ${personas[i].altura}`)
}
