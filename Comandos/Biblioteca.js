// ficha=[nome='Bruno', idade=26]

// function reset(mudar){
//     ficha = mudar 

// }
// console.log(ficha)
// reset(fica=[nome='André',idade=29])
// console.log(ficha)
//---------------------------------------------------

// function mul(valor){
//     return valor*2;
// }

// let valor = mul(2)
// console.log(valor)
//---------------------------------------------------

// let idade =18
// console.log(idade++)
// console.log(idade)
// console.log(idade--)
// console.log(idade)
//------------------------------------------------------

// let valor=100
// valor+=valor
// console.log(valor) 
// //r:200

// valor-=valor
// console.log(valor)
//r:0

//-------------------------------------------------------

// let pontos =100;
// let tipo =pontos //expersão > 100 ? //verdade 'premium' : //falso'Comum' 
// console.log(tipo)
//--------------------------------------------------------------------------

//console.log(false && false) //retonar se os dois operandos forem true
//-------------------------------------------------------------------------

// let maiorDeIdade=true;
// let possuiCarteiraDeTrabalho=true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
// console.log(podeAplicar);

//----------------------------------------------------------
//  let maiorDeIdade=true;
//  let possuiCarteiraDeTrabalho=false;
//  let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
//  console.log(podeAplicar);
//----------------------------------------------------------

//   let maiorDeIdade=true;
//   let possuiCarteiraDeTrabalho=false;
//   let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
//   console.log('Pode aplicar',podeAplicar);

//   let caditadoRecusado = ! podeAplicar;
//   console.log('Canditado Recusado',caditadoRecusado)
//----------------------------------------------------------
// let corPersonalizada='Azul'
// let corPadrao='Petro'
// let corPefil= corPersonalizada||corPadrao
// console.log(corPefil)
//retonar azul , se o personalizado tivesse vazio , retonaria petro.


//-----------------------------------------------------------------
// Trocar de cor
// let a = 'Vermelho'
// let b ='Azul'
// function trocar(){
//     auxiliar=a
//     a=b
//     b=auxiliar  
// }
// trocar()
// console.log('A nova cor para a é:',a,'A nova cor para b é :',b)
//-----------------------------------------------------------------


//Se a hora estiver entr 06:00 até 12:00 bom dia!
//Se a hora estiver entre 12:00 até 18:00 boa tarde!
//caso contrario boa notie

// let hora =9
// if (hora >6 && hora <12){
//     console.log('Bom dia')
// }

// else if(hora >12 && hora <18){
//     console.log('Boa tarde')
// }

// else{
//     console.log('Boa noite')
// }
//---------------------------------------------------------------
// let permissao= 'comum'
// switch(permissao){
//     case'comum':
//     console.log('usuario comum')
//     break
    
//     case'gerente':
//     console.log('usuario gerente')
//     break

//     case'diretor':
//     console.log('usuario diretor')
//     break

//     default:
//     console.log('Usuario nao reconhecido!')
// }
//---------------------------------------------------------

//For //While //do While //For in//For of

// for (let i= 0; i<5; i++){
//     console.log('Estou aprendendo!',i)
// }

// informação , condição , acção 

// *************************************
// todo numero resto de divsão diferente de 2 , é impar!

// for (let i= 1; i <=5; i++){
   
//     if( i % 2 !==0){
//         console.log(i)

//     }
// }
// *************************************

// let i =5
// while (i >= 1){
//     if(i % 2!==0){
//         console.log(i);
//     }
//     i--
// }
//********************************************/
// let banco =5
// while (banco >=0){
//     console.log('toma um real',banco)
//     banco--
// 
//********************************************* */
// let banco =5;
// do{
//     console.log('toma um real',banco)
//     banco--;
// }while(banco>0)
//*********************************************** */

// const cores= ['Vermelho','Azul','Verde']
// for (let indice in cores){
//     console.log(cores[indice])
// }
//*********************************************** */
// const cores= ['Vermelho','Azul','Verde']
// for (let cor of cores){
//     console.log(cor)
// }
//********************************************** */

// Ler uma variel e retornar o maior valor

// let valorMaior= max(10,5)
// console.log(valorMaior)

