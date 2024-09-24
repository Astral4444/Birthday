// Получаем элементы галереи и модального окна
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

// Открытие модального окна при клике на изображение
galleryImages.forEach(image => {
    image.addEventListener('click', function() {
        lightbox.style.display = 'block';
        modalImg.src = this.src;
    });
});

// Закрытие модального окна
closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

// Закрытие модального окна при клике вне изображения
lightbox.addEventListener('click', function(e) {
    if (e.target !== modalImg) {
        lightbox.style.display = 'none';
    }
});
