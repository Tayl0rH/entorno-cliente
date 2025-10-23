document.addEventListener('keydown', function(event){
    if(event.ctrlKey && event.key === 'b'){
        document.body.style.backgroundColor='white';
        console.log('hola');
    }
})