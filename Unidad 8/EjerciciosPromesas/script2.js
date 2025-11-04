function firstFunc () {
    return new Promise ((resolved, rejected) => {
        if(true) resolved(10);
        else rejected(Error('Somethign went wrong'));
    });
}
function secondFunc (value) {

    return new Promise ((resolved, rejected) => {
        if(true) resolved(value*2);
        else rejected(Error('Somethign went wrong'));
    });
}
function thirdFunc (value) {

    return new Promise ((resolved, rejected) => {
        if(true) resolved(value+5);
        else rejected(Error('Somethign went wrong'));
    });
}
