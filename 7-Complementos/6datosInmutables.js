//Las estructuras de datos inmutables nos ayuda a evitar bugs y efectos de lado

const sacha = {
    nombre: 'David',
    apellido: 'Palma',
    edad: 29
}

const cumpleanos = persona => persona.edad++

/* por ejemplo si llamo la funcion cumpleaños(sacha) varias veces
    se modifica tantas veces la llamemos y de esa manera se crea el efecto de lado
*/

const cumpleanosInmutable = persona => ({
    ...persona, //... suspensivos es para desglozar el objeto persona
    edad: persona.edad + 1 
    //Aca cuando desglozamos persona es agarrar su atributo edad y poonerlo en un nuevo objeto 
})

/*
entonces si llamo cumpleaños inmutable vemos que siempre se va a modificar la edad de sacha
pero si luego consulto el objeto de sacha la edad sigue siendo la misma

en cambio si llamo cumpleaños vamos a ver que ademas de que modifica la edad tambien modifica la edad del objeto sacha
*/