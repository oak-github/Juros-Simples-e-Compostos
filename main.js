//Variáveis 

//Juros Simples

const capitalInput = document.querySelector("#capital")
const tempoInput = document.querySelector("#tempo")
const taxaInput = document.querySelector("#taxa")
const buttonJS = document.querySelector("#calcular")
const resultadoJuros = document.querySelector("#resultadoJuros")
const resultadoMontante = document.querySelector("#resultadoMontante")

buttonJS.addEventListener("click", calcularJurosS) 

//Juros Compostos

const capitalInputC = document.querySelector("#capitalC")
const tempoInputC = document.querySelector("#tempoC")
const taxaInputC = document.querySelector("#taxaC")
const buttonJC = document.querySelector("#calcularC")
const resultadoJurosC = document.querySelector("#resultadoJurosC")
const resultadoMontanteC = document.querySelector("#resultadoMontanteC")

buttonJC.addEventListener("click", calcularJurosC) 

//Funções




//Simples

function calcularJurosS() {
 let capital = parseFloat(capitalInput.value)
 let tempo = parseFloat(tempoInput.value)
 let taxa = parseFloat(taxaInput.value)
 
 let juros = capital * (taxa / 100) * tempo
 let m = juros + capital
 resultadoJuros.innerHTML = `Juros: R$${juros.toFixed(2)}`
 resultadoMontante.innerHTML = `Montante: R$${m.toFixed(2)}`
}

//Composta

function  calcularJurosC() {

  
  let capitalC = parseFloat(capitalInputC.value)
  let tempoC = parseFloat(tempoInputC.value)
  let taxaC = parseFloat(taxaInputC.value)
  
  let mC = capitalC * ( 1 + taxaC /100) ** tempoC
  resultadoJurosC.innerHTML = `Juros:R$${(parseFloat(mC) - capitalC).toFixed(2)}`
  resultadoMontanteC.innerHTML = `Montante:R$${mC.toFixed(2)}`
  }



