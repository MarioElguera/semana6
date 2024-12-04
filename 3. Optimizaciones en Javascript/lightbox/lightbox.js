document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.lightbox-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close-btn');

    images.forEach(function (image) {
        image.addEventListener('click', function () {
            lightboxImg.src = image.src;
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
