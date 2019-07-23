console.log('a')
setTimeout (() => console.log('b'), 0)
//console.log('b')
console.log('c')
console.log('c')
console.log('c')
console.log('c')
console.log('c')

/*
a nivel tecnico en la cola de tareas de javascript siempre ejecuta primero
las lineas de console.log
y setTimeout que recibe una funcion flecha pasa a la cola de tareas 
y asi le coloquemos 0 seg al setTimeOut el orden en q se muestra sera

a
c
c
c
c
c
b

porq el setTimeout entra en la cola de tareas y se ejecuta luego de q javascript corre las lineas principales
que en este caso son
console.log('a')
console.log('c')

CUANDO JAVASCRIPT TERMINA DE EJECUTAR EL PROGRAMA PRINCIPAL AL FINAL EJECUTA LO QUE ESTA EN LA COLA DE TAREAS
DONE SE ENCUENTRAN LAS FUNCIONES, CLASES Y PROTOTIPOS Y EN ESTE CASO ES DONDE EJECUTA SETTIMEOUT

EL EVENT LOOP EN ESTE EJEMPLO ES EL PROGRAMA PRINCIPAL DONDE SE EJECUTAN LAS LINEAS
console.log('a')
console.log('c')
console.log('c')
console.log('c')
console.log('c')
console.log('c')

Y LA COLA DE TAREAS ES:
setTimeout (() => console.log('b'), 0)


AHORA SI EN EL EVENT LOOP COLOCO UN FOR QUE RECORRA UN NUMERO DE 1000000

EL SETTIMEOUT Q SE ENCUENTRA EN LA COLA DE TAREAS Y SE EJECUTA EN 0SEG TIEN Q ESPERAR A Q TERMINE EL CICLO FOR EN EL EVENT LOOP
*/