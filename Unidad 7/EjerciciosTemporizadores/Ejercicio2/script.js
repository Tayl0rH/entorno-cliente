// Ejercicio 2

var cont=1;
let temp=setInterval(() => {

    console.log(('█').repeat(cont));            
    
    
    cont++;

    if(cont>=11){
        clearInterval(temp);
        console.log('carga completada');
    };

}
, 2000);