document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');

    const filterCards = () => {
        const searchtext = searchInput.value.trim().toLowerCase();

        const cards = document.querySelectorAll('.card-item');

        cards.forEach(card => {
            const titulo = card.querySelector('h3').textContent.toLowerCase();

            const matchesTitulo = titulo.includes(searchtext);

            const isVisible = matchesTitulo;

            card.classList.toggle('is-hidden', !isVisible);
        });
    };   
    // Agregar evento a cada select
    searchInput.addEventListener('input', filterCards);    
});