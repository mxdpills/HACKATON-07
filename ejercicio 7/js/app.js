var numero = parseInt(prompt("Introduce un número entero positivo:"));

function calculaFactorial(n) {
    if (n < 0) {
        return "El número debe ser un entero positivo"
    } else if (n == 0 || n === 1) {
        return 1;

    } else {
        var factorial = 1;
        for (var i = 2; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

var resultado = calculaFactorial(numero);
    alert("El factorial de " + numero + " es " + resultado);