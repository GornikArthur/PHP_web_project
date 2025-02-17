const images = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controlls');
let imageIndex = 0;

function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = imageIndex - 1;

            if (index < 0) {
                index = images.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    })
})

// Запускаем автоматическую смену изображений каждые 3 секунды
setInterval(() => {
    let nextIndex = (imageIndex + 1) % images.length; // Рассчитываем индекс следующего изображения
    show(nextIndex); // Показываем следующее изображение
}, 3000); // 3000 миллисекунд = 3 секунды

// Изначально показываем первое изображение
show(imageIndex);
