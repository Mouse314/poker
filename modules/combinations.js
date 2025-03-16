const Combinations = {
    High_Card : (hand, table) => {
        const max_elem = (hand[0].value > hand[1].value) ? hand[0].value : hand[1].value;
        const kicker = (hand[0].value === max_elem) ? hand[1].value : hand[0].value;
        return {main: max_elem, kicker: kicker};
    },

    Pair : (hand, table) => {
        if (hand[0].value === hand[1].value) return {main: hand[0].value, kicker: hand[0].value};
        table.forEach(card => {
            if (card.value === hand[0].value) return {main: hand[0].value, kicker: hand[1].value};
            if (card.value === hand[1].value) return {main: hand[1].value, kicker: hand[0].value};
        });
        return null;
    },

    Two_Pair : (hand, table) => {
        let common = [...hand, ...table];
        common = common.sort((a, b) => a.value - b.value);
        let hands_involves = [];
        let pair_count = 0;
        let pairs = [];
        for (let i = 1; i < common.length; i++) {
            if (common[i].value === common[i - 1].value) {
                pair_count++;
                pairs.push(common[i]);
                if (hand[0].suit === common[i - 1].suit && hand[0].value === common[i - 1].value) hands_involves.push(hand[0]);
                if (hand[0].suit === common[i].suit && hand[0].value === common[i].value) hands_involves.push(hand[0]);
                if (hand[1].suit === common[i - 1].suit && hand[1].value === common[i - 1].value) hands_involves.push(hand[1]);
                if (hand[1].suit === common[i].suit && hand[1].value === common[i].value) hands_involves.push(hand[1]);
                i++;
            }
        }
        pairs = pairs.sort((a, b) => b.value - a.value);
        if (pair_count < 2) return null;
        if (hands_involves.length == 0) return null;
        if (hands_involves.length == 1) 
            return {main: pairs[0].value, second: pairs[1].value, kicker: (hand[0].value == hands_involves[0].value) ? hand[1].value : hand[0].value};
        if (hands_involves.length == 2) 
            return {main: pairs[0].value, second: pairs[1].value, kicker: pairs[1].value};
        return null
    },

    Three_of_a_Kind : (hand, table) => {
        
        return null;
    },

    Straight : (hand, table) => {
        
        return null;
    },

    Flush : (hand, table) => {
        
        return null;
    },

    Full_House : (hand, table) => {
        
        return null;
    },

    Four_of_a_Kind : (hand, table) => {
        
        return null;
    },

    Straight_Flush : (hand, table) => {
        
        return null;
    },

    Royal_Flush : (hand, table) => {
        
        return null;
    }
}

export default Combinations;