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
const INCREMENTO_PESO = 0.3
const DIAS_DEL_AÑO = 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const bajarDePeso = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
const META = david.peso - 2
var dias = 0

while (david.peso > META)
{
    if(comeMucho())
    {
        aumentarDePeso(david)
    }
    if (realizaDeporte())
    {
        bajarDePeso(david)
    }
    dias+=1
}

console.log(`Pasaron ${dias} días hasta que ${david.nombre} adelgazo 2 kg`)