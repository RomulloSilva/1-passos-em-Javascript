
function curi(){
    var nomeCompleto = document.getElementById("nome").value;
    var pos = 0;
    var primPalavra;
    var posicaoNomes = [];
    var posiNoVetor = 0;
    console.log("Li o nome = "+nomeCompleto);
    console.log("Tamanho da palavra = "+nomeCompleto.length);

    pos = nomeCompleto.indexOf(" ");
    console.log("O primeiro espaço em branco esta na posição "+pos);
    while(pos>=0){
        primPalavra = nomeCompleto.slice(0,pos);
        console.log("Extraida a palavra = "+primPalavra);
        nomeCompleto = nomeCompleto.slice(pos + 1);
        pos = nomeCompleto.indexOf(" ");
    }
    primPalavra = nome;

    /*console.log("Nome completo "+nomeCompleto);
    console.log("Tamanho da palavra = "+nomeCompleto.length);
    var primenome = nomeCompleto.slice(0, nomeCompleto.indexOf(" "));
    console.log("Primeira palavra = "+primenome);
    nomeCompleto = nomeCompleto.slice(nomeCompleto.indexOf(" ")+1);
    console.log = ("Sobrou o texto = "+nomeCompleto);*/

}

//var comprimento = nomeCompleto.length("");
//console.log("Quantas letras tem... "+comprimento);
//var procurepor = nomeCompleto.search("Leocádio");
//console.log("Onde está Leocádio... "+procurepor);
//var posicao = nomeCompleto.lastIdexOf("18");
//console.log("Qual nome está na anterior a posição 18.... "+posicao);

