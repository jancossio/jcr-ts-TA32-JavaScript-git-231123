var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N' ,'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var num = window.prompt('Qué numero quieres introducir?:','0');
var letra = window.prompt('Qué letra quieres introducir?:','T');

var verificado = (numero) => (numero>=0) && (numero<=99999999);

if(!verificado(num)){
    alert("El numero proporcionado no es valido!");
}else{
    num = num % 23;
    
    tmpChar = letras[num];
    if(letra.toUpperCase() == tmpChar){
        alert("La letra introducida es correcta!");

    }else{
        alert("La letra indicada no es correcta, vuelve a probar.");
    }
}