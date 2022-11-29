function calcular() {
    var nome = document.getElementById('inome').value
    var altura = document.getElementById('ialtura').value
    var peso = document.getElementById('ipeso').value
    let resposta = document.getElementById('ires')

    if (nome !== '' && altura !== '' && peso !== '') {
        var valorIMC = (peso / (altura * altura)).toFixed(2)
        let classificao = ''

        if (valorIMC < 18.5) {
            classificao = 'abaixo do peso'
            resposta.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificao} `

        } else if (valorIMC < 25) {
            classificao = 'Peso ideal, Parabéns'
            resposta.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificao} `

        } else if (valorIMC < 30) {
            classificao = 'levemente acima do peso'
            resposta.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificao} `
        } else if (valorIMC < 35) {
            classificao = 'obesidade grau 1'
            resposta.textContent = `${nome} seu IMC é ${valorIMC} e você está na ${classificao} `
        } else if (valorIMC < 40) {
            classificao = 'obesidade grau2'
            resposta.textContent = `${nome} seu IMC é ${valorIMC} e você está na ${classificao} `
        } else {
            classificao = 'obesidade grau 3, Procure um médico!'
            resposta.textContent = `${nome} seu IMC é ${valorIMC} e você está na ${classificao} `
        }
    }

    else {
        resposta.textContent = 'Preencha os dados corretamente'
    }
}