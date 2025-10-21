let text = document.getElementById("list");

document.getElementById("button").addEventListener("click", ()=> 
    text.innerHTML += '<li>' + parseInt(Math.random() * 10) + '</li>'
);