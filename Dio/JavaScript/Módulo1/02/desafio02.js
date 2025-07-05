/*Faça um programa para calular o valor de uma viagem

Você terá 5 variáveis. Sendo eles?
1- Preço do etanol;
2- Preço da gasolina;
3- O tipo de combustível que está no seu carro;
4- Gasto médio de combustível do carro por KM;
5- Distância em KM da viagem;
*/

const priceEtanol = 4.66;
const priceGasolina = 6.99;

const fuelType = 'gasolina';
const isGasoline = (fuelType == 'gasolina');
const fuelConsumptionPerKm = 14.3;
const tripDistanceKm = 200;

const tripConsumption = tripDistanceKm / fuelConsumptionPerKm;

if(isGasoline){
    const fuelCost = tripConsumption * priceGasolina
    console.log(`Sua viagem de ${tripDistanceKm}km, consumiu ${tripConsumption.toFixed(2)} litros de gasolina no valor de R$${priceGasolina}, e com isso sua viagem teve um custo de R$${fuelCost.toFixed(2)}!`)
}else{
    const fuelCost = tripConsumption * priceEtanol
    console.log(`Sua viagem de ${tripDistanceKm}km, consumiu ${tripConsumption.toFixed(2)} litros de etanol no valor de R$${priceEtanol}, e com isso sua viagem teve um custo de R$${fuelCost.toFixed(2)}!`)
};