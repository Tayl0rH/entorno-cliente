let videoDiv = document.getElementById('videoDiv');
let video = document.querySelector('video');

video.addEventListener('click', ()=>{
    video.paused ? video.play() : video.pause();
})

video.addEventListener('contextmenu', ()=>{
    let duration = parseInt(video.duration);
    let minutes = parseInt(duration/60);
    let seconds = minutes!=0 ? parseInt(duration/minutes) : duration;
    videoDiv.innerHTML += '<br>Duración: '+minutes+':'+seconds;
})