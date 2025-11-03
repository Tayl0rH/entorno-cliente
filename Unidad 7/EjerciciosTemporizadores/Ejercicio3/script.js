// Ejercicio 3

let timesVisited = document.getElementById('timesVisited');

let visits = localStorage.getItem('visits');

if(visits){
    visits = parseInt(visits)+1;
} else {
    visits = 1;
}

if (visits >10) {
    visits=0;
    localStorage.removeItem('visits')
} else {
    localStorage.setItem('visits', visits);
}


timesVisited.textContent = visits;