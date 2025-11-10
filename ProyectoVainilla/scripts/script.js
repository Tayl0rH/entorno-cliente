// Primer cambio de pag.
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey) {
        event.preventDefault();
        document.getElementById('firstSec').style.display = 'none';
        document.getElementById('secondSec').style.display = '';
    }
})
setInterval(() => {
    document.getElementById('firstSec').style.display = 'none';
    document.getElementById('secondSec').style.display = '';
}, 5000);

// Segundo cambio de pag validando mail.

let mail = document.getElementById('username');

mail.addEventListener('blur', () => {


        let value = mail.value;
        let valueArr = value.split('');

        function rightMail() {

            return new Promise((resolved, rejected) => {
                if (valueArr.includes('@') && valueArr.includes('.')) {
                    if (valueArr.indexOf('@') + 1 < valueArr.indexOf('.')) {
                        if (valueArr.indexOf('.') != valueArr.length - 1) {
                            resolved();
                        }else{
                            rejected(Error('El correo no puede finalizar en .'))
                        }
                    }else{
                        rejected(Error('El correo ha de tener al menos 1 carácter entre el @ y el .'))
                    }
                } else{
                    rejected(Error('El correo debe tener un @ y un .'))
                }
            });
        }

        rightMail()
        .then(()=>{
            /* localStorage.setItem('username', value);
            document.getElementById('secondSec').innerHTML='<br>¡Hola '+localStorage.getItem('username')+'!<br>'+
            'La última vez que entraste fue el ';
            let currentDate = new Date.toString();
            let currentHour = currentDate.getHours(); */
            window.location.href= '/ProyectoVainilla/pag2.html';
        })
        .catch((error)=>{
            document.getElementById('secondSec').innerHTML+='<br>'+error.message;
            
        })


    

});