
let result=150;
let resultDiv = document.getElementById('result');
resultDiv.textContent = result;

let temp = setInterval (()=>{
    let random = parseInt(Math.random() * 2);
    if(random==1){
        result = result+5;
        resultDiv.textContent=result;
        if(result===250) {
            resultDiv.textContent='¡Máximo alcanzado!';
            clearInterval(temp);
        };

    } else {
        result = result-5;
        resultDiv.textContent=result;
        if(result===120) {
            resultDiv.textContent='¡Mínimo alcanzado!';
            clearInterval(temp)
        };
    }
}, 50);