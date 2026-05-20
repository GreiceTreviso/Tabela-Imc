import { Calculoimc, calculostatus } from "./function.js"
import { prencher } from "./preencher.js"
import { atualizarTabela, realcarStatus, configurarFiltro } from "./atualizarTab.js"

let atributos = document.querySelectorAll('tbody tr')
let input = document.querySelector('.entrada')

// Bloco assíncrono para rodar as funções na ordem correta baseada no professor
async function iniciar() {
    // Preencher Tabela
    atributos = await prencher(atributos)
    atributos = atualizarTabela(atributos, Calculoimc, calculostatus)
    realcarStatus(atributos)
    configurarFiltro(atributos, input)
}

iniciar()