// function max(valor1,valor2){
//     if(valor1>valor2){
//         return valor1
//     }

//     else{
//         return valor2
//     }
// }
// let valorMaior = max(10,5)
// console.log(valorMaior)

// function max(numero1,numero2){
//     return numero1 > numero2 ? numero1:numero2
// }
// ***********************************************

//Vericicador de velcidiade 
// Usa Math.Floor() Math.floor(1.3)  >> return 1
// Velocidade maxima é de atte 70km/h
// a cada k5m acima de limete voce ganha 1 ponto
// caso pontos maior que 12 "carteira suspendida"

// verificadorVelocidade(84 );

// function verificadorVelocidade(velocidade) {
//     if (velocidade <=70){
//         console.log('Prossiga')
//     }

//     else{
//         console.log('Ultrapassou a velocidaade permitida')
//         const pontos =Math.floor((velocidade-70)/5)
//         console.log(pontos,'pontos')
//         if(pontos >=12){
//             console.log('Carteira suspensa')
//         }
        
//     } 
// }


//Receber uma quantidade de valores para avaliar
//Função exbie se cada valor é para ou impar

// exebirfunção(5)

// function exebirfunção(limete){
//     for (let i=0; i <= limete; i++){
//         if (i %2 === 0){
//             console.log('Valor par',i)
//         }
//         else{
//             console.log('Valor impar',i)
//         }
//     }

// }

 //Criar um metodo para ler propriedades de um objeto e exbir somente as propiedades do tipo string que estao nesse objeto

// const filme ={ titulo:'Vingadores', ano: 2018, diretor:'robin', personagem:'Thor'}

// exibirPropiedades(filme )

// function exibirPropiedades(obj){
//     for (prop in obj)
    
//         if(typeof obj[prop]==='string')
//         console.log(prop,obj[prop])
// }

//************************************************************************** */
//Criar função somar que retorna a 
//soma de todos os multiplos de 3 e 5


//Multiplos de 3 = 3,6,9
//Multiplos de 5 = 5,10

//Somando os multiplos
//Armazenar os multiplos de 3 
//Armazenar os multiplos de 5
//Somar os dois 

// somar (10)
// function somar (limite){
//     let multiplosDe3 =0
//     let multiplosDe5=0
//     for ( i =0; i<= limite; i++){
//         if(i % 3===0)
//         multiplosDe3 +=i;
//         if (i % 5===0)
//         multiplosDe5 +=i
//     }
//     console.log(multiplosDe3+multiplosDe5);
// }
//*********************************************************************************** */

//Exercicio Nota Escolar 
// Obter a media a partir de um array
// 0-59: F
// 60-69: D
//70-79: C
//80-89: D
//90-100: A
 

// const array =[90,100,80];

// console.log(mediaDoAluno(array))

// function mediaDoAluno(notas){
//     let soma =0
//     for (let nota of notas){
//         soma+= nota
//     }

//     const media = soma/(notas.length) // LENGTH faz a leitura do total de itens do campo nota
//     if (media <59)
//         return'F'
//     if (media <69)
//         return'D'
//     if (media <79)
//         return'C'
//     if (media <89)
//         return'B'
//     else
//         return'A'
// }
//******************************************************************************************* */

//Criar uma função que exibe a quantidade de que aquela linha possui

// exibirAsterisco(10);
// function exibirAsterisco(linhas){
//     let padrao =''
//     for( let linha=1; linha <= linhas; linha++){
//         padrao += '*';
//         console.log(padrao)

//     }
// }
/************************************************************************************************* */

// Endereço
//Criar um objeto endereço que contem:
//Rua
//Cidade
//CEp
//ExebirEndereco(endereco)

// 1 incluir dentro de um objeto que chama-se endereco que contem( rua cidade cep ) e uma funcção que exbibe o endereco como parametro

// let endereco ={
//     rua:'Pará',
//     cidade:'Araraquara',
//     cep:14811070

// }


// function ExebirEndereco(endereco){
//     for (let chave in endereco){
//         console.log(chave,endereco[chave])
//     }
// }

// ********************************************************************************************
//Adicionando Elementes em um Arry


