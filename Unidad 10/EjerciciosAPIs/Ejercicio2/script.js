let video = document.querySelector('video');
let button = document.querySelector('input');
let velocity = document.querySelector('select');

button.addEventListener('click', (e)=>{
    
    e.preventDefault;

    video.playbackRate = velocity.value;

})