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

var ids = [1,2,3,4,5,6,7]

/*var promesas = ids.map(function (id){
    return obtenerPersonaje(id)
})*/

var promesas = ids.map(id => obtenerPersonaje(id))

//Promise.all(promesas).then(personajes => console.log(personajes)).catch(onError)

Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)

/*
obtenerPersonaje(1)
    .then(personaje1 =>{
        console.log(`El personaje es ${personaje1.name}`)
        return obtenerPersonaje(2)
    })
    .then(personaje2 => {
        console.log(`El personaje es ${personaje2.name}`)
        return obtenerPersonaje(3)
    })
    .then(personaje3 => {
        console.log(`El personaje es ${personaje3.name}`)
        return obtenerPersonaje(4)
    })
    .then(personaje4 => {
        console.log(`El personaje es ${personaje4.name}`)
        return obtenerPersonaje(5)
    })
    .then(personaje5 => {
        console.log(`El personaje es ${personaje5.name}`)
        return obtenerPersonaje(6)
    })
    .catch(onError)

*/