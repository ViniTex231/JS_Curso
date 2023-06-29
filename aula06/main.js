// var n1 = Number(window.prompt("Digite um número: ")) // Converte pra INT e FLOAT
// var n2 = Number(window.prompt("Digite outro número: "))
// var s = n1 + n2
// window.alert("A soma dos números é: " + s)

// Number() - Transforma em Int/Float
// String() - Transforma em String

// var nome = window.prompt("Digite seu nome: ")
// var idade = Number(window.prompt("Digite sua idade: "))
// var nota = Number(window.prompt("Digite sua nota: "))
// window.alert(`O aluno ${nome}, com idade ${idade} tirou nota: ${nota}.`)

var nome = window.prompt("Qual é seu nome?")
document.write(`Seu nome tem ${nome.length} letras.`) // Utiliza o length e coloca no HTML
document.write(`Seu nome em maiúsculas é: ${nome.toUpperCase()}<br/>`) // Transforma em maiusculas
document.write(`Seu nome em minúsculas é: ${nome.toLowerCase()}`) // Transforma em minúsculas


var salario = 1545.5
salario.toFixed(2) // Deixa com duas casas decimais
salario.toFixed(2).replace('.', ',') // Transforma ponto em vírgula
salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});