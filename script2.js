// Запускаем анимацию при прокрутке
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".slide-in, .fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = "running";
            }
        });
    });

    elements.forEach(el => {
        observer.observe(el);
    });
});