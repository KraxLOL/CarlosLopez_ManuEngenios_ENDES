
let suma = 0;

do{
    let numero = prompt("Introduce un número");
    suma = suma + parseInt(numero);
}while(confirm("¿Quieres añadir más números?"))
    alert(suma);



