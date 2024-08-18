let opcion;

do{
    opcion = parseInt(prompt("Calculadora Básica:\n" + 
        "Funcionamiento de la calculadora\n" +
        "-Digite 1 para sumar\n" +
        "-Digite 2 para restar\n" +
        "-Digite 3 para multiplicar\n" +
        "-Digite 4 para dividir\n" +
        "-Digite 5 para obtener el módulo\n" +
        "-Digite 6 para salir\n"));

    if (opcion >=1 && opcion <=5) {
        let a = parseFloat(prompt("Ingrese el primer número:"));
        let b = parseFloat(prompt("Ingrese el segundo número:"));
        let resultado;

        switch (opcion) {
            case 1:
                resultado = a + b;
                console.log("La suma de " + a + " y " + b + " es igual a " + resultado);
                break;

            case 2:
                resultado = a - b;
                console.log("La resta de " + a + " y " + b + " es igual a " + resultado);
                break;

            case 3:
                resultado = a * b;
                console.log("La multiplicación de " + a + " y " + b + " es igual a " + resultado);
                break;
            
            case 4:
                resultado = a / b;
                console.log("La división de " + a + " y " + b + " es igual a " + resultado);
                break;

            case 5:
                resultado = a % b;
                console.log("El módulo de " + a + " y " + b + " es igual a " + resultado);
                break;
            
            default:
                console.log("Opción no válida");
                break;          
        }
    } else if (opcion !== 6) {
        console.log("Opción no válida. Intenta nuevamente :)");
    }
  } while (opcion !== 6);
    console.log("Saliste de la calculadora con éxito");