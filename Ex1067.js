var impar=prompt("Digite um número");/*/Aqui é digitado o limite /*/
imparhtml="";/*/ Essa variavel foi criada para criar o codigo html para imprimir de forma correta novaegador/*/
var numlinha=0;

for(i=1;i<=impar;i++){/*/Faz o loop para verificr os numeros impares dentro do limite/*/
    if (i % 2 !=0){/*/Verifica se os numeros que antecedem o número digitado é impar/*/
        var styleLinha="linha"+numlinha;
        imparhtml += "<div class='row " +styleLinha+"'> <div class='col-md-12'>"+i+"</div></div>";/*/ Aqui o código de html é escriyo perceba que o codigo é igual ao do bootstrap/*/
        numlinha = (numlinha + 1) % 3;/*/Aqui acontece a conta para limita o numero de linha entre 0 e 2, para encontrar a classe no html e definir o stilo do css/*/
    }
}
document.getElementById("impar").innerHTML = imparhtml;