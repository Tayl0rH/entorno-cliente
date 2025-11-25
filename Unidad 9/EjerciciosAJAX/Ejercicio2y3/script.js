fetch(`https://jsonplaceholder.typicode.com/usersa`)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`HTTP  error! statsu :${response.status}`);
        }
    })
    .then((data) => {

        document.getElementById('myList').innerHTML += '<ul>';
        for (const user of data) {
            document.getElementById('myList').innerHTML += '<li>Nombre: ' + user['name'] + '</li>';
        }
        document.getElementById('myList').innerHTML += '</ul>';


    })
    .catch((error) => {
        document.getElementById('myList').innerHTML += 'Error al cargar los datos';
    })

