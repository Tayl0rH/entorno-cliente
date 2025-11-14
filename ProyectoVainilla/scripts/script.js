// Primer cambio de pag.
// Al pulsar la leta ctrl se cambia el html
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey) {
        event.preventDefault();
        document.getElementById('firstSec').style.display = 'none';
        document.getElementById('secondSec').style.display = '';
    }
})
// si no se pulsa, a los 5 segundos se cambia el html
setInterval(() => {
    document.getElementById('firstSec').style.display = 'none';
    document.getElementById('secondSec').style.display = '';
}, 5000);


// Segundo cambio de pag validando mail.

let mail = document.getElementById('username');

// hacemos una función que nos devuelva una promesa para validar el mail
function rightMail() {
    let value = mail.value;
    // hacemos el mail un array para confirmar
    // que es un mail
    let valueArr = value.split('');

    // el primer if confirma que haya @ o .
    if (valueArr.includes('@') && valueArr.includes('.')) {
        // el segundo if confirma q haya algo entre el @ y el .
        if (valueArr.indexOf('@') + 1 < valueArr.indexOf('.')) {
            // y el último if confirma q el mail no acabe solo en punto
            if (valueArr.lastIndexOf('.') != valueArr.length - 1) {
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

// con este evento una vez se haya valdidado el mail
// guardaremos el usuario en localstorage
mail.addEventListener('blur', (e) => {

    e.preventDefault();

    type = rightMail();

    if (typeof type === 'string') {
        document.getElementById('errorMessage').textContent = type;

        // necesito un timeot para que suceda una vez acabe el evento, 
        // xq si no, no se focusea dado q sucede a la vez que blur.

        setTimeout(() => {
            mail.focus();
            mail.select();
        }, 10);
    } else {
        rightMail();
    }

    // empezamos a crear usuarios
    // empezamos por guardar el día y la hora
    let currentDay = new Date().toLocaleDateString();
    let currentHour = new Date().toLocaleTimeString();

    // con esta línea cargamos los users del localStorage, 
    // si no existe, lo creamos vacío.
    let users = JSON.parse(localStorage.getItem('users')) || {};
    // creamos esta variable para hacer mas legible el código
    let name = mail.value;

    // si no existe el usuario, lo crea
    if(!users[name]){
        users[name] ={
            username: name,
            lastDay: currentDay,
            lastHour: currentHour, 
            // así ya tenemos las preguntas creadas como un array de información
            questions: []
        }
    } else {
        // en este caso, si existe el usuario, solo actualizamos el día y la hora
        users[name].lastDay = currentDay,
        users[name].lastHour = currentHour
    }

    /* 
    
    Hacer un array con los usuarios, sus nombres
    son las claves de los usuarios, dentro tiene nombre y last login
    y además otro array de preguntas con id incremental,
    texto de pregunta, respuesta y puntuación 
    
    users(
        usuario1(
            lastDayLogin: Dia
            lastHourLogin: Hora
            preguntas(
                texto: pregunta
                respuesta: true or false
                puntuación: number
                estado: ok o error)
            )
        )   
    )

    Ademas, ese array que se guarda tiene q tener continuidad,
    cuando un usuario se loguea, usuario1 no tiene que desaparecer

    */

    localStorage.setItem('users', JSON.stringify(users));

    // con este localStorage sabemos siempre que usuario esta ahora
    // mismo en sesión, xq se actualiza siempre.
    localStorage.setItem('currentUser', name);

});




