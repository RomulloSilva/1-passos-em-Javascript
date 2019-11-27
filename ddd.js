function valida(){
    var ddd = prompt("Informe o seu DDD");
        switch(ddd){
            case "61":
                 document.getElementById("cidade").innerHTML="Brasilia";
                break;
             case "71":
                document.getElementById("cidade").innerHTML="Salvador";
                break;  
            case "11":
                document.getElementById("cidade").innerHTML="São Paulo";
                break;
             case "21":
                document.getElementById("cidade").innerHTML="Rio de Janeiro";
                break;
             case "32":
                document.getElementById("cidade").innerHTML="Juiz de Fora";
                break;
            case "19":
                document.getElementById("cidade").innerHTML="Campinas";
                break;
            case "27":
                document.getElementById("cidade").innerHTML="Vitória";
                break;
            case "31":
                document.getElementById("cidade").innerHTML="Belo Horizonte";
                break; 
            default:
                document.getElementById("cidade").innerHTML="INVALIDO";
                break;
            }
        }   