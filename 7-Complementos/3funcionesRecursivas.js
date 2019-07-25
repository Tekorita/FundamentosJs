//Recursividad

/*

veamos con un ejemplo una simple division

el 13 es nuestro dividendo y el 4 el divisor

    13 |_4____

    13 - 4 = 9      1
    9 - 4 = 5       1
    5 - 4 = 1       1
    1 - 4 = -3      0

    y el resultado es 3 q es la suma de 1

    basicamente la condicion para que sigamos haciendo cuentas
    es que el dividendo sea mayor o igual que el divisor por ejemplo al final ya 1 no se le puede restar a 4

    Para realizar recursividad necesitamos dos cosas
    1 Un caso base (en este ejemplo el caso base es cuando el dividendo estrictamente tiene que ser menor que el divisor)
    2 Un caso recursivo 
*/

    function divisionEntera(dividendo, divisor) {
        if (dividendo < divisor) {
            return 0
        }
        return 1 + divisionEntera(dividendo - divisor, divisor)
    }