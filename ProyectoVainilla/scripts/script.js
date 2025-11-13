// Primer cambio de pag.
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey) {
        event.preventDefault();
        document.getElementById('firstSec').style.display = 'none';
        document.getElementById('secondSec').style.display = '';
    }
})
setInterval(() => {
    document.getElementById('firstSec').style.display = 'none';
    document.getElementById('secondSec').style.display = '';
}, 5000);


// Segundo cambio de pag validando mail.

let mail = document.getElementById('username');

function rightMail() {
    let value = mail.value;
    let valueArr = value.split('');

    if (valueArr.includes('@') && valueArr.includes('.')) {
        if (valueArr.indexOf('@') + 1 < valueArr.indexOf('.')) {
            if (valueArr.indexOf('.') != valueArr.length - 1) {
                window.location.href = '/ProyectoVainilla/pag2.html';
            } else {

                return ('El correo no puede finalizar en .');
            }
        } else {
            return ('El correo ha de tener al menos 1 carácter entre el @ y el .');
        }
    } else {

        return ('El correo debe tener un @ y un .');
    }

}

mail.addEventListener('blur', (e) => {

    e.preventDefault();

    type = rightMail();

    if (typeof type === 'string') {
        document.getElementById('errorMessage').textContent = type;

        // necesito un timeot para que suceda una vez acabe el evento, 
        // xq si no no se focusea.

        setTimeout(() => {
            mail.focus();
            mail.select();
        }, 10);
    } else {
        rightMail();
    }

    let currentDate = new Date();
    const userData = {
        username: mail.value,
        currentDate: currentDate.toString(),
        currentHour: currentDate.getHours()
    }

    /* Hacer un array con los usuarios, sus nombres
    son las claves de los usuarios, dentro tiene nombre y last login
    y además otro array de preguntas con id incremental,
    texto de pregunta, respuesta y puntuación */



    localStorage.setItem('userData', JSON.stringify(userData));

});




