"use strict";
// Criando  uma aplicação simples de exemplo com ts de somar
// Objetivo é inserir os numeros nos dois campos e fazer o somatorio através do botão click aqui
// Esse arquivo está vinculado ao index.html
// Criar uma função para soma
// npm start roda o projeto
let button = document.getElementById('button');
let teste1 = document.getElementById('teste1');
let teste2 = document.getElementById('teste2');
//typescript tipar as variaveis
function adicionarNumero(numero1, numero2) {
    return numero1 + numero2;
}
if (button) {
    button.addEventListener('click', () => {
        if (teste1 && teste2) {
            // se der o erro A propriedade 'value' não existe no tipo 'HTMLElemen inserir as HTMLInputElement acima
           console.log( adicionarNumero(Number(teste1.value), (Number(teste2.value)))) ;
        }
    });
}
