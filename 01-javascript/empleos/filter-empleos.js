document.addEventListener('DOMContentLoaded', () => {
    const selects = document.querySelectorAll('select');

    const filterCards = () => {
        // Obtener los valores seleccionados
        const selectedTecnologia = document.getElementById('technology').value;
        // const selectedUbicacion = document.getElementById('ubicacion').value;
        const selectedModalidad = document.getElementById('modalidad').value;
        const selectedExperiencia = document.getElementById('nivel').value;
        
        // Obtener todas las cards
        const cards = document.querySelectorAll('.card-item');
          
        cards.forEach(card => {
            // Recuperamos tecnologías y convertirlos en array, si es necesario
            let tecnologiaList = []

            try {
                const parsed = JSON.parse(card.dataset.technology);
                tecnologiaList = Array.isArray(parsed) ? parsed : [parsed];
            } catch (error) {
                tecnologiaList = card.dataset.technology.split(',');                
            }

            // Normalizamos a minuscula
            tecnologiaList = tecnologiaList.map(t => t.toLowerCase());

            // Obtener los valores de data-atributos
            // const tecnologia = card.getAttribute('data-technology');
            // const ubicacion = card.getAttribute('data-ubicacion');
            const modalidad = card.getAttribute('data-modalidad');
            const experiencia = card.getAttribute('data-nivel');

            // Lógica para determinar si la card debe mostrarse
            const isVisible = 
                (selectedTecnologia === '' || tecnologiaList.includes(selectedTecnologia)) &&
                // (selectedUbicacion === '' || selectedUbicacion === ubicacion) &&
                (selectedModalidad === '' || selectedModalidad === modalidad) &&
                (selectedExperiencia === '' || selectedExperiencia === experiencia);

            card.classList.toggle('is-hidden', !isVisible);
        });
    }
    
    // Agregar evento a cada select
    selects.forEach(select => {
        select.addEventListener('change', filterCards);
    });    
});
