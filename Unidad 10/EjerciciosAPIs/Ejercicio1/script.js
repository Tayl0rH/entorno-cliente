let body = document.getElementById('body');

navigator.geolocation.getCurrentPosition((position) => {
    if (position.coords.latitude > 0)
        body.style.backgroundColor='blue'; 
    else if (position.coords.latitude < 0) 
        body.style.backgroundColor='green';
    else 
        body.style.backgroundColor='yellow';    
});