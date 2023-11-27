//Variables solicitadas
var num = window.prompt('Qué numero entero quieres introducir?:','1');
num = parseInt(num);

//Funciones llamadas
var verificar = (numero) => isNaN(numero);

function parImpar(numero){

    var tmp = numero%2;

    if(tmp == 0){
        return("El numero introducido es par");
    }else if(tmp == 1){
        return("El numero introducido es impar");
    }
};

//Codigo principal
if(verificar(num)){
    alert("El parametro introducido no es un numero entero!");
}else{
    var mensaje = parImpar(num);

    alert(mensaje);
}