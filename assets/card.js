let cardContainer = document.querySelector('.card-content');
let cardFullscreen = document.querySelector('.fullscreen');

let card = [
    {
        id: 1,
        nome: 'LandPage',
        subtitulo: 'Redirecionador Simples',
        info: 'Esta é uma Página de Destino criada para um amigo aprimorar seu trabalho como personal trainer. Ela reúne todos os seus perfis em redes sociais e produtos em uma única plataforma, facilitando o acesso para seus clientes..',
        image: ['D-ribas-personal.jpg'],
        repositorio: 'https://github.com/Kriegerl1/drrPersonalSite',
        tecnologias: ['logo-css3','logo-html5','logo-javascript'],
        deploy: 'https://drrpersonal.netlify.app/',
        status: 'enable'
    },{
        id: 2,
        nome: 'Card projeto 2',
        subtitulo: 'Subtitulo do card 2',
        info: 'Card projeto 2 com Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur amet quis dolorem blanditiis voluptates maiores quo placeat alias, omnis atque nihil delectus provident autem aut accusamus. Delectus voluptate doloremque aliquid facere. Tempore modi suscipit laborum soluta quis repellendus magnam dolor illum nisi at aperiam itaque minima nihil libero, repellat adipisci minus nulla recusandae explicabo id corporis vero tempora, expedita molestias. Fuga natus necessitatibus cupiditate incidunt, dolorum nemo nobis earum!',
        image: ['image2.jpg'],
        repositorio: 'github.com/Kriegerl1',
        tecnologias: ['heart','logo-css3','logo-html5','game-controller',],
        deploy: '',
        status: 'enable'
    },{
        id: 3,
        nome: 'Card projeto 3',
        subtitulo: 'Subtitulo do card 3',
        info: 'Card projeto 3 com Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur amet quis dolorem blanditiis voluptates maiores quo placeat alias, omnis atque nihil delectus provident autem aut accusamus. Delectus voluptate doloremque aliquid facere. Tempore modi suscipit laborum soluta quis repellendus magnam dolor illum nisi at aperiam itaque minima nihil libero, repellat adipisci minus nulla recusandae explicabo id corporis vero tempora, expedita molestias. Fuga natus necessitatibus cupiditate incidunt, dolorum nemo nobis earum!',
        image: ['image3.jpg'],
        repositorio: 'github.com/Kriegerl1',
        tecnologias: ['heart','logo-css3','logo-html5','game-controller'],
        deploy: '',
        status: 'enable'
    },{
        id: 4,
        nome: 'Card projeto 4',
        subtitulo: 'Subtitulo do card 4',
        info: 'Card projeto 3 com Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur amet quis dolorem blanditiis voluptates maiores quo placeat alias, omnis atque nihil delectus provident autem aut accusamus. Delectus voluptate doloremque aliquid facere. Tempore modi suscipit laborum soluta quis repellendus magnam dolor illum nisi at aperiam itaque minima nihil libero, repellat adipisci minus nulla recusandae explicabo id corporis vero tempora, expedita molestias. Fuga natus necessitatibus cupiditate incidunt, dolorum nemo nobis earum!',
        image: ['image4.jpg'],
        repositorio: 'github.com/Kriegerl1',
        tecnologias: ['heart','logo-css3','logo-html5','game-controller'],
        deploy: '',
        status: 'disable'
    },{
        id: 5,
        nome: 'Card projeto 5',
        subtitulo: 'Subtitulo do card 5',
        info: 'Card projeto 3 com Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur amet quis dolorem blanditiis voluptates maiores quo placeat alias, omnis atque nihil delectus provident autem aut accusamus. Delectus voluptate doloremque aliquid facere. Tempore modi suscipit laborum soluta quis repellendus magnam dolor illum nisi at aperiam itaque minima nihil libero, repellat adipisci minus nulla recusandae explicabo id corporis vero tempora, expedita molestias. Fuga natus necessitatibus cupiditate incidunt, dolorum nemo nobis earum!',
        image: ['image2.jpg'],
        repositorio: 'github.com/Kriegerl1',
        tecnologias: ['heart','logo-css3','logo-html5','game-controller'],
        deploy: '',
        status: 'disable'
    },{
        id: 6,
        nome: 'Card projeto 6',
        subtitulo: 'Subtitulo do card 6',
        info: 'Card projeto 3 com Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur amet quis dolorem blanditiis voluptates maiores quo placeat alias, omnis atque nihil delectus provident autem aut accusamus. Delectus voluptate doloremque aliquid facere. Tempore modi suscipit laborum soluta quis repellendus magnam dolor illum nisi at aperiam itaque minima nihil libero, repellat adipisci minus nulla recusandae explicabo id corporis vero tempora, expedita molestias. Fuga natus necessitatibus cupiditate incidunt, dolorum nemo nobis earum!',
        image: ['image6.jpg'],
        repositorio: 'github.com/Kriegerl1',
        tecnologias: ['heart','logo-css3','logo-html5','game-controller'],
        deploy: '',
        status: 'disable'
    }
];


function openFullscreenCard(value) {
    let newCardFullscreen = document.createElement('div');
    newCardFullscreen.classList.add('square-card');

    let tech = '';
    for (let i = 0; i < value.tecnologias.length; i++) {
        let arrayDeTechs = value.tecnologias[i];
        tech += `<ion-icon name="${arrayDeTechs}"></ion-icon>`;
    }
    let images = '';
    for (let i = 0; i < value.image.length; i++) {
        let arrayDeImages = value.image[i];
        images += `<img src="../assets/media/images/${arrayDeImages}" alt="imagem dinâmica">
        `;
    }

    newCardFullscreen.innerHTML = `
        <div class="close" onclick="closeBtn(), carrossel()">
            <div class="bar1"></div>
            <div class="bar2"></div>
        </div>
        <div class="image-card">
            ${images}
        </div>
        <div class="info-card">
        <div class="tittle">
            <h3>${value.nome}</h3>
            <h4>${value.subtitulo}</h4>
        </div>
            <div class="info-project">
                <p>${value.info}</p>
            </div>
            <div class="links-tech">
            <div class="content-btn-card">
            <a href="${value.repositorio}" target="_blank"><button class="cardBtn"> Repositótio</button></a>
            <a href="${value.deploy}" target="_blank"><button class="cardBtn"> Deploy</button></a>
            </div>
            <div class="tech">
            ${tech}
        </div></div>
        </div>
    `;

    cardFullscreen.innerHTML = ''; // Limpa o conteúdo anterior
    cardFullscreen.appendChild(newCardFullscreen);
}

function initCards() {
    card.forEach((value) => {
        let newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.setAttribute('id',`${value.status}`)

        let tech = '';
        for (let i = 0; i < value.tecnologias.length; i++) {
            let arrayDeTechs = value.tecnologias[i];
            tech += `<ion-icon style="--i:${i}" name="${arrayDeTechs}"></ion-icon>`;
        }

        newCard.innerHTML = `
        <div class="image">
            <img src="../assets/media/images/${value.image[0]}" alt="poster">
        </div>
        <div class="content">
            <div class="info">
                <h2>${value.nome}<br><span id="ste-ia">${value.subtitulo}</span></h2>
                <div class="tech">
                    ${tech}
                </div>
            </div>
        </div>
        `;
        // Adicione um ouvinte de clique ao novo card
        newCard.addEventListener('click', () => {
            openFullscreenCard(value);
            closeBtn();
        });
        
        cardContainer.appendChild(newCard);
    });
}

initCards();