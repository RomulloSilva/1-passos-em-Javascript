var numMusica= 0;
var tempo = 0;// var responsavel por retorna a musica de onde foi pausada, se nunhuma outra for iniciada.
function tocaAnterior(){// função responsável por tocar musica anterior a musica atual.
    tempo=0
    numMusica--;// como as musicas são numeradas de 0 a 3, a variável diminui para que regrida a playlist.
    if(numMusica < 0){
        numMusica = 3;//retorna a ultima musica.
    }
    else{
        document.getElementById("music").src = "musica/music"+numMusica+".mp3";
    document.getElementById("music").play();//toca a musica anterior subtituindo a variavel que numera o nomre da musica linkando no html.
    }
}

function tocarAtual(){//da play na musica
    console.log("musica atual = "+document.getElementById("music").src);
    document.getElementById("music").src = "musica/music"+numMusica+".mp3";//aqui é o codigo escrito em html par linkar a musica.
    document.getElementById("music").currentTime = tempo;//retorna a musica do ponto onde foi pausado.
    document.getElementById("music").play();
    console.log("IH....");
}
function paraTudo(){
    document.getElementById("music").pause();//pausa a musica em execução.
    tempo = document.getElementById("music").currentTime;//guarda o ponto onde a musuca foi pausada.
}
function tocarProxima(){// aqui acontece a condição para tocar as musicas em sequência.
    tempo=0
    numMusica++;//soma a variável que numera o nome das musicas.
    if(numMusica >3){// codição para que não ultrapasse o numero rel de musicas.
        numMusica = 0;
    }
    else{
        document.getElementById("music").src = "musica/music"+numMusica+".mp3";
    document.getElementById("music").play();//toca a proxima musica, atraves da substituição da variavel que numera o nome da musica.
    }
}