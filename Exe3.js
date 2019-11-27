var salMin = prompt("Digite seu salário mínimo");
var qtdeKw = prompt("Digite a quantidade de Kw");

kw = (salMin /7)/100;
valorTotal = kw*qtdeKw;
desconto = valorTotal *(1-0.1);


document.write("Valor de 1Kw: R$ "+ kw+ "<br>");
document.write("Valor total da conta em R$ "+ valorTotal+ "<br>");
document.write("Valor com 10% de desconto R$ "+ desconto+ "<br>");

console.log("Valor de 1Kw"+ kw+ "<br>");
console.log("Valor total da conta em R$"+ valorTotal+ "<br>");
console.log("Valor com 10% de desconto R$"+ desconto+ "<br>");

alert("Valor de 1Kw"+ kw);
alert("Valor total da conta em R$"+ valorTotal);
alert("Valor com 10% de desconto R$"+ desconto);