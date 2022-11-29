
function calcular() {
    const altura = document.getElementById('ialtura').value
    const peso = document.getElementById('ipeso').value
    const nome = document.getElementById('inome').value
    const resultado = document.getElementById('ires')

    if (nome !== '' && peso !== '' && altura !== '') {  //se valor de nome foi diferente de '' campo vazio
        const valorIMC = (peso / (altura * altura)).toFixed(2) //toFixed(2) Redonda duas casas
        resultado.textContent = valorIMC

        let classificacao = ""
        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso'
        } else if (valorIMC < 25) {
            classificacao = 'peso ideal. Parabens'
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso'
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau 1'
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau 2'
        } else {
            classificacao = 'com obesidade grau 3. Cuidado!!!'
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`

    }
    else {
        window.alert('ERRO!')
        resultado.textContent = 'Preencha todosos campos!'
    }
}


