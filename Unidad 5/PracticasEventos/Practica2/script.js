let mail = document.getElementById('mail');

mail.addEventListener('blur', () =>{
    let text  = mail.value.split('');
    let pass = document.getElementById('password');
    let button = document.getElementById('submit');
    
    if (!text.includes('@')){
        document.getElementById('errorMail').textContent = 'Falta un @';
        
    } else {
        document.getElementById('errorMail').innerHTML = '&#128504;'       
        pass.readOnly=false;

        pass.addEventListener('blur', () =>{
            let text  = pass.value;

            if (text.length > 8 && text.length < 10) {
                document.getElementById('errorPass').innerHTML = '&#128504;';
                button.disabled = false;
            } else {
                document.getElementById('errorPass').textContent = 'La contraseña tiene que tener entre 8 y 10 caracteres';
            }
        });
    }
});








