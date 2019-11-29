//parte 1 criando o numero da sequência de tarefas.
var sequencia = 0; 
//parte 2 função ativada pelo botão que adiciona as tarefas.
function adicionar(){
    //Contagem da sequência
    sequencia++
    //Pega as tarefas digitadas pelo usuário.
    var tarefa = document.getElementById("proximatarefa").value;
    //Código que sera escrito na linha/row(novasTarefas), criando 3 colunas de 2,8,2.
    texto ='<div class="col-md-2 novasLinhas"><input type="checkbox"></input></div><div class="col-md-8 novasLinhas">#NOVATAREFA#</div><div class="col-md-2 novasLinhas">*SEQUÊNCIA*</div>';
    //Subtituição 
    texto = texto.replace("#NOVATAREFA#",tarefa);
    texto = texto.replace("*SEQUÊNCIA*",sequencia);
    document.getElementById("novasTarefas").innerHTML += texto;

}


