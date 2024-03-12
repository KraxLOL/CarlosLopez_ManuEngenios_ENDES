
let nota = prompt("Introduce tu nota")

while(nota < 0 || nota > 10){
    nota = prompt("Esa nota no es válida, introduce otra")
}

 if(nota >= 0 && nota < 5 ){
    alert("Suspenso");
    }else if (nota >= 5 && nota < 6){
        alert("Suficiente");
    }else if (nota >= 6 && nota < 7){
        alert("Bien");
    }else if (nota >= 7 && nota < 9){
        alert("Notable");
    }else if (nota >= 9 && nota < 10){
        alert("Sobrealiente");
    }else{
        alert("Matrícula de honor!");
    }