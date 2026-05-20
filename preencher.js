async function prencher(trs){
let promise = await fetch ('./bd.json')
let pessoas = await promise.json()
console.log(pessoas)

for (let index = 0; index <trs.length ; index++) {

// Se o n de linhas no html for maior para
if (index >= pessoas.length) {
    break;
}

let filhos = trs[index].children //children pega elemntos filhos
filhos=Array.from(filhos)

filhos[0].textContent=pessoas[index].nome
filhos[1].textContent=pessoas[index].idade
filhos[2].textContent=pessoas[index].altura
filhos[3].textContent=pessoas[index].peso

}
return trs
}

export {prencher}