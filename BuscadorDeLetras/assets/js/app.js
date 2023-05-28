const formulario = document.querySelector('.formulario')
const chaveAPI = 'e4aa2c7fa0dd0824afac8c5eb0ab4be8'
const resultado = document.querySelector('.resultado')
const canto = document.querySelector('.cantor')
const musica = document.querySelector('.musica



formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    buscarLetra(cantor.value, musica.value)
})

async function buscarLetra(cantor, musica) {
    await fetch(`https://api.vagalume.com.br/search.php?art=${cantor}&mus=${musica}&apikey=${chaveAPI}`)
        .then(data => data.json())
        .then(res => {
            resultado.innerHTML = res.mus[0].text
        }).catch(err => {
            window.alert('Verifique as informações')
        })
}
