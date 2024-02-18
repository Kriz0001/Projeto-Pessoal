const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const slider = document.querySelector('.slider');

// Array com os caminhos das imagens
const images = [
    'IMG/IMAGEM1.jpeg',
    'IMG/IMAGEM2.jpeg',
    'IMG/IMAGEM3.jpeg',
    'IMG/IMAGEM4.jpeg',
    'IMG/IMAGEM5.jpeg',
    // Adicione os caminhos das outras imagens conforme necessário
];

let currentSlide = 0;

// Função para exibir a imagem atual
function showSlide() {
    slider.innerHTML = `<img src="${images[currentSlide]}" alt="Slide ${currentSlide + 1}">`;
}

// Função para avançar para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide();
}

// Função para retroceder para o slide anterior
function previousSlide() {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    showSlide();
}

// Exibir a primeira imagem ao carregar a página
showSlide();

// Adicionar os event listeners para os botões left e right
leftArrow.addEventListener('click', previousSlide);
rightArrow.addEventListener('click', nextSlide);

// Função para calcular o tempo restante
function countdown() {
    const startDate = new Date('2024-02-18').getTime();
    const endDate = new Date('2024-02-22').getTime();
    const currentDate = new Date().getTime();
    const diffInMilliSeconds = Math.abs(endDate - currentDate);

    const days = Math.floor(diffInMilliSeconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffInMilliSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffInMilliSeconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffInMilliSeconds % (1000 * 60)) / 1000);

    document.getElementById("countdown-days").innerHTML = `${days} Dias, ${hours} Horas, ${minutes} Minutos e ${seconds} Segundos`;
}

// Chamar a função para atualizar o contador de dias
countdown();

// Atualizar o contador a cada segundo
setInterval(countdown, 1000);
