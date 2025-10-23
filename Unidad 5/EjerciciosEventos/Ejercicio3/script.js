let lines = document.getElementsByTagName('p');

function hideElement (line) {
    line.style.display = 'none';
}

function deleteElement (line) {
    line.remove();
}

for (let i = 0; i < lines.length; i++) {
    lines[i].addEventListener("click", ()=>hideElement(lines[i]));
    lines[i].addEventListener("contextmenu", () => deleteElement(lines[i]));
}


document.getElementById("button").addEventListener("click", ()=>{
    for (let i = 0; i < lines.length; i++) {
        lines[i].style.display='';
    }
});