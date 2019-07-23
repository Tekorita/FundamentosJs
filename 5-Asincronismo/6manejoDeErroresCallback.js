const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const OPTS = { crossDomain: true }

//NUESTRO CALLBACK ES onPeopleResponse
function obtenerPersonaje(id, callback)
{
    //console.log(id)
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
//.fail es una funcion q se usa cuando existe un error en el .get()
    $.get(URL, OPTS, callback)
     .fail(()=>{
        console.log(`Sucedio un error, no se pudo obtener el personaje ${id}`)
    })
}

obtenerPersonaje(1, function(personaje){
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function(personaje){
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function(personaje){
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function(personaje){
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function(personaje){
                    console.log(`Hola, yo soy ${personaje.name}`)       
                })
            })
        })
    })
})
