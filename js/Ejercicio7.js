var num = window.prompt('Qué numero quieres introducir?:','0');

var verificar = (numero) => numero<0;

if(verificar(num)){
    alert("El numero proporcionado no es valido!");
}else{
    var res = 1;
    var tmp = 0;

    for(var i=num; i>1; i--){
        res = (res * i);
    }

   alert("El factorial del numero "+num+" es: "+res);
}