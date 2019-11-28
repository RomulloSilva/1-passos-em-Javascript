// aqui decidimos que 1 será o primeiro jogador// 
var vez = 1;

function joga(idDiv) {
    var textoInterno = document.getElementById(idDiv).innerHTML
    if (textoInterno == "") {
        if (vez == 1) {
            document.getElementById(idDiv).innerHTML = "<img src='img Jogo da velha/1.jpg'></img>";
            vez = 2;
        }
        else {
            document.getElementById(idDiv).innerHTML = "<img src='img Jogo da velha/2.jpg'>";
            vez = 1;
        }
    }
    mostraVez();
}
function mostraVez() {
    document.getElementById("rodape").innerHTML = "<h1> Vez do Jogador " + vezDoJogador + "</h1>";
}

