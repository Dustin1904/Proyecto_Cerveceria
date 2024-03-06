document.addEventListener('DOMContentLoaded' , ()=>{
    console.log('Login Funcionando');
    hacerLogin()
})


 function hacerLogin() {
    const $FORMULARIO = document.getElementById('login');

    $FORMULARIO.addEventListener('submit' ,  (event)=>{
        event.preventDefault()

        const formData = new FormData($FORMULARIO)

         fetchUrl = fetch('127.0.0.1:8080/login', {
            method:'POST',
            body:formData
        }).then(response => {
            if(!response.ok){
                console.error("Error al enviar los Datos");
            }
            alert(response)
        }).then(data =>
           console.log(data)
        ).catch(error =>{
            console.log(error);
        })


    })
}