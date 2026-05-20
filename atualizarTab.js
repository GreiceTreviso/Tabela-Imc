export function atualizarTabela(trs, Calculoimc, calculostatus) {
    for (let index = 0; index < trs.length; index++) {
        let filhos = trs[index].children;

        //loop
        if (!filhos[0] || filhos[0].textContent === "") {
            break;
        }

        let idade = parseFloat(filhos[1].textContent)
        let altura = parseFloat(filhos[2].textContent)
        let peso = parseFloat(filhos[3].textContent)


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
    return trs;
}

export function realcarStatus(trs) {
    //iterador 
    //forEach para percorrer todos (loop)
    trs.forEach(tr => {
    let filhos=tr.children
    let status = filhos[5]

    //linhas vazias não darem erro de cor
    if (!status) return;

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
    return trs;
}

// filtro
export function configurarFiltro(atributos, input) {
    if (!input) return;
    
    input.addEventListener('input', ()=> { //pra rodar sempre que digita
   
      atributos.forEach(tr => { //percorrer todas linha sda tabela
     tr.visible = true //linha pode aparecer
     let tds = tr.children //pegando as td

     if(tds[5] && !tds[5].textContent.includes(input.value)){ //tds5 pq é a sexta coluna,mas começa a conta do 0. pegando texto e vendo se contem
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
}