function sumAsync(a, b){

    return new Promise((resolved, rejected) =>{

        if (!parseInt(a)){
            rejected(Error('El valor "a" no es un número'));
        } else if(!parseInt(b)) {
            rejected(Error('El valor "b" no es un número'));
        } else {
            resolved(a+b);
        }
    });
}

sumAsync(1, 3)
.then((answer) => {
    console.log(answer);
})
.catch((error)=>{
    console.log(error.message);
});