let button = document.getElementById('button');
let result = document.getElementById('productID');
let infoDiv = document.getElementById('productInfo')

button.addEventListener('click', (e) => {
    e.preventDefault();
    let id = result.value;

    fetch(`https://dummyjson.com/products/${id}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Error HTTP: ${response.status}`);
            }
        })
        .then((data) => {
            infoDiv.innerHTML =
                'ID del producto: ' + data['id']
                + '<br>Nombre del producto: ' + data['title']
                + '<br>Precio: ' + data['price'] + '€';



            fetch(`https://httpbin.org/post`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                id: data['id'],
                title: data['title'],
                price: data['price']
            })
            })
                .then((response) => {
                    if (response.ok) {
                        document.getElementById('divPost').innerHTML = response.status + '<br>'
                        return response.json();
                    } else {
                        throw new Error(`Error HTTP: ${response.status}`);
                    }
                })
                .then((data) => {
                    document.getElementById('divPost').innerHTML += data.json.title;
                })
                .catch((error) => {
                    document.getElementById('divPost').innerHTML = 'Error al conseguir producto: ' + error;
                })
        })
        .catch((error) => {
            infoDiv.innerHTML = 'Error al buscar producto: ' + error;
        })



})

