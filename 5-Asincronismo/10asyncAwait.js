const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const OPTS = { crossDomain: true }

//ASYNCA AWAY


function obtenerPersonaje(id)
{
    return new Promise((resolve, rejected) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(URL, OPTS, function(data){
            resolve(data)
        })
        .fail(() => rejected(id))
    })
}

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

//ejemplo de funcion async-await
async function obtenerPersonajes()
{
    var ids = [1,2,3,4,5,6,7]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    }
    catch (id)
    {
        onError(id)
    }
}

obtenerPersonajes()