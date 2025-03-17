const Combinations = {
    High_Card : (hand, table) => {
        const max_elem = (hand[0].value > hand[1].value) ? hand[0].value : hand[1].value;
        const kicker = (hand[0].value === max_elem) ? hand[1].value : hand[0].value;
        return [max_elem, kicker];
    },

    Pair : (hand, table) => {
        if (hand[0].value === hand[1].value) return [hand[0].value, hand[0].value];
        table.forEach(card => {
            if (card.value === hand[0].value) return [hand[0].value, hand[1].value];
            if (card.value === hand[1].value) return [hand[1].value, hand[0].value];
        });
        return null;
    },

    Two_Pair : (hand, table) => {
        let common = [...hand, ...table];
        common = common.sort((a, b) => a.value - b.value);
        let pair_count = 0;
        let pairs = [];
        for (let i = 1; i < common.length; i++) {
            if (common[i].value === common[i - 1].value) {
                pair_count++;
                pairs.push(common[i]);
                i++;
            }
        }

        if (pairs.length < 2) return null;

        pairs = pairs.sort((a, b) => b.value - a.value);
        hand = hand.sort((a, b) => a.value - b.value);
        
        return [pairs[0].value, pairs[1].value, hand[1].value];
    },

    Three_of_a_Kind : (hand, table) => {
        let common = [...hand, ...table];
        common = common.sort((a, b) => a.value - b.value);
        let set_card = null;
        for (let i = 2; i < common.length; i++) {
            if (common[i - 2].value == common[i - 1].value && common[i - 1].value == common[i].value) {
                set_card = common[i - 1];

                break;
            }
        }

        if (set_card === null) return null;

        hand = hand.sort((a, b) => a.value - b.value);

        return [set_card.value, hand[1].value, hand[0].value];
    },

    Straight : (hand, table) => {
        let common = [...hand, ...table];
        common = common.sort((a, b) => b.value - a.value);
        let straight_top;
        for (let i = 4; i < common.length; i++) {
            if (common[i - 3].value === common[i - 4].value - 1 && 
                common[i - 2].value === common[i - 3].value - 1 && 
                common[i - 1].value === common[i - 2].value - 1 && 
                common[i].value === common[i - 1].value - 1
            ) {
                straight_top = common[i - 4];

                break;
            }
        }

        return straight_top.value;
    },

    Flush : (hand, table) => {
        let common = [...hand, ...table];
        common = common.sort((a, b) => a.suit.localeCompare(b.suit) || a.value - b.value);

        let flush_cards = [];

        for (let i = 4; i < common.length; i++) {
            if (common[i - 3].suit === common[i - 4].suit && 
                common[i - 2].suit === common[i - 3].suit && 
                common[i - 1].suit === common[i - 2].suit && 
                common[i].suit === common[i - 1].suit
            ) {
                flush_cards = [common[i - 4], common[i - 3], common[i - 2], common[i - 1], common[i]].reverse();

                break;
            }
        }
        if (flush_cards.length === 0) return null;
        return flush_cards.map(card => card.value);
    },

    Full_House : (hand, table) => {
        let common = [...hand, ...table];
        common = common.sort((a, b) => b.value - a.value);

        let pair = null, set = null;

        let set_start = -1;

        for (let i = 2; i < common.length; i++) {
            if (common[i - 2].value === common[i - 1].value && common[i - 1].value === common[i].value) {
                set = common[i - 2];
                set_start = i - 2;
                break;
            }
        }

        if (set_start == -1) return null;
        else common.splice(set_start, 3);

        for (let i = 1; i < common.length; i++) {
            if (common[i - 1].value === common[i].value) {
                pair = common[i - 1];
                break;
            }
        }

        if (pair === null) return null;
        else return [set.value, pair.value];
    },

    Four_of_a_Kind : (hand, table) => {
        let common = [...hand, ...table];
        common = common.sort((a, b) => b.value - a.value);

        let kare_start = -1;
        let kare;

        for (let i = 3; i < common.length; i++) {
            if (common[i - 3].value === common[i - 2].value &&
                common[i - 2].value === common[i - 1].value &&
                common[i - 1].value === common[i - 0].value
            ) {
                kare = common[i - 3];
                kare_start = i - 3;
            }
        }

        if (kare_start === -1) return null;
        else {
            common.splice(kare_start, 4);
            return [kare.value, common[0].value];
        }
    },

    Straight_Flush : (hand, table) => {
        let common = [...hand, ...table];
        common = common.sort((a, b) => b.value - a.value);
        let straight_flush_top = null;
        for (let i = 4; i < common.length; i++) {
            if ((common[i - 3].value === common[i - 4].value - 1 && 
                common[i - 2].value === common[i - 3].value - 1 && 
                common[i - 1].value === common[i - 2].value - 1 && 
                common[i].value === common[i - 1].value - 1) && 
                (common[i - 3].suit === common[i - 4].suit && 
                common[i - 2].suit === common[i - 3].suit && 
                common[i - 1].suit === common[i - 2].suit && 
                common[i].suit === common[i - 1].suit)
            ) {
                straight_flush_top = common[i - 4];

                break;
            }
        }

        if (straight_flush_top === null) return null;
        return straight_flush_top.value;
    },

    Royal_Flush : (hand, table) => {
        
        let common = [...hand, ...table];
        common = common.sort((a, b) => b.value - a.value);
        let royal_flush_top = null;
        for (let i = 4; i < common.length; i++) {
            if ((common[i - 3].value === common[i - 4].value - 1 && 
                common[i - 2].value === common[i - 3].value - 1 && 
                common[i - 1].value === common[i - 2].value - 1 && 
                common[i].value === common[i - 1].value - 1) && 
                (common[i - 3].suit === common[i - 4].suit && 
                common[i - 2].suit === common[i - 3].suit && 
                common[i - 1].suit === common[i - 2].suit && 
                common[i].suit === common[i - 1].suit) &&
                (common[i - 3].value === 14)
            ) {
                royal_flush_top = common[i - 4];

                break;
            }
        }

        if (royal_flush_top === null) return null;
        return royal_flush_top.value;
    }
}

export default Combinations;