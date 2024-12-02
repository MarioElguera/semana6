// Ejercicio 1 ---------------------------------------------------------------
function abrirVentana() {
    ventana = window.open("", "_blank", "width=400,height=300");
    ventana.document.write("<h1>Ventana Abierta</h1>");
}

function cerrarVentana() {
    if (ventana) {
        ventana.close();
    } else {
        alert("No hay ninguna ventana abierta.");
    }
}

function moverVentana() {
    if (ventana) {
        ventana.moveTo(200, 100);
    } else {
        alert("Primero abre una ventana.");
    }
}

function redimensionarVentana() {
    if (ventana) {
        ventana.resizeTo(700, 800);
    } else {
        alert("Primero abre una ventana.");
    }
}

function redirigir() {
    window.location.href = "https://www.react.com";
}

// Ejercicio 2 ---------------------------------------------------------------

function cambiarNumeros() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.innerText = Math.floor(Math.random() * 100) + 1;
    });
}

// Ejercicio 3 ---------------------------------------------------------------
function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Por favor, ingresar números válidos.";

    } else {
        switch (operator) {
            case "sum":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "multiply":
                result = num1 * num2;
                break;
            case "divide":
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "No se puede dividir entre 0.";
                }
                break;
            default:
                result = "Operación inválida.";
        }
    }

    document.getElementById("result").innerText = "Resultado: " + result;
}