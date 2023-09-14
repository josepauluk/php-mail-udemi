const formulario = document.getElementById('formulario')
const usuario = document.getElementById('texto-1')
const correo = document.getElementById('texto-2')
const mensaje = document.getElementById('texto-3')
const boton = document.getElementById('boton')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    e.stopPropagation()
    

    const data = new FormData(formulario)

    // if (!data.get('usuario').trim()) {
    //     console.log('sin texto usuario')
    //     campoError(usuario)
    //     return
    // } else {
    //     campoValido(usuario)
    // }

    // if (!data.get('correo').trim()) {
    //     console.log('sin texto correo')
    //     campoError(correo)
    //     return
    // } else {
    //     campoValido(correo)
    // }

    // if (!data.get('mensaje').trim()) {
    //     console.log('sin texto mensaje')
    //     campoError(mensaje)
    //     return
    // } else {
    //     campoValido(mensaje)
    // }

    console.log('campos completados')

    fetch('formulario.php', {
        method: 'POST',
        body: data
    }) 
        .then(res => res.json())
        .then(datos => console.log(datos))
        .catch(e => console.log(e))

})

const campoError = (campo) => {
    campo.classList.add('is-invalid')
    campo.classList.remove('is-valid')

}

const campoValido = (campo) => {
    campo.classList.remove('is-invalid')
    campo.classList.add('is-valid')
}