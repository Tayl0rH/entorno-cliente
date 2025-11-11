const savedUserData =  JSON.parse(localStorage.getItem('userData'));

document.getElementById('welcomeDiv')
    .innerHTML = 'Hola '+ savedUserData.username +'<br>'+
    'La última vez que entraste<br>fue el '+ savedUserData.currentDate+
    '<br>a las '+savedUserData.currentHour;

document.getElementById('questions').addEventListener('click', ()=>{
    window.location.href='/ProyectoVainilla/questions.html';
})