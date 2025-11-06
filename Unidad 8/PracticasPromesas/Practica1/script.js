let productName = document.getElementById('productName');
let button = document.getElementById('button');
let result = document.getElementById('result');

function processPayment(product) {
    // devolverá una promesa
    // esperará 1,5
    // si se ha introducido un producto "pago procesado correctamente para [product]"
    // si esta vacio "no se puede procesar pago sin producto"

    return new Promise ((resolver, rejected)=>{
        setTimeout(()=>{
            if(product.value) resolver('Pago procesado correctamente para '+product.value);
            else rejected(Error('No se puede procesar pago sin producto'))
        }, 1500)
    })
}

function sendProduct(){
    // devolverá una promesa
    // solo se ejecuta si el pago fue efectivo
    // si la dirección esta vacía, 'Dirección de envio no válida"
    // si es valida, espera 2 segundos con un 20% de prob de error aleatorio
        // si hay error; reject(Error durante el envió, inténteloo de nuevo)
        // si no hay error; resolve("Pedido enviado correctamente a [direccion]")
    let direction = document.getElementById('direction');

    return new Promise ((resolve, rejected)=>{
        if(direction.value){
            let errorRand = parseInt(Math.random()*100);
            setTimeout(() => {
                if(errorRand<=20){
                    rejected(Error('Error durante el envío, intente de nuevo.'))
                } else {
                    resolve('Pedido enviado correctamente a '+ direction.value);
                }
            }, 2000);
        } else {
            rejected(Error('Dirección de envío no válida.'))
        }
    })
}

button.addEventListener('click', (e)=>{
    e.preventDefault();
    processPayment(productName)
    .then((response)=>{
        result.textContent = response+' ';
        sendProduct()
        .then((response2)=>{
            result.textContent += response2 + ' '; 
        })
        .catch((error)=>result.textContent+=error.message+' ')
    })
    .catch((error)=>result.textContent=error.message+' ');
})