let text = document.getElementById("mousePosition");

document.addEventListener("mouseover", (event) =>
    text.innerHTML = event.clientX + ' ' + event.clientY
);