let buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", () => alert(buttons[i].textContent))      
    
}

