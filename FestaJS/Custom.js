function validar(){
    var Dono = document.getElementById('idono').value
    if(Dono==="Bruno"){
        var nome =document.getElementById('inome').value
        lista=['Juliano','Pedro']
        if(lista.includes(nome)){
            document.getElementById('res').innerHTML='Seja bem vindo'
        }
        else{
            document.getElementById('res').innerHTML='Dono correto , mas nome não está lista'
        }
    }
    else{
        document.getElementById('res').innerHTML='Não existe esse dono'
    }
}