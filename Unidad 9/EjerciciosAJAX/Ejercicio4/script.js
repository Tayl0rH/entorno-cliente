const user = {
    name: 'Taylor',
    job: 'Desarrollador'
}

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers:{
        'Content-Type':'application/json'
    }, 
    body: JSON.stringify(user)
})
    .then((response) => {
        if (response.ok) {
            return response.json();
        }else{
            throw new Error(`HTTP error! status: ${response.status}`);          
        }
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.error(error);
    })