import deck from './modules/cards.js'
import Combinations from './modules/combinations.js'
import Game from './modules/game.js'
import Card from './modules/card.js';

console.log(deck.Cards52);

const hand = [
    new Card(2, 'spades'),
    new Card(5, 'diamonds'),
];

const table = [
    new Card(10, 'clubs'),
    new Card(7, 'clubs'),
    new Card(8, 'clubs'),
    new Card(9, 'diamonds'),
    new Card(11, 'diamonds'),
];

console.log(Game.check_combination(hand, table));

const a = deck.Cards36[10];
const b = deck.Cards36[10];

console.log(a.areEqual(b));