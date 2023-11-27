//Variable almacenada
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N' ,'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//Variables solicitadas
var num = window.prompt('Introduce SOLO el código numerico del DNI:','0');
num = parseInt(num);

var letra = window.prompt('Introduce SOLO la letra del DNI:','T');

//Funcion llamada
var verificado = (numero) => (numero<0) || (numero>99999999) ||  isNaN(numero);

//Codigo principal
if(verificado(num)){
    alert("El valor proporcionado del codigo no es valido!");
}else{
    num = num % 23;
    
    tmpChar = letras[num];
    if(letra.toUpperCase() == tmpChar){
        alert("La letra introducida es correcta!");

    }else{
        alert("La letra indicada no es correcta, vuelve a probar.");
    }
}