document.addEventListener("DOMContentLoaded", function () {
    // Verifica se os elementos existem antes de adicionar eventos
    const loginForm = document.getElementById("login-form");
    const loginScreen = document.getElementById("login-screen");
    const content = document.getElementById("content");

    if (loginForm && loginScreen && content) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            loginScreen.style.display = "none";
            content.style.display = "block"; // Exibe o conteúdo do site após o login falso
        });
    }

    // Timer
    const startDate = new Date("2025-02-16T16:50:00");

    function updateTimer() {
        const now = new Date();
        const diff = now - startDate;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        const timer = document.getElementById("timer");
        if (timer) {
            timer.innerHTML = `${years} anos, ${months} meses, ${days} dias, ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    setInterval(updateTimer, 1000);

    // Carrossel de Fotos
    const images = document.querySelectorAll(".carousel img");
    let current = 0;

    function showNextImage() {
        if (images.length > 0) {
            images[current].classList.remove("active");
            current = (current + 1) % images.length;
            images[current].classList.add("active");
        }
    }

    setInterval(showNextImage, 3000);
});
