var david = {
    nombre: 'David',
    apellido: 'Palma',
    edad: 29,
    peso: 70
}

console.log(`Al inicio del año ${david.nombre} pesa ${david.peso} kg`)

/*
const aumentarDePeso = persona => persona.peso += 200
es lo mismo a:
function aumentarDePeso persona
{
    return persona.peso += 200
}
*/
const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const bajarDePeso = persona => persona.peso -= INCREMENTO_PESO


for (var i = 1; i <= DIAS_DEL_AÑO; i++)
{
    var random = Math.random()
    if (random < 0.25)
    {
        aumentarDePeso(david)
    }
    else if(random < 0.50)
    {
        bajarDePeso(david)
    }
}

console.log(`Al final del año ${david.nombre} pesa ${david.peso.toFixed(1)} kg`)