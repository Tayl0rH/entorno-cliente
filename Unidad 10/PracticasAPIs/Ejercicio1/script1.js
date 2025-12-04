let div = document.getElementById('myDiv');
let cont = 5;

async function timeout(ms) {
    return await new Promise((resolve) => {
        let countdown = setInterval(() => {

            cont--;
            div.innerHTML = cont;

            if (cont == 0) clearInterval(countdown);
        }, 1000);

        setTimeout(() => {
            Notification.requestPermission().then((resp) => {
                if (resp == 'granted') {
                    let noti = new Notification('¡Nuevo video!', {
                        body: 'El mundo... sin más.',
                        icon: '../../source/notification-icon.png'
                    })
                    noti.addEventListener('click', () => { 
                        window.location.href='video.html'; 
                    })
                }  
            })
        }, ms);
    })
}
timeout(5000);

