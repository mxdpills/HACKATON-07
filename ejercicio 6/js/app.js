var diametro = parseFloat(prompt("Introduce el diámetro de la rueda (en metros):"));
var grosor = parseFloat(prompt("Introduce el grosor de la rueda (en metros):"));

if (diametro > 1.4) {
    if (grosor > 0.4) {
        alert("El grosor para esta rueda es inferior al recomendado");
    } else {
        alert("La rueda es para un vehículo grande")
    }
} else if (diametro > 0.8) {
    if (grosor < 0.25) {
        alert("El grosor para esta rueda es inferior al recomendado")
    } else {
        alert("La rueda es para un vehículo mediano");
    }

} else {
    alert("La rueda es para un vehículo pequeño");
}