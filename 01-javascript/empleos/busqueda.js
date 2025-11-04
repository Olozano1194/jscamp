const empleos = async () => {
    const containerCard = document.querySelector('.container-card')
    try {
        const response = await fetch('/01-javascript/data.json');

        if (!response.ok) {
            throw new Error(`Error al cargar el Json: ${response.status}`);
        }
        const data = await response.json();

        data.forEach(card => {
            const article = document.createElement('article');
            article.className = 'card-item';

            article.dataset.modalidad = card.data.modalidad;
            article.dataset.nivel = card.data.nivel;
            article.dataset.technology = JSON.stringify(card.data.technology);

            article.innerHTML = `
                <div class="main-card-div-article-container-text">
                    <h3>${card.titulo}</h3>
                    <span>${card.empresa} | ${card.ubicacion}</span>
                    <p>${card.descripcion}</p>
                </div>                
                <div class="main-card-div-btn">
                    <button class="btn-apply">Aplicar</button>
                </div>
                `            
            containerCard.appendChild(article);

            const hr = document.createElement('hr');
            containerCard.appendChild(hr);
        });        
    } catch (error) {
        console.error('Ha ocurrido un error', error);
    }  
};

empleos();