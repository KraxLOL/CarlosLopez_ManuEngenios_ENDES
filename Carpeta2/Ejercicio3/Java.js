
let cadena = prompt ("Introduce algo");

do{
    let respuesta = prompt ("Introduce algo");
    cadena = cadena + "-" + respuesta;
}while(confirm ("¿Quieres continuar?"));
    alert(cadena);