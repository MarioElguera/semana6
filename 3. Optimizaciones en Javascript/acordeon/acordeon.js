document.addEventListener("DOMContentLoaded", function () {

    const acordeones = document.querySelectorAll('.acordeon-titulo');

    for (let i = 0; i < acordeones.length; i++) {

        acordeones[i].addEventListener('click', function () {

            for (let j = 0; j < acordeones.length; j++) {
                const contenido = acordeones[j].parentNode.querySelector('.acordeon-contenido');
                contenido.style.display = "none";
            }

            const contenido = acordeones[i].parentNode.querySelector('.acordeon-contenido');

            if (contenido.style.display === "none" || contenido.style.display === "") {
                contenido.style.display = "block";
            }
        });
    }
});