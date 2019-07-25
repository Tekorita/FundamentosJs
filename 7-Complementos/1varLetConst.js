//Diferencia en declarar variables con var, let y const

//la manera mas antigua de declarar variables es var
//ejemplo 1
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

function esMayorDeEdad(persona)
{
    if (persona.edad >= 18){
        var mensaje = 'Es mayor de edad'
    }
    else
    {
        var mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
}
//VAR
//el alcance de la declaracion de una variable con var es global
//por ejemplo mensaje lo declaramos dentro de los condicionales y en consola desde afuera podemos accesar y verificar que var mensaje existe!

//LET
//una variable let a diferencia de var pierde el alcance, si por ejemplo cambiamos let mensaje por var mensaje solo vamos a poder tener acceso a mensaje dentro del bloque de codigo if y else
//ahora para tener acceso a let mensaje tendriamos que declararlo fuera del if y else para que tenga mayor alcance

//CONST
//const se comporta parecido a let solo que no podemos modificar el valor ya que es constante es decir no se puede reasignar su valor
//lo que si se puede hacer es lo siguiente:
/*
const num = [1,2,3,4,5,6,7]
num.push(8)

como se puede ver estamos modificando el array agregandole el 8 
entonces si se puede modificar const num porque le estoy agregando un valor al array
pero no puedo reasignarle un nuevo valor

*/

esMayorDeEdad(sacha)

//ejemplo 2

for (var i = 0; i < 10; i++){
    console.log(i)
}

console.log(`Termino el for, el valor de i es ${i}`)

//En este ejemplo el console.log que esta afuera del ciclo for se puede mostrar sin problemas
//Ahora si en el ciclo for var i lo cambio por let i vamos a tener un error porq let pierde el alcance y solo se puede usar dentro del ciclo for
//por lo tanto no se puede usar en el console.log que se encuentre afuera del ciclo for

//RECOMENDACION
/*
LO MEJOR ES SIEMPRE REDUCIR AL MINIMO EL ALCANCE DE LAS VARIABLES.
LO MEJOR ES NO USAR VAR Y USAR LET SI ES QUE VAMOS A REASIGNAR VARIABLES
Y SI NUNCA LA TENEMOS QUE REASIGNAR O NO LE VAMOS A CAMBIAR EL VALOR ES MEJOR USAR CONST
*/