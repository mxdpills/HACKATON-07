var texto = prompt("Escribe la oración o palabra para validar si es palíndromo:");

function esPalindromo(texto) {
    var textoNormalizado = texto.toLowerCase();
    textoNormalizado = textoNormalizado.replace(/[^a-z0-9]/g, '');

    var textoInvertido = textoNormalizado.split('').reverse().join('');

    return textoNormalizado === textoInvertido;
}

if (esPalindromo(texto)) {
    alert ("El texto es un palíndromo!!")
} else {
    alert("El texto no es un palíndromo :(");
}