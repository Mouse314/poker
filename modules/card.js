import naming from './naming.js'

class Card {
    constructor (value, suit) {
        this.value = value;
        this.suit = suit;
        this.name = `${value > 10 ? naming[value] : value} of ${suit}`
    }

    areEqual (card) {
        return this.value === card.value && this.suit === card.suit;
    }

    getName () {
        return this.name;
    }
}

export default Card;