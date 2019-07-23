class Persona {
    constructor(nombre, apellido, altura)
    {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    
    saludar(fn)
    {
        var nombre = this.nombre
        var apellido = this.apellido
        console.log(`Hola me llamo ${nombre} ${apellido}`)
        if (fn)
        {
            fn(nombre, apellido)
        }
    }

    soyAlto()
    {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura)
    {
        super(nombre, apellido, altura)
    }
    saludar(fn) 
    {
        var nombre = this.nombre
        var apellido = this.apellido
        //var {nombre,apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy programador`)
        if (fn)
        {
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev)
{
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev)
    {
        console.log(`Ah mira, no sania que eras desarrollador`)
    }
}

var sheyla = new Persona('Sheyla','Colmenarez',1.55)
var david = new Desarrollador('David', 'Palma',1.80)
var tekora = new Desarrollador('Tekorita', 'Drojansi',1.95)

sheyla.saludar(responderSaludo)
david.saludar(responderSaludo)
tekora.saludar(responderSaludo)
