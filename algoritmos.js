/* algoritmo que realiza la suma entre dos valores ingresados por el usuario*/
function suma() {
    let A = parseInt(prompt("Ingrese el primer valor que va a sumar:"));
    let B = parseInt(prompt("Ingrese el segundo valor que va a sumar:"));
    let suma = A + B;
    console.log("La suma de " + A + " y " + B + " es igual a " + suma);
    alert("La suma de " + A + " y " + B + " es igual a " + suma);
}

// algoritmo que determina la suma, resta, multiplicacion y division entre dos valores ingresados por el usuarios

function operaciones() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));

    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;

    let mensaje = 
        `La suma de ${num1} y ${num2} es ${suma}\n` +
        `La resta de ${num1} y ${num2} es ${resta}\n` +
        `La multiplicación de ${num1} y ${num2} es ${multiplicacion}\n` +
        `La división de ${num1} y ${num2} es ${division}`;

    console.log(mensaje);
    alert(mensaje);
}


// 3realizar un algoritmo que determine el cuadrado de un numero ingresado por el usuario



function cuadrado() {
    let numero = parseInt(prompt("Ingrese el número:"));
    let resultado = numero ** 2;
    console.log("El cuadrado de " + numero + " es " + resultado);
    alert("El cuadrado de " + numero + " es " + resultado);
}
 




//  4. realizar un algoritmo que determine el area de un triangulo  a partir de la base  y altura ingresadas por el usuario

function area() {
    let base = parseFloat(prompt("Ingrese la base del triángulo:"));
    let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
    let area = (base * altura) / 2;
    console.log("El área del triángulo es " + area);
    alert("El área del triángulo es " + area);
}

// 5.  realizar un algoritmo que determine los kilometros, pulgadas y metros de un valor dado en centimetros

function conversionDeUnidades() {
    let cm = parseFloat(prompt("Ingrese un valor en centímetros:"));
    let km = cm / 100000;
    let pulgadas = cm / 2.54;
    let metros = cm / 100;

    console.log(cm + " cm en kilómetros es " + km);
    console.log(cm + " cm en pulgadas es " + pulgadas);
    console.log(cm + " cm en metros es " + metros);
    alert(cm + " cm son " + km + " kilómetros, " + pulgadas + " pulgadas, y " + metros + " metros.");
}


// 6.  realizar un algoritmo que determine el numero mayor de dos numeros ingresados por el usuario



function mayorDeDosNumeros() {
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));

    if (numero1 === numero2) {
        console.log("Los números son iguales.");
        alert("Los números son iguales.");
    } else if (numero1 > numero2) {
        console.log("El número " + numero1 + " es mayor que " + numero2);
        alert("El número " + numero1 + " es mayor que " + numero2);
    } else {
        console.log("El número " + numero2 + " es mayor que " + numero1);
        alert("El número " + numero2 + " es mayor que " + numero1);
    }
}





// 7. realizar un algoritmo que determine el numero menor de 3 numeros ingresados por el usuario


function menorDeTresNumeros() {
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));
    let numero3 = parseInt(prompt("Ingrese el tercer número:"));

    let menor = Math.min(numero1, numero2, numero3);
    console.log("El número menor es " + menor);
    alert("El número menor es " + menor);
}

//  8. realizar un algoritmo que solicite al estudiante su nombre,  la materia  y 8 calificaciones de la misma entre 1 y 10 determinar con esta informacion   si el estiante aprobo o reprobo teniendo en cuenta que se aprueba con 6.2 en adelante
   

function promedio() {
    let nombre = prompt("Ingrese su nombre:");
    let materia = prompt("Ingrese la materia:");
    let total = 0;

    for (let i = 0; i < 8; i++) {
        total += parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
    }

    let promedio = total / 8;
    let resultado = promedio >= 6.2 ? "aprobado" : "reprobado";
    alert(`${nombre}, usted ha ${resultado} la materia ${materia} con un promedio de ${promedio}`);
}


// 9.determinar si un numero ingresado por el usuario es par o impar


function  paroimpar(){

    let numeroingresado = parseInt(prompt(" ingrese el numero "))

    if(numeroingresado % 2 == 0){
        console.log(" el numero ingresado es un numero " + numeroingresado +  " es par");
        alert(" el numero ingresado es un numero " + numeroingresado +  " es par");

    }else{
        alert(" el numero ingresado " + numeroingresado + " es impar");
    }

}


//  10. un individuo desea invertir su capital en un banco y requere saber cuanto dinero ganara despues de n numero de años teniendo en cuenta que el banco paga un interes mensual del 0,7 %


function inversion() {
    let capital = parseFloat(prompt("Ingrese el capital a invertir:"));
    let años = parseInt(prompt("Ingrese el número de años de inversión:"));
    let interesMensual = 1.007;
    let meses = años * 12;
    let montoFinal = capital * Math.pow(interesMensual, meses);

    console.log("El monto total después de " + años + " años es: " + montoFinal);
    alert("El monto total después de " + años + " años es: " + montoFinal);
}


//  11. realizar un algoritmo que solicite al usuario un rango entre dos valores y muestre los numeros que hay en medio de ellos estos 
function rangoNumeros() {
    let inicio = parseInt(prompt("Ingrese el valor inicial del rango:"));
    let fin = parseInt(prompt("Ingrese el valor final del rango:"));
    let resultado = ""; // Cadena para almacenar los números en el rango

    // Iterar desde inicio + 1 hasta fin - 1
    for (let i = inicio + 1; i < fin; i++) {
        // Si resultado no está vacío, añadir una coma antes del número
        if (resultado !== "") {
            resultado += ", "; // Agregar coma y espacio si ya hay números
        }
        resultado += i; // Concatenar el número actual
    }

    // Mostrar el resultado final
    alert("Números en el rango entre " + inicio + " y " + fin + ": " + resultado);
    console.log("Números en el rango entre " + inicio + " y " + fin + ": " + resultado);
}

// 12 realizar un algoritmo que solicite un numero y compruebe si es negativo o positivo

function verificarNumero() {
    let numero = parseInt(prompt("Ingrese un número"));

    if (numero > 0) {
        console.log("El número es positivo.");
        alert("El número es positivo.");
    } else if (numero < 0) {
        console.log("El número es negativo.");
        alert("El número es negativo.");
    } else {
        console.log("El número es cero.");
        alert("El número es cero.");
    }
}


// 13 realiz an algoritmo que convierta los grados celsius a farenheit

function convertirCelsiusAFahrenheit() {
    let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius"));
    let fahrenheit = (celsius * 9/5) + 32;

    console.log("La temperatura en Fahrenheit es: " + fahrenheit);
    alert("La temperatura en Fahrenheit es: " + fahrenheit);
}