import deck from './modules/cards.js'
import Combinations from './modules/combinations.js'
import Game from './modules/game.js'

console.log(deck.Cards52);

const hand = [
    { value: 2, suit: 'clubs', name: '2 of clubs' }, 
    { value: 11, suit: 'spades', name: '4 of spades' }, 
];

const table = [
    { value: 6, suit: 'clubs', name: '6 of clubs' },
    { value: 6, suit: 'diamonds', name: '6 of clubs' },
    { value: 14, suit: 'spades', name: '2 of spades' },
    { value: 11, suit: 'diamonds', name: 'Jack of diamonds' },
    { value: 14, suit: 'diamonds', name: 'Ace of diamonds' }
];

console.log(Game.check_combination(hand, table));