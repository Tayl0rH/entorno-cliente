document.getElementById('button').addEventListener('click', (e) => {
    e.preventDefault();

    Notification.requestPermission().then((resp) => {
        if (resp == 'granted') new Notification('holi', {
            body: 'cuerpo',
            icon: '../../source/notification-icon.png'
        }
        );
    })
})
