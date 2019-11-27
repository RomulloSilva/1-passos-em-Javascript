function calculaImposto() {//Função que será acessada com o click, sendo ela responsável por calcular o valor do desconto.
    var salario = document.getElementById("salario").value;//Pega o valor que foi digitado no campo e incorpora na var salario.
    console.log("Salário digitado R$ " + salario);//Exibi o valor digitado no console.
    var imposto;

    if (salario <= 1000) {
        imposto = 0;
        console.log("Insento de imposto");
    }
    else {
        if (salario > 1000 && salario < 2500) {

            imposto = (salario * 0.125);
            console.log("Esse é o valor do imposto de 12,5% em R$ " + (salario * 0.125));
        }
        else {
            if (salario >= 2500 && salario < 5000) {

                imposto = (salario * 0.25);
                console.log("Esse é o valor do imposto de 25% em R$ " + (salario * 0.25));
            }
            else {
                imposto = 1300
                console.log("Esse é o valor do fixo do imposto R$ R$ " + 1300);
            }
        }
    }
    return imposto; //retorna o valor que esta armazenado na var imposto
}

//Aqui exibi o resultado na tela.
function totalizarEExibir() {
    var salariobruto = document.getElementById("salario").value;
    console.log("Salário bruto obtido = " + salariobruto);
    var imposto = calculaImposto();
    var salarioliquido = salariobruto - imposto;
    document.getElementById("resultado").innerHTML = "Imposto Devido R$ " + imposto + "<br/>" + "Salário líquido R$ " + salarioliquido + "<br/>";

}
