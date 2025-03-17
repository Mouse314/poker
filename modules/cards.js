import { suits } from "./suits.js";
import Card from "./card.js";

let Cards36 = [];
let Cards52 = [];

suits.forEach((suit) => {
    for(let i = 6; i <= 14; i++) {
        Cards36.push(new Card(i, suit));
    }
    for(let i = 2; i <= 14; i++) {
        Cards52.push(new Card(i, suit));
    }
});

export default {Cards36, Cards52};