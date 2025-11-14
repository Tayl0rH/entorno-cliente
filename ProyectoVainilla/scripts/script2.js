// Así conseguimos el usuario actual
const currentUser = localStorage.getItem('currentUser');

// y así conseguimos todos los usuarios con sus datos
// para poder conseguir los del usuario actual
const savedUserData =  JSON.parse(localStorage.getItem('users'));


// Mostramos los datos del usuario en el div correspondiente.
document.getElementById('welcomeDiv')
    .innerHTML = 'Hola '+ savedUserData[currentUser].username +'<br>'+
    'La última vez que entraste<br>fue el '+ savedUserData[currentUser].lastDay+
    '<br>a las '+savedUserData[currentUser].lastHour;

    
document.getElementById('questions').addEventListener('click', ()=>{
    window.location.href='/ProyectoVainilla/questions.html';
})