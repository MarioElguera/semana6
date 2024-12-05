// Ejercicio 1 ---------------------------------------------------------------
function alternarColores() {
    const parr = document.getElementById('parrafo');

    if (parr.style.color == 'white') {
        parr.style.backgroundColor = 'white';
        parr.style.color = ' black';

    } else {
        parr.style.backgroundColor = 'black';
        parr.style.color = 'white';
    }
}

// Ejercicio 2 ---------------------------------------------------------------
function alternarAncho() {
    const div = document.getElementById('miDiv');
    if (div.style.width === '80vw') {
        div.style.width = '20vw';
    } else {
        div.style.width = '80vw';
    }
}
// Ejercicio 3 ---------------------------------------------------------------
// NO TIENE CSS

// Ejercicio 4 ---------------------------------------------------------------
const square = document.getElementById('square');
const button = document.getElementById('toggleButton');

let isSizeIncreased = false;
let isRotated = false;

button.addEventListener('click', () => {
    if (isSizeIncreased) {
        square.style.width = '100px';
        square.style.height = '100px';
    } else {
        square.style.width = '200px';
        square.style.height = '200px';
    }
    isSizeIncreased = !isSizeIncreased;

    if (isRotated) {
        square.style.transform = 'rotate(0deg)';

    } else {
        square.style.transform = 'rotate(180deg)';
    }
    isRotated = !isRotated;
});

// Ejercicio 5 ---------------------------------------------------------------
const box = document.getElementById('box');
const button5 = document.getElementById('toggleButton5');

button5.addEventListener('click', () => {
    if (box.style.display === 'none') {
        box.style.display = 'block';
    } else {
        box.style.display = 'none';
    }
});

// Ejercicio 6 ---------------------------------------------------------------
const box6 = document.getElementById('box6');
const button6 = document.getElementById('toggleButton6');

button6.addEventListener('click', () => {
    if (box6.style.opacity === '0') {
        box6.style.opacity = '1';
    } else {
        box6.style.opacity = '0';
    }
});

// Ejercicio 7 y 8 ---------------------------------------------------------------
const button7 = document.getElementById('randomButton');
const cells = document.querySelectorAll('#table td');

button7.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * cells.length);
    if (cells[randomIndex].style.backgroundColor == 'yellow') {
        cells[randomIndex].style.backgroundColor = 'white';

    } else {
        cells[randomIndex].style.backgroundColor = 'yellow';

    }
});

// Ejercicio 9 ---------------------------------------------------------------
const button9 = document.getElementById('randomButton9');
const div = document.getElementById('miDiv9');

button9.addEventListener('click', () => {
    const axisX = Math.round(Math.random() * 1024) + "px";
    const axisY = Math.round(Math.random() * 738) + "px";

    div.style.position = 'fixed';
    div.style.left = axisX;
    div.style.top = axisY;

});
