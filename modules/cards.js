import { suits } from "./suits.js";
import { naming } from "./naming.js";

let Cards36 = [];
let Cards52 = [];

suits.forEach((suit) => {
    for(let i = 6; i <= 14; i++) {
        Cards36.push({
            value: i,
            suit: suit,
            name: `${i > 10 ? naming[i] : i} of ${suit}`
        });
    }
    for(let i = 2; i <= 14; i++) {
        Cards52.push({
            value: i,
            suit: suit,
            name: `${i > 10 ? naming[i] : i} of ${suit}`
        });
    }
});

export default {Cards36, Cards52};