var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

var dni = parseInt(prompt("Introduce tu número de DNI (con excepción de la letra):"));
var letraUsuario = prompt("Introduce la letra de tu DNI (en mayúsculas):")

if (dni < 0 || dni > 99999999 ) {
    console.log("El número proporcionado no es válido. Intenta nuevamente");
    
} else {
    var indice = dni % 23;
    var letraCalculada = letras[indice];

    if (letraCalculada === letraUsuario) {
        console.log("El número y la letra del DNI son correctos");

    } else {
        console.log("La letra indicada no es correcta. La letra correcta es: " + letraCalculada);
    }
}