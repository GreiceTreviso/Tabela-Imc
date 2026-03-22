
let atributos = document.querySelectorAll('tbody tr') //a diferença do document.querySelector e o  document.querySelectorAll é que o All pode mirar em varias tag de uma vez só.

//criar o laço de repetição para q ele apresente todas a tr e td
for (let index = 0; index <=19 ; index++) {
// let cria a variavel pra repetir, =0 pra começar dele
// <19; o quanto vai repetir .repete ate ser menor q 19 se passar bloqueia.
// ++ quanto muda a cada repetição
// 0, 1 ,2... contagem vetor começa do zero

let linhas = atributos[index]
// mais uma variavel q repete as tr com o laço que criamos
let filhos = linhas.children
//mais uma variavel, agora engobra as tr e o laço de repetição criado


let idade = filhos[1].textContent 
let altura = filhos[2].textContent
let peso = filhos[3].textContent
//cria as variaveis que pegam atributos especificos das tag das td
// filhos[1] pegue primeira coisa dos filhos que são as td
// textContent pq o querySelectorAll traria a tag toda, assim extrai só conteudo
}














