const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

//para hacer un request con jquery tenemos q llamar al metodo $.get()
//El primer parametro es la url de la pagina a buscar 
//El segundo parametro es indicarle a jquery el reques lukeUrl se hara en otra pagina
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 2)}`
const opts = { crossDomain: true }
const onPeopleResponse = function (persona) {
    console.log(`Hola yo soy, ${persona.name}`)
}

//UN CALLBACKS ES UNA FUNCION QUE SE LLAMA EN FUTURO UN MOMENTO DETERMINADO

//Segun jquery.get() recibe como argumentos lo siguiente:
/*
parametro1: URL (likeUrl)
parametro2: data a donde mostramos la data (opts)
parametro3: success que es una funcion callback que nos devuelve un objeto

en el siguiente ejemplo en una function anonima pasamos por parametros el objeto luke q es el objeto q tiene toda la infor que retorna
*/

//$.get(lukeUrl, opts, function(luke){
    //console.log(arguments) //arguments es una palabra reservada de javascript que nos permite visualizar los argumentos de una funcion que nos trae en este caso podemos ver los argumentos que trae function()
  //  console.log(`Hola yo soy, ${luke.name}`)
//})

//EL CALLBACK EN ESTE CASO ES function(luke) donde nos traemos las data una vez que el reques sea exitoso

$.get(lukeUrl, opts, onPeopleResponse)