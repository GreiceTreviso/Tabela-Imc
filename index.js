import { Calculoimc, calculostatus} from "./function.js"

let atributos = document.querySelectorAll('tbody tr') //a diferença do document.querySelector e o  document.querySelectorAll é que o All pode mirar em varias tag de uma vez só.

//criar o laço de repetição para q ele apresente todas a tr e td
for (let index = 0; index <atributos.length ; index++) {
// let cria a variavel pra repetir, =0 pra começar dele
// <atributos.lenght; o quanto vai repetir de forma automatica
// ++ quanto muda a cada repetição. ou sej mais um
// 0, 1 ,2... contagem vetor começa do zero

let linhas = atributos[index]
// mais uma variavel q repete as tr com o laço que criamos
let filhos = linhas.children //children pega elemntos filhos
//mais uma variavel, agora engobra as tr e o laço de repetição criado


let idade = filhos[1].textContent 
let altura = filhos[2].textContent
let peso = filhos[3].textContent
//cria as variaveis que pegam atributos especificos das tag das td
// filhos[1] pegue segunda coisa dos filhos que são as td
// textContent pq o querySelectorAll traria a tag toda, assim extrai só conteudo

idade = parseFloat(idade)
altura = parseFloat(altura)
peso = parseFloat(peso)
//parsenFloat transforma em numero 


//contas
let imcpessoas = Calculoimc (peso,altura) //chama a function e faz a conta
let imc = filhos[4]
imc.textContent = imcpessoas.toFixed(1)
// cria mais uma variavel, e pede pra apresentar na posição 4 do vetor
// basicamente coloca a conta na tabela, toFixed pede pra apresentar numero em duas decimais.

let veredito = parseFloat(imc.textContent)
calculostatus (veredito, filhos[5])
}
// aqui o textContent ta sendo usado para alterar a escrita da tag html

//iterador 
//forEach para percorrer todos (loop)
atributos.forEach(tr => {
let filhos=tr.children
let status = filhos[5]

if (status.textContent == 'Abaixo do peso'){
 status.style.backgroundColor = '#eec6c6'
 }

 else if (status.textContent == "Normal") {
  status.style.backgroundColor = 'white'
 }                                   

 else if (status.textContent == "Sobrepeso") {
 status.style.backgroundColor = '#edf4d8'
 }

 else if (status.textContent == "Obesidade Grau I") {
  status.style.backgroundColor = '#cb9c9c'
 }

 else if (status.textContent == "Obesidade Grau II") {
  status.style.backgroundColor = '#6f3939'
 }

 else{ 
  status.style.backgroundColor = '#350a0a'
} 

})

//filtro
let input =document.querySelector('.entrada') //criando variavel input pegando caixinha la do html
input.addEventListener('input', ()=> { //pra rodar sempre que digita
   
      atributos.forEach(tr => { //percorrer todas linha sda tabela
     tr.visible = true //linha pode aparecer
     let tds = tr.children //pegando as td

     if(!tds[5].textContent.includes(input.value)){ //tds5 pq é a sexta coluna,mas começa a contar do 0. pegando texto e vendo se contem
        tr.visible = false //se nn tiver o texto linha some
     }

     if(tr.visible){ 
        tr.style.display = 'table-row' //se tiver texto mostra a linha
     } else{
        tr.style.display = 'none'//esconde as outras 
     }


     })
     console.log ('----') //separa rodadas console, toda vez q digita
     })











