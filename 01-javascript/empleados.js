document.addEventListener('DOMContentLoaded', () => {
    const selects = document.querySelectorAll('select');
    
    // Agregar evento a cada select
    selects.forEach(select => {
        select.addEventListener('change', filterCards);
    });

    function filterCards() {
        // Obtener los valores seleccionados
        const selectedTecnologia = document.getElementById('tecnologia').value;
        const selectedUbicacion = document.getElementById('ubicacion').value;
        const selectedContrato = document.getElementById('contrato').value;
        const selectedExperiencia = document.getElementById('experiencia').value;
        
        // Obtener todas las cards
        const cards = document.querySelectorAll('.card-item');
        
        cards.forEach(card => {
            // Obtener los valores de data-atributos
            const tecnologia = card.getAttribute('data-tecnologia');
            const ubicacion = card.getAttribute('data-ubicacion');
            const contrato = card.getAttribute('data-contrato');
            const experiencia = card.getAttribute('data-experiencia');

            // Lógica para determinar si la card debe mostrarse
            const isVisible = 
                (selectedTecnologia === '' || selectedTecnologia === tecnologia) &&
                (selectedUbicacion === '' || selectedUbicacion === ubicacion) &&
                (selectedContrato === '' || selectedContrato === contrato) &&
                (selectedExperiencia === '' || selectedExperiencia === experiencia);

            card.classList.toggle('is-hidden', !isVisible);
        });
    }
});
