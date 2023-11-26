var text = window.prompt('Introduce una cadena de texto:','');

function mayuscMinusc(texto){

    var mayCont = 0;
    var minCont = 0;
    var tmp = 'A';

    for(var i=0; i<texto.length-1; i++){
        
        tmp = texto.charAt(i);
        
        if(tmp !== ' '){
            
            if(tmp === tmp.toLowerCase()){
                minCont++;
            }
            if(tmp === tmp.toUpperCase()){
                mayCont++;
            }
        }
    }

    if((mayCont > 0) && (minCont > 0)){
        return("El texto es una combinacion de mayusculas y minusculas");
    }else if(mayCont > 0){
        return("El texto se compone de solo mayusculas");
    }else if(minCont > 0){
        return("El texto se compone de solo minusculas");
    }
};
var mensaje = mayuscMinusc(text);

alert(mensaje);