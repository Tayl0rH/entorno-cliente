let greeting = document.getElementById('greeting');

greeting.addEventListener('click', () => alert('hola!'));

let createBox = document.getElementById('createBox');

createBox.addEventListener('click', () =>{
    document.getElementById('box').style.backgroundColor='red';
    document.getElementById('box').style.width='50px';
    document.getElementById('box').innerHTML='Nueva caja';
})

let randNum = document.getElementById('randNum');

randNum.addEventListener('click', () => {
    document.getElementById('num').innerHTML= parseInt(Math.random()*100);
})