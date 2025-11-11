document.getElementById('back').addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href = '/ProyectoVainilla/pag2.html'
})

let question = document.getElementById('question');
let questionValue;
question.addEventListener('blur', ()=>{
    questionValue=question.value;
    console.log(questionValue);
});

let mark = document.getElementById('mark');
let markValue;
mark.addEventListener('blur', ()=>{
    // digito entre 0 y 9
    markValue=mark.value;
    console.log(markValue);
});

let trueorfalse = document.getElementById('trueorfalse');
let trueorfalseValue;
trueorfalse.addEventListener('blur', ()=>{
    trueorfalseValue=trueorfalse.value;
    console.log(trueorfalseValue);
    if(questionValue && markValue && trueorfalseValue){
        // enable button
    }
});

