// chiamata axios 
axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp) => {
    let data = resp.data;
    showCards(data);
})

// funzione per la creazione della card
const createCard = (element) => {
    let card = `<div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4 position-relative">
    <div class="card" style="width: 18rem;">
            <img src="${element.url}" class="card-img-top" alt="${element.title}">
        <div class="card-body pt-3">
        <p class="text-secondary">${element.date}</p>
        <h3 class="card-title">${element.title}</h5>
        </div>
        <img src="./img/pin.svg" alt="" class="pin">
    </div>
</div>`;
    return card;
}

// creo la funzione per visualizzare le card
const showCards = (data) => {
    let cards = '';
    data.forEach((items) => {
        cards += createCard(items);
    });
    document.getElementById('cards').innerHTML = cards;

}

// richiamo gli elementi dal DOM
let cards = document.getElementById('cards');
let overlay = document.getElementById('overlay');
let buttonClose = document.getElementById('button-close');

// aggiungo l'evento al click della card che fa apparire l'overlay
cards.addEventListener('click', (e) => {
    overlay.classList.remove('d-none');
});

// aggiungo l'evento del bottone dell'overlay, che una volta cliccato chiude l'overlay
buttonClose.addEventListener('click', (e) => {
    overlay.classList.add('d-none');
});