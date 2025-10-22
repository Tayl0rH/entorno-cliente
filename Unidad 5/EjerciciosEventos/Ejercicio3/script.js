let lines = document.getElementsByTagName('p');

function hideElement (hideLine) {
    hideLine.target.style.display = 'none';
}
function displayElement () {}

function deleteElement (deleteLine) {
    deleteLine.remove();
}

for (let i = 0; i < lines.length; i++) {
    lines[i].addEventListener("click", hideElement);
    lines[i].addEventListener("contextmenu", deleteElement);
}


document.getElementById("button").addEventListener("click", (event)=>{
    for (let i = 0; i < lines.length; i++) {
        lines[i].target.style.display='true';
    }
});