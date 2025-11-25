fetch(`https://randomuser.me/api`)
    .then((response) => {
        if(response.ok){
            return response.json();
        } else {
            throw new Error(`Error HTTP: ${response.status}`);           
        }
    })
    .then((data)=>{
        let info = document.getElementById('myDiv');
        let user = data['0'];
        userName = user['name'];
        let userAddress = user['address'];
        info.innerHTML = '<img src="' 
            + user['image'] 
            +'" alt="Imagen de usuario"><br>'
            + userName['first']+ ' ' + userName['last']
            +'<br>Email: '+user['email']
            +'<br>'+userAddress['street']
            +', '+ userAddress['country'];
    })
    .catch((error) => {
        info.innerHTML = 'Error al cargar usuario' + error;
    })

