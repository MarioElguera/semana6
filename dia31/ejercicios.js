// Ejercicio 1 ---------------------------------------------------------------

// Ejercicio 2 ---------------------------------------------------------------
function obtenerColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function cambiarColor(id) {
    const boton = document.getElementById(id);
    boton.style.backgroundColor = obtenerColorAleatorio();
}

// Ejercicio 3 ---------------------------------------------------------------
function obtenerColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function cambiarColores() {
    for (let i = 1; i <= 5; i++) {
        const div = document.getElementById('div' + i);
        div.style.backgroundColor = obtenerColorAleatorio();
    }
}

// Ejercicio 4 ---------------------------------------------------------------
document.addEventListener('mousemove', function (event) {
    let x = event.clientX;
    let y = event.clientY;

    console.log(`Posición del ratón: X = ${x}, Y = ${y}`);
});

// Ejercicio 5 ---------------------------------------------------------------
function obtenerColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}
const div = document.getElementById('miDiv');

div.addEventListener('mouseenter', function () {
    div.style.backgroundColor = obtenerColorAleatorio();
});

div.addEventListener('mouseleave', function () {
    div.style.backgroundColor = obtenerColorAleatorio();
});

// Ejercicio 6 ---------------------------------------------------------------
document.getElementById("colorButton").addEventListener("click", function () {
    const colors = ['white', '#add8e6', '#98fb98', '#f0e68c', '#dcdcdc'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

document.addEventListener("keydown", function (event) {
    const keyMessage = document.getElementById("keyMessage");
    keyMessage.textContent = "Has presionado la tecla: " + event.key;
});

window.addEventListener("resize", function () {
    const resizeMessage = document.getElementById("resizeMessage");
    resizeMessage.textContent = "Tamaño de la ventana: " + window.innerWidth + " x " + window.innerHeight;
});