var nota1 = parseFloat(prompt("Introduce tu primera nota (solo de 0 a 20)"));
var nota2 = parseFloat(prompt("Introduce tu segunda nota (solo de 0 a 20)"));
var nota3 = parseFloat(prompt("Introduce tu tercera nota (solo de 0 a 20)"));

if ((nota1 < 0 || nota1 > 20) || (nota2 < 0 || nota2 > 20) || (nota3 < 0 || nota3 > 20)) {
    alert("Las notas deben estar entre 0 y 20!!!")
} else {
    var promedio = (nota1 + nota2 + nota3) / 3;

    var rendimiento;
    if (promedio < 10.5) {
        rendimiento = "Desaprobado";
    } else if (promedio <= 15) {
        rendimiento = "Rendimiento Medio";
    } else if (promedio <= 17)  {
        rendimiento = "Rendimiento Alto";
    } else {
        rendimiento = "Rendimiento Excelente"
    }

    alert("Tu promedio es: " + promedio.toFixed(2) + "\nTu rendimiento es: " + rendimiento);
}