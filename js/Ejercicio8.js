var num = window.prompt('Qué numero entero quieres introducir?:','1');

function parImpar(numero){

    var tmp = numero%2;

    if(tmp == 0){
        return("El numero introducido es par");
    }else if(tmp == 1){
        return("El numero introducido es impar");
    }
};

var mensaje = parImpar(num);

alert(mensaje);