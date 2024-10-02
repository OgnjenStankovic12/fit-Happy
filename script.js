// Opcionalno, možete dodati funkcionalnost za dropdown meni
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle('show');
    });
});

// Ako želite zatvoriti meni kada kliknete van
window.onclick = function(event) {
    if (!event.target.matches('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('show');
        });
    }
};
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Opcionalno, možete dodati funkcionalnost za dropdown meni
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle('show');
    });
});

// Ako želite zatvoriti meni kada kliknete van
window.onclick = function(event) {
    if (!event.target.matches('.dropdown') && !event.target.matches('.menu-toggle')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('show');
        });
    }
};
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 3000);
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img'); // Selektuje sve <img> tagove

    images.forEach(img => {
        img.setAttribute('loading', 'lazy'); // Dodaje lazy loading atribut
    });
});
// Funkcija koja dodaje klasu 'visible' na sve slike sa klasom 'fade-in'
function fadeInImages() {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
        img.classList.add('visible');
    });
}

// Poziv funkcije nakon što se sadržaj stranice učita
window.addEventListener('load', fadeInImages);
