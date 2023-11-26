var text = window.prompt('Introduce la cadena de texto:','0');

function transcribir(text){
    
    text = text.toLowerCase();
    var ret = '';
    var tmpChar = 'A';
    for(var i=0; i<text.length; i++){

        tmpChar = text.charAt(i);
        if(tmpChar !== ' '){
            ret = ret + tmpChar;
        }
    }
    return ret;
};

function palindromo(texto){
    texto = transcribir(texto);
    var tmp = texto.length/2;
    var checked = true;
    var i = 0;

    while(i < tmp){
        if(texto.charAt(i) !== texto.charAt((texto.length-1)-i)){
            checked = false;
        }
        i++;
    }

    if(checked){
        return("El texto es palindromo");
    }else{
        return("El texto NO es palindromo");
    }
};

var mensaje = palindromo(text);

alert(mensaje);