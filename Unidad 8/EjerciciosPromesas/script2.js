function firstFunc () {
    return  Promise.resolve(10);
}
function secondFunc (value) {
    return Promise.resolve(value*2);
}
function thirdFunc (value) {
    return Promise.resolve(value+5);
}

firstFunc().then((result) =>{
    console.log(result)
    secondFunc(result).then((result2) =>{
        console.log(result2);
        thirdFunc(result2).then((result3)=>{
            console.log(result3);
        })
    })
})