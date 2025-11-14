document.getElementById('back').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/ProyectoVainilla/pag2.html'
})

setInterval(() => {
    document.getElementById('chargingQuestions').style.display= 'none';
    document.getElementById('table').style.display= '';
}, 5000);

// con esta función, que devuelve una promesa, validamos que los datos
// del cuestionario para agregar preguntas sean los que nos interesa

function validQuestionary() {

    let question = document.getElementById('question').value;

    let mark = document.getElementById('mark').value;

    let trueorfalse = document.getElementById('trueorfalse').value;

    return new Promise((resolve, reject) => {
        // Si los campos no estan rellenados, no se guardará el resultado
        // ni se actibará el boton
        if (!question || !mark || !trueorfalse) {
            reject(Error('Todos los campos son obligatorios'));
            return;
        }

        // Convertimos mark a numero para poder hacer la validación
        let markNumber = parseInt(mark);

        // Si no se ha convertido en número, mostramos error
        if (!Number.isInteger(markNumber)) {
            reject(Error('El puntaje ha de ser un número'));
            return;
        }

        // Si se ha convertido en número, confirmamos que este
        // dentro del rango
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
        '<td>Guardando...</td>' +
        '</tr>';

    num++;
    // hacer q cambie el estado para todos...

    // además, el estado puede dar error, no s edebería de guardar la pregunta.
})