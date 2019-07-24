const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const OPTS = { crossDomain: true }

//NUESTRO CALLBACK ES onPeopleResponse

//LAS PROMESAS SON VALORES QUE AUN NO CONOCEMOS
//VAMOS A CREAR UNA PROMESA DENTRO DE LA FUNCION OBTENERPERSONAJE
/*
LAS PROMESAS TIENES 3 ESTADOS
EL PRIMERO ES -PENDING QUE ES DONDE SE INICIALIZA LA PROMESA

EL SEGUNDO ES FULFILLED QUE ES EL ESTADO A DONDE PASA LA PROMESA SI SE RESUELVE

EL TERCERO ES REJECTED QUE ES EL ESTADO A DONDE PASA LA PROMESA SI GENERA ERROR

-OBTENER VALOR DE FULFILLED (se usa la funcion de .then donde le pasamos una funcion donde obtenemos como parametro el valor que esperamos)
    .then(val => ...) 

-OBTENER VALOR DE REJECTED (se usa la funcion de .catch donde le pasamos una funcion donde obtenemos como parametro el error que sucerio)
    .catch(err => ...)  
    
Asi se crea una promesa:

new Promise(function(resolve, rejected))
{
    ...
}.then(valor=>{

}).cath(error=>{

})
*/
function obtenerPersonaje(id)
{
    return new Promise((resolve, reject) => {
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

obtenerPersonaje(29)
    .then(function(personaje){
        console.log(`El personaje es ${personaje.name}`)
    })
    .catch(onError)

