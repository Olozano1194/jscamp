const containerCard = document.querySelector('.container-card');

containerCard.addEventListener('click', (e) => {
    const element = e.target;

    if (element.classList.contains('btn-apply')) {
        element.textContent = '¡Aplicado!'
        element.classList.add('is-applied')
        element.disabled = true
    }
})