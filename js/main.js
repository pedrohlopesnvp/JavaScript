var nome = prompt("Qual seu nome?:");
var idade = prompt("Qual sua idade?:");
var idade2 = 22;
var frase = "Argentina é o melhor time do mundo!"
//var frutas = ["maça","pera","laranja","abacaxi"];

//dicionario
var frutas = [{nome:"banana", cor:"amarela"},{nome:"maça", cor:"vermelha"},{nome:"limão", cor:"verde"}];
console.log(frutas);

var d = new Date();
alert(d);

alert("Bem vindo, " + nome + ". Idade:" + idade);
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
}

console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Argentina","Brasil"));
console.log(frase.toLowerCase);
console.log(frase.toUpperCase);
//alert(frase.replace("Argentina","Brasil"));

//frutas.push("uva");
//frutas.pop();
//console.log(frutas.length);
//console.log(frutas);
//alert(frutas[1]);