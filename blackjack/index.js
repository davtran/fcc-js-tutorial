let cardsEl = document.querySelector('#cards-el');
let sumEl = document.querySelector('#sum-el');
let messageEl = document.querySelector('#message-el');
let playerEl = document.querySelector('#player-el');

const player = {
    name: 'Thug',
    chips: 150,
    sayHello: function() {
        console.log('Heisann!');
    }
}

let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = '';

messageEl.textContent = 'How about it? Want to play a round?'
playerEl.textContent = `${player.name}: $${player.chips}`;

function getRandomCard() {
    let trueValue = Math.floor(Math.random() * 13) + 1;
    if (trueValue === 1) {
        return 11;
    }
    if (trueValue > 10) {
        return 10;
    }
    return trueValue;
}

function startGame() {
    player.sayHello();
    isAlive = true;
    cards.push(getRandomCard());
    cards.push(getRandomCard());
    cards.forEach(card => sum += card);
    renderGame();
}

function renderGame() {
    cardsEl.textContent = 'Cards: ';
    cards.forEach(card => {
        cardsEl.textContent += ` ${card}`;
    });
    sumEl.textContent = `Sum: ${sum}`;
    if (sum <= 20) {
        message = 'Draw another card?';
        messageEl.textContent = message;
    } else if (sum === 21) {
        message = 'Yoshi! Blackjack!';
        messageEl.textContent = message;
        hasBlackjack = true;
    } else {
        message = 'Bust! Dame da ne...';
        messageEl.textContent = message;
        isAlive = false;
    }
}

function newCard() {
    if (isAlive && !hasBlackjack) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}
