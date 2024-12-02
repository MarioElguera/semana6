// Ejercicio 1 ---------------------------------------------------------------
function mostrarPares() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log("Número par =>" + i);
        }
    }
}
mostrarPares();

// Ejercicio 2 ---------------------------------------------------------------
function dibujarCuadrado() {
    let lado = 5;

    for (let i = 0; i < lado; i++) {
        let fila = "";
        for (let j = 0; j < lado; j++) {
            fila += "*";
        }
        console.log(fila);
    }
}
dibujarCuadrado();

// Ejercicio 3 ---------------------------------------------------------------
function dibujarTriangulo() {
    let altura = 5;

    for (let i = 1; i <= altura; i++) {
        let fila = "";
        for (let j = 1; j <= i; j++) {
            fila += "*";
        }
        console.log(fila);
    }
}
dibujarTriangulo();

// Ejercicio 4 ---------------------------------------------------------------
function saludar(nombre) {
    alert("Hola " + nombre);
}

function procesarEntradaUsuario(callback) {
    var nombre = prompt("Por favor ingresar nombre");
    callback(nombre);
}

procesarEntradaUsuario(saludar);