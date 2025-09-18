// Ejercicio 5.1
var products = document.getElementById('productos');
var prices = products.getElementsByClassName('precio');
var num = prices.length;

// Hay que quitar als barras del comentario para ver que funciona
//alert('Hay '+num+' precios en los productos.');

// Ejercicio 5.2
/**
 * 
 * Se quiso intentar esta linea de código
 * 
 * var firstProduct = products.getElementById('p1');
 * console.log(firstProduct);
 * 
 * No funcionará dado que la función .getElementById 
 * es solo para el objeto document
 * 
 */


var productList = products.getElementsByTagName('li');
console.log(productList[0].innerHTML);
    // InnerHTML nos muestra todo el HTML de la varariable
console.log(productList[0].textContent);
    // TextContent nos enseña el contenido sin etiquetas

// Ejercicio 5.3
var stock = document.getElementById('n2');
stock.textContent='Reposición completada. ¡Gracias por vuestra paciencia!';


// Ejercicio 5.4
    // recorremos con un for la variable de prices, donde guardamos un array
    // con los precios anteriormente
for (let i = 0; i < prices.length; i++) {
    // creamos una nueva variable donde guardamos los precios, sumandole
    // el número correspondiente.
    // Necesario parseFloat para conseguir un double
    var newPrice = parseFloat(prices[i].textContent)+0.10;
    // cambiamos el contenido de la etiqueta
    prices[i].textContent = newPrice;
}

// Ejercicio 5.5

var myUnorderedList = document.getElementById('lista'); // señalamos la etiqueta con id lista
var newProduct = document.createElement('li');
newProduct.setAttribute('id', 'p4');
myUnorderedList.appendChild(newProduct).innerHTML='Tila <span class="precio">2.20</span> €';

