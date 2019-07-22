//Ejemplo 1

function Persona() {
    console.log('Me ejecutaron')
}

//Persona es un prototipo

var sacha = new Persona()

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

var sacha2 = new Persona2('David', 'Palma',1.85)
sacha2.saludar()
sacha2.verAltura()

var sacha3 = new Persona2('Erika', 'Gutierrez',1.75)
sacha3.saludar()
sacha3.verAltura()

//cada objeto dentro de ellos en memoria guardara con el this el nombre y apellido de cada objeto