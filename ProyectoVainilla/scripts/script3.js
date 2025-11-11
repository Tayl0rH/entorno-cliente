document.getElementById('back').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/ProyectoVainilla/pag2.html'
})

let butonOn = false;

function validQuestionary() {

    let question = document.getElementById('question');
    let questionValue = question.value;

    let mark = document.getElementById('mark');
    let markValue = mark.value;

    let trueorfalse = document.getElementById('trueorfalse');
    let trueorfalseValue = trueorfalse.value;
    return new Promise((resolved, rejected) => {
        if (questionValue && markValue && trueorfalseValue) {
            butonOn = true;
            resolved();
        }
        else rejected(Error('Faltan campos a rellenar'));
    })
}

document.addEventListener('keypress', (e) => {

    if (e.key === 'Enter') {
        validQuestionary()
            .then((response) => {
                document.getElementById('save').disabled = false;

            })
            .catch((error) => {
                document.getElementById('box').textContent += error.message;
            })
    }
})
