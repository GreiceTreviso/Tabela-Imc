//function para conta de imc
export function Calculoimc (peso, altura){
let imc =  peso / (altura * altura) 
return imc
}

export function calculostatus (imc, tagPessoa) {

 if (imc< 18.5){
    tagPessoa.textContent = "Abaixo do peso"
 }

 else if (imc>= 18.5 && imc< 24.9) {
    tagPessoa.textContent = "Normal" //&& é um "e" no js
 }                                   // não se usa numero com virgula, o js nn entende numero com virgula como numero!

 else if (imc>= 25.0 && imc< 29.9) {
    tagPessoa.textContent = "Sobrepeso"
 }

 else if (imc>= 30.0 && imc< 34.9) {
    tagPessoa.textContent = "Obesidade Grau I"
 }

 else if (imc>= 35.0 && imc< 39.9) {
    tagPessoa.textContent = "Obesidade Grau II"
 }

 else{ (imc>= 40)
    tagPessoa.textContent = "obesidade Grau III morbida"
} 
}