/*
Esse desafio consiste em:

Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
    1- Preço do cCombustível;
    2- Gasto médio de combustível do carro por KM;
    3- Distância em KM da viagem;
*/

//1- Preço do cCombustível; variável let uma vez que o preço pode ser alterado
let precoCombustivel = 6.99;

//2- Gasto médio de combustível do carro por KM; variável constante uma vez que o gasto de cada carro é fixo e não sofre alteração(consiferando a hipótese de que o carro não aceita mais que um e somente 1 tipo de combustível);
const consumo = 11.7;

//3- Distância em KM da viagem; variável let, uma viagem pode ter vários km diferentes
let distanciaViagem = 244;

//4- Calcula o gasto efetivo que vai ter na viagem
let gastoCombustivel = distanciaViagem / consumo;
let totalCombustivel = gastoCombustivel * precoCombustivel;

//5- Imprimir na tela o resultado do consumo da viagem
console.log(
  `A sua viagem de ${distanciaViagem}KM,como carro com de consumo ${consumo}, vai gastar R$${totalCombustivel.toFixed(
    2
  )} consumindo ${gastoCombustivel.toFixed(
    2
  )} litros de combustível de preço R$ ${precoCombustivel}! `
);
