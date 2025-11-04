let inputText = document.getElementById('welcome');
let button = document.getElementById('button');


if (localStorage.getItem('name') ) {
    inputText.textContent = '¡Bienvenido ' + localStorage.getItem('name') + '!';
    
    button.value='Reestablecer'

    button.addEventListener('click', ()=>{
        localStorage.removeItem('name');
        location.reload();
        
    });

} else {

    button.addEventListener('click', ()=>{

        let resultInput = document.getElementById('name').value;
        localStorage.setItem('name', resultInput);
        console.log(resultInput);
        location.reload();
        
    });

}

