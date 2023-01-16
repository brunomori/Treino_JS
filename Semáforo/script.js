const img = document.getElementById("img")


function red() {
    img.src = "img/vermelho.png"
}

function yellow() {
    img.src = "img/amarelo.png"
}

function green() {
    img.src = "img/verde.png"
}



var interval = 0;

function automatic() {
    interval = setInterval(() => {
        console.log(interval)

        function red() {
            img.src = "img/vermelho.png"
        }
        setTimeout(red, 2500)

        function yellow() {
            img.src = "img/amarelo.png"
        }
        setTimeout(yellow, 3500)

        function green() {
            img.src = "img/verde.png"
        }


        setTimeout(green, 4500)

    }, 5000)
}

function stop() {
    console.log(interval)

    setTimeout(() => {
        img.src = 'img/desligado.png'
        clearInterval(interval)
        console.log('executei');

    })
}

