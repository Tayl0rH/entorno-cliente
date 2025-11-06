let p = document.getElementById('verifiedMessage');
let button = document.getElementById('button');
let userName = document.getElementById('name');

function verifyUser(userName){

    return new Promise ((resolved, rejected)=>{

        if (userName=='admin') {
            setTimeout(()=>{
                resolved('Usuario verificado correctamente.');
            }, 1500);
        } else {
            setTimeout(()=>{
                rejected(Error('Usuario no encontrado.'));
            }, 1500);
        }

    })
}

function chargeUserData() {
    
    // no hacer un return sertTimeout() xq si no no ejecutará correctamente
    return new Promise ((resolve) => { 
        setTimeout(()=> {
            resolve('Datos del usuario cargados correctamente.');
        }, 2000);
    })
    
}

button.addEventListener('click', (e)=>{
    // importante prevenir la recarga de la pag por culpa del botón
    e.preventDefault();
    verifyUser(userName.value)
    .then((response) =>{
        p.textContent=response;
        chargeUserData().then((response2) =>{
            p.textContent+=' '+response2;
        })
    })
    .catch((error)=>{
        p.textContent = error.message;
    })
})
