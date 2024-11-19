// tipos de datos primitivos

let nombre = "Johan";  //declaramos e inicializamos la variable
let edad = 17; 
let mayorEdad = false;
let vacio = null;
let xyz;

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof mayorEdad);
console.log(typeof vacio);
console.log(typeof xyz);


// tipos de datos commplejos

let frutas = ["manzana","pera","sandia","banana"];  // sera de tipo objeto arreglo




let auto = {
    modelo: 2012,
    color: "amarillo",
    marca: "camaro",
    placa: "js2023",
    tipo: "deportivo",
    unicoDueno: true
};
 
console.log(typeof auto);




// concatenando variable de mensaje

console.log("Hola " + nombre + " tienes " + edad + " años " )

// estructuras condicionales

let calificacion = 0;

if (calificacion >= 90 ){
    console.log(" muy buen trabajo " + nombre + "usted a aprobado el examen con una calificacion de " +  calificacion )

} else if(calificacion>= 70){
    console.log("aprobaste " + nombre + " su nota es " + calificacion)

} else if(calificacion >=50){
    console.log("reprobaste " + nombre + " su nota es " + calificacion)
}
else{
    console.log(" muy mal " + nombre + " reprobaste con una nota de " + calificacion)
}


// switch case


let dia = "viernes";

switch (dia) {
    case "lunes":
        console.log(" el dia es lunes ")
        
        break;
    
    case "martes":
        console.log(" el dia es martes ")

    
        break;
    
    case "miercoles":
        console.log(" el dia es miercoles ")

        break;
    
    case "jueves":
        console.log(" el dia es jueves ")

        break;
    
    case "viernes":
        console.log(" el dia es viernes 13 ")

        break;
    
    default:
        console.log(" el dia " + dia + " no existe ");
        break;
    
        
}


// bucles

 let numero = 0;
 
 
 while(numero <=10){
    console.log(" ahora el numero es " + numero);
    numero ++;
 }





 

 for(let i = 100; i >= 0; i = i - 20){
    console.log(" el numero es" + i);
    

 }


 //funciones

 function suma( a , b) {
    return a + b;

 }

 
let resultado = suma(9,12);

console.log(" el resultado de la suma es " + resultado)