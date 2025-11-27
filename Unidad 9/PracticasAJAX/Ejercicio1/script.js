fetch(`https://randomuser.me/api`)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Error HTTP: ${response.status}`);
        }
    })
    .then((data) => {
        let info = document.getElementById('myDiv');
        let user = data['results'];
        user = user['0'];
        userName = user['name'];

        userImage = user['picture'];

        let userAddress = user['location'];


        info.innerHTML = '<img src="' + userImage['large'] +'" alt="Imagen de usuario">'
            +'<br>' + userName['first'] + ' ' + userName['last']
            +'<br>Email: '+user['email']
            +'<br>'+userAddress['street']['name']+ ', ' + userAddress['street']['number']
            +'<br>'+userAddress['state']+ ', '+userAddress['country']+'. '+userAddress['postcode'];
    })
    .catch((error) => {
        info.innerHTML = 'Error al cargar usuario' + error;
    })

