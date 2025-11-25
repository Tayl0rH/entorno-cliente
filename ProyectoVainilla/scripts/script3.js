document.getElementById('back').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/ProyectoVainilla/pag2.html'
})


function validQuestionary() {

    let question = document.getElementById('question').value;

    let mark = document.getElementById('mark').value;

    let trueorfalse = document.getElementById('trueorfalse').value;

    return new Promise((resolve, reject) => {
        if (!question || !mark || !trueorfalse) {
            reject(Error('Todos los campos son obligatorios'));
            return;
        }

        // Convertimos mark a numero
        let markNumber = parseInt(mark);

        // validamos que sea un entero
        if (!Number.isInteger(markNumber)) {
            reject(Error('El puntaje ha de ser un número'));
            return;
        }

        // Validamos rango 0–9
        if (markNumber < 0 || markNumber > 9) {
            reject(Error('El puntaje ha de estar entre 0 y 9'));
            return;
        }

        resolve();
    })
}

window.addEventListener('change', () => {

    validQuestionary()
        .then(() => {
            document.getElementById('save').disabled = false;
        })
        .catch((error) => {
            document.getElementById('box').innerHTML = error.message;
        })

})


// trabajamos el div de preguntas.

setInterval(() => {
    document.getElementById('charging').style.display = 'none';
    document.getElementById('tableDiv').style.display = '';
}, 500);

// contador de preguntas del usuario
let num = 1;
document.getElementById('save').addEventListener('click', (e) => {

    e.preventDefault();

    let mark = document.getElementById('mark').value;

    let vof = document.getElementById('trueorfalse').value;

    if (vof) {
        trueorfalse = 'Verdadero';
    } else {
        trueorfalse = 'Falso'
    }

    document.getElementById('table').innerHTML += '<tr>' +
        '<td>Número ' + num + '</td>' +
        '<td>' + trueorfalse + '</td>' +
        '<td>' + mark + '</td>' +
        '<td id="status">Guardando...</td>' +
        '                         </tr>';

    setTimeout(() => {
        document.getElementById('status').innerHTML = 'OK';
    }, 5000);
    num++;
    // hacer q cambie el estado para todos...
    // si da ERROR :( no se guarda en localstorage
})