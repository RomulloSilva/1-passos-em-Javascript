//var numero=prompt("Digite um número");
//var escreverhtml="";

//if(numer>=5 && numero<=2000){

    //for(i=1; i<=numero; i++){

        //if(i % 2 == 0){
          //  par = i*i
            //escreverhtml += "<div class= 'col-md-12'> " +
        //}
   // }
//}

//------Sem bootstrap----//

var N = prompt("Por favor, digite um valor positivo"); //aqui temos a entrada de valor digitado pelo usuario e armazena em N.
textoInterno="";
for (valor = 1; valor <= N; valor++){
    if( valor % 2 == 0){
        //alert(valor + "^ 2 = " + (valor*valor));
        console.log(valor + "^ 2 = " + (valor*valor));
        //document.write(valor + "^ 2 = " + (valor*valor));
        //textoInterno = textoInterno + valor + " ^ 2 = "+ (valor*valor)+"<br/>"
    }
}
//document.getElementById("pares").innerHtml = textoInterno