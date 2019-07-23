const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const OPTS = { crossDomain: true }

//NUESTRO CALLBACK ES onPeopleResponse
function obtenerPersonaje(id, callback)
{
    console.log(id)
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(URL, OPTS, function (persona) {
        console.log(`Hola yo soy, ${persona.name}`)
        if(callback)
        {
            callback()
        }
    })
}

//EL PROBLEMA QUE TENIAMOS EN EL ASINCRONISMO ES QUE SE LLAMABAN EN DIREFENTES ORDEN
//UNA MANERA DE HACER QUE SE EJECUTE UN PRIMERO UN REQUEST Y LUEGO EL OTRO Y ASI SUCESIVAMENTE
/*
Es realizando un callback por ejemplo

modificamos function obtenerPersonaje(id) y le agregamos otro parametro llamado callback function obtenerPersonaje(id, callback)

y luego cuando llamamos la funcion como segundo parametros le pasamos la otra funcion que se ejecutara despues de que termine la primera
asi se funciona un callback
por ejemplo:

ahora como se ve horrible llamar los callbacks de esa manera se llama: callbacks hell

*/

//
obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4, function(){
                obtenerPersonaje(5, function(){       
                })
            })
        })
    })
})
