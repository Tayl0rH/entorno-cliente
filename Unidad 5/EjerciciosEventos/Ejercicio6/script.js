let myDivs = document.getElementsByTagName('div');
let body = document.body;

for (let i = 0; i < myDivs.length; i++) {

    myDivs[i].addEventListener("mouseover", ()=>{
        
        let color = getComputedStyle(myDivs[i]).backgroundColor;
        body.style.backgroundColor = color;

    })
    
}