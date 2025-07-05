//condicionais 

// são valores booleanos que podem ser true ou false
//Exemplo 1...

const numero = 4;
const numeroEhPar = (numero%2) === 0;

console.log("Exemplo 1: Número é par? " + numeroEhPar);


//Exemplo2 ..

//Aqui usamos if que também é uma condicional, o seu valor entre parenteses se trata como verdade e podemos negar com '!'
console.log('Exemplo2');
const numero1 = 5;
const numeroEhPar1 = (numero1%2) === 0;

if (numeroEhPar1){
    console.log("Esse Número é par");
};
if (!numeroEhPar1){
    console.log("Esse Número é impar");
};

//Exemplo 3 
//Por convensão usamos o termo is para variaveis booleanas
console.log("Exemplo 3");
const number = 5;
const isEven = (number%2) === 0;

//outra coisa que podemos usar é if e else, if para condição verdadeira e else para falsa, e tbm usar um if aninhado que colocamos um else if

if (isEven){
    console.log("This number is even")
}else if(!isEven){
    console.log("This number is odd")
}else{
    console.log("This number is invalid")
};

//podemos ainda colocar a condição dentro da condicional
console.log("Condicional dentro do if")
if(number>4){
    console.log("This number is greater than 4 ")
}