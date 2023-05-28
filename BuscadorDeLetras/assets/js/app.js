const formulario = document.querySelector('.formulario')
const chaveAPI = 'e4aa2c7fa0dd0824afac8c5eb0ab4be8'
const resultado = document.querySelector('.resultado')
const cantor = document.querySelector('.cantor')
const musica = document.querySelector('.musica')



formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    buscarLetra(cantor.value, musica.value)
})

async function buscarLetra(cantor, musica) {
    await fetch(`https://api.vagalume.com.br/search.php?art=${cantor}&mus=${musica}&apikey=${chaveAPI}`)
      .then(data => data.json())
      .then(res => {
        const letraFormatada = res.mus[0].text.replace(/\n/g, '<br>'); // Substitui quebras de linha por tags <br>
        resultado.innerHTML = `<p>${letraFormatada}</p>`; // Envolve cada estrofe em um parágrafo
      })
      .catch(error => {
        window.alert('Verifique as informações');
      });
  }
  

