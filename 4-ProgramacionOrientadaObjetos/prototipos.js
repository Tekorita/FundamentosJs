// Para hacer una herencia del prototipo(clase)hija Desarrollador a el prototipo padre Persona
// creamos la siguiente funcion a continuacion

//1er paso le decimos al prototipo hijo quien es el prototipo padre definiendo una funcion fn o noop

function heredaDe(prototipoHijo, prototipoPadre)
{
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

//---------------------------------------------------------------------------------------------------

//Ejemplo 1

function Persona() {
    console.log('Me ejecutaron')
}

//Persona es un prototipo

//ejemplo 2
//this hace referencia al objeto de Persona2
function Persona2(nombre, apellido, estatura) {
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
}

//Ahora para crear una funcion o metodo (saludar) del objeto Persona2 hacemos lo siguiente

Persona2.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona2.prototype.verAltura = function () {
    if (this.estatura > 1.80)
    {
        console.log("Eres alto")
    }
    else
    {
        console.log("No eres alto")
    }
}

//---------------------IMPORTANTE!!!!-----------------------
//Las funciones de prototipos no se pueden convertir en arrow function o funcion flecha debido a que
//el this del prototipo hace referencia a window o a variables globales q no estan definidas
//-----------------------------------------------------------


//---------------HERENCIA DE PROTOTIPOS---------------------
// --------------HERENCIA PROTOTIPAL---------------------------

//DESARROLLADOR ES UN PROTOTIPO O CLASE
function Desarrollador(nombre, apellido)
{
    this.nombre = nombre
    this.apellido = apellido
}

//Siempre que se hace instancia de la clase que hereda se pasa por parametro(claseHija, clasePadre)
heredaDe(Desarrollador, Persona2)

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

var david = new Persona2('David', 'Palma', 1.80)
david.saludar()

var juan = new Desarrollador('David', 'Palma', 1.80)
juan.saludar()
//davidHereda.saludar()
//var sachaHereda = new heredaDe('David', 'Palma',1.85)

/*
var sacha = new Persona()

var sacha2 = new Persona2('David', 'Palma',1.85)
sacha2.saludar()
sacha2.verAltura()

var sacha3 = new Persona2('Erika', 'Gutierrez',1.75)
sacha3.saludar()
sacha3.verAltura()
*/
/*
cada objeto dentro de ellos en memoria guardara con el this el nombre y apellido de cada objeto*/

//--------------------NOTA-------------------------------

/*
Para verificar y ver si un prototipo hereda de otro podemos ver directamente el objeto
por ejemplo: Persona

y si verificamos en consola podemos ver sus propiedades, atributos y constructores
 luego en 
 __proto__ object

 podemos ver los metodos del atributo padre 
*/