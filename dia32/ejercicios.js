// Ejercicio 1 ---------------------------------------------------------------
const div = document.getElementById("miDiv");
const boton = document.getElementById("animarBtn");

boton.addEventListener("click", () => {
    div.classList.add("animar");

    setTimeout(() => {
        div.classList.remove("animar");
    }, 2000);
});

// Ejercicio 2 ---------------------------------------------------------------
const parrafo = document.getElementById('miParrafo');
const boton2 = document.getElementById('cambiarColorBtn');

boton2.addEventListener('click', () => {
    parrafo.classList.remove('highlight');
    parrafo.style.color = 'blue';
});

// Ejercicio 3 ---------------------------------------------------------------
const div3 = document.getElementById('miDiv3');
const boton3 = document.getElementById('alternarBtn3');

boton3.addEventListener('click', () => {
    div3.classList.toggle('grande');
});


// Ejercicio 4 ---------------------------------------------------------------
const parrafo4 = document.getElementById('miParrafo4');
const boton4 = document.getElementById('cambiarColorBtn4');

boton4.addEventListener('click', () => {
    parrafo4.classList.remove('highlight');
    parrafo4.classList.add('animar');
    setTimeout(() => {
        parrafo4.classList.remove("animar");
    }, 2000);
});

// Ejericio 5 y 6 ---------------------------------------------------------------
let count = 0;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const button = document.getElementById('addDivButton');
const container = document.getElementById('container');

button.addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor = getRandomColor();
    newDiv.addEventListener('mouseenter', () => { newDiv.style.opacity = '0.8'; });
    newDiv.addEventListener('mouseleave', () => { newDiv.style.opacity = '1'; });

    newDiv.textContent = ++count;
    newDiv.addEventListener('click', () => {
        container.removeChild(newDiv);
    });
    container.appendChild(newDiv);
});

