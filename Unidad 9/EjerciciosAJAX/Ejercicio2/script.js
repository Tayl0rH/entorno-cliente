fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`HTTP  error! statsu :${response.status}`);
        }
    })
    .then((data) => {

        for (const user of data) {
            console.log(user['name']);
            document.getElementById('myList').innerHTML += '<li>Nombre: ' + user['name'] + '</li>';
        }


    })
    .catch((error) => {
        console.log(error)
    })

