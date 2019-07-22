var x = 4, y = '4'

//en este ejemplo con == javascritps lleva los dos valores a un mismo tipo
//de dato y los compara por ende 4 numerico es igual a 4 string

x==y //true

//Ahora para comparar ademas del valor el tipo de dato se usa el ===

x===y //false


//Ahora comparemos objetos

var sacha = 
{
    nombre:'Sacha'
}

var otraPersona = 
{
    nombre:'Sacha'
}

//Cuando comparamos 2 objetos con el mismo atributo con el == o ===
//lo que hace javascript es comparar la variable de referencia y en este caso
//sacha no se llama igual a otraPersona

sacha == otraPersona //false

//ahora para comparar dos objetos y q sean igual se le asigna sacha a persona

var otraPersona = sacha // asignar sacha en otraPersona hace q sean 2 objetos iguales en la memoria ram

sacha == otraPersona //true
sacha === otraPersona //true

//Ahora si le cambiamos el valor a otraPersona cambia tambien para sacha porq son el mismo objeto en memoria ram
