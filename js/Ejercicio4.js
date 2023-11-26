var valores = [true, 5, false, "hola", "adios", 2];

//Apartado_1

let text1 = valores[3];

let text2 = valores[4];

if(text1.length < text2.length){
    console.log("El elemento de texto: ["+text2+"] es mayor que ["+text1+"]");

}else if(text1.length > text2.length){
    console.log("El elemento de texto: ["+text1+"] es mayor que ["+text2+"]");

}else{
    console.log("Los elemento de texto: ["+text1+"] y ["+text2+"] son iguales");

}

//Apartado_2

var bool1 = valores[0];

var bool2 = valores[2];

console.log("El elemento de la operacion AND es:" + (bool1 && bool2));

console.log("El elemento de la operacion OR es:" + (bool1 || bool2));

//Apartado_3

var oper1 = valores[1];

var oper2 = valores[5];

console.log("El resultado de la suma de ambos elementos es:" + (oper1 + oper2));

console.log("El resultado de la resta de ambos elementos es:" + (oper1 - oper2));

console.log("El resultado de la multiplicacion de ambos elementos es:" + (oper1 * oper2));

console.log("El resultado de la division de ambos elementos es:" + (oper1 / oper2));

console.log("El resultado de la potencia de ambos elementos es:" + (Math.pow(oper1, oper2)));