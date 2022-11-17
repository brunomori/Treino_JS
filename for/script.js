function contar() {
   var ini = document.getElementById('txti')
   var fim = document.getElementById('txtf')
   var passo = document.getElementById('txtp')
   var res = document.getElementById('res')
   res.innerHTML=''

   if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
      window.alert('[ERRO] Veirique os dados')
   }
   else {

      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(passo.value)


      if (i > f) {
         for (let c = i; c >= f; c -= p)
            res.innerHTML += `${c} `
      }
      else {
         for (let c = i; c <= f; c += p)
            res.innerHTML += `${c} `
      }
      //c=i(c = ao inicio)  //c <=fim // :contador vai receber ele mesmo mais o passo 
      // C= c+p    
      //res = o que ele ja tem +  o novo ciclo

   }
}
