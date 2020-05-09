// EJERCICIO 1 
// Pedir un numero entero al usuario y determinar si es par o impar
function parImpar (numero){
    var numero = parseInt(prompt("Ingrese un numero"));
    if (numero % 2 == 0){
        console.log("El numero es par");
    }
    else {
        console.log("El numero es impar");
    }
}
// EJERCICIO 2
// Pedir dos numeros al usuario y mostrar suma, resta, multiplicacion y division
function operacionesBasicas (num1, num2){   
    var num1 = parseInt(prompt("Ingrese el primer numero entero"));
    var num2 = parseInt(prompt("Ingrese el segundo numero entero"));
    console.log("La suma de los numeros ingresados es: "+(num1+num2));
    console.log("La resta de los numeros ingresados es: "+(num1-num2));
    console.log("La division de los numeros ingresados es: "+(num1/num2));
    console.log("El producto de los numeros ingresados es: "+(num1*num2));
}
// EJERCICIO 3
// Imprimir la sucesion Fibonacci las veces que el usuario especifique
function Fibo(tope){
    var tope = parseInt(prompt("Ingrese el numero de valores fibonacci que desea recibir"));
}

function Persona (nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

let p = new Persona("Fede","Cáceres");
console.log(p)

