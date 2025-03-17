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
        let hands_involves = [];
        let pair_count = 0;
        let pairs = [];
        for (let i = 1; i < common.length; i++) {
            if (common[i].value === common[i - 1].value) {
                pair_count++;
                pairs.push(common[i]);
                if (hand[0].areEqual(common[i - 1])) hands_involves.push(hand[0]);
                if (hand[0].areEqual(common[i])) hands_involves.push(hand[0]);
                if (hand[1].areEqual(common[i - 1])) hands_involves.push(hand[1]);
                if (hand[1].areEqual(common[i])) hands_involves.push(hand[1]);
                i++;
            }
        }
        pairs = pairs.sort((a, b) => b.value - a.value);
        if (pair_count < 2) return null;
        if (hands_involves.length == 0) return null;
        if (hands_involves.length == 1) 
            return [pairs[0].value, pairs[1].value, (hand[0].value == hands_involves[0].value) ? hand[1].value : hand[0].value];
        if (hands_involves.length == 2) 
            return [pairs[0].value, pairs[1].value, pairs[1].value];
        return null
    },

    Three_of_a_Kind : (hand, table) => {
        let common = [...hand, ...table];
        common = common.sort((a, b) => a.value - b.value);
        let hands_involves = [];
        let set_card = {};
        for (let i = 2; i < common.length; i++) {
            if (common[i - 2].value == common[i - 1].value && common[i - 1].value == common[i].value) {
                set_card = common[i - 1];

                if (hand[0].areEqual(common[i - 2])) hands_involves.push(hand[0]);
                if (hand[0].areEqual(common[i - 1])) hands_involves.push(hand[0]);
                if (hand[0].areEqual(common[i])) hands_involves.push(hand[0]);

                if (hand[1].areEqual(common[i - 2])) hands_involves.push(hand[1]);
                if (hand[1].areEqual(common[i - 1])) hands_involves.push(hand[1]);
                if (hand[1].areEqual(common[i])) hands_involves.push(hand[1]);

                break;
            }
        }

        if (hands_involves.length === 0) return null;
        if (hands_involves.length === 1) {
            if (hands_involves[0].value === hand[0].value) return [set_card.value, hand[1].value];
            if (hands_involves[0].value === hand[1].value) return [set_card.value, hand[0].value];
        }
        if (hands_involves.length === 2) {
            return [set_card.value, hand[1].value];
        }

        return null;
    },

    Straight : (hand, table) => {
        let common = [...hand, ...table];
        common = common.sort((a, b) => b.value - a.value);
        let straight_top;
        let hand_involved = [];
        for (let i = 4; i < common.length; i++) {
            if (common[i - 3].value === common[i - 4].value - 1 && 
                common[i - 2].value === common[i - 3].value - 1 && 
                common[i - 1].value === common[i - 2].value - 1 && 
                common[i].value === common[i - 1].value - 1
            ) {
                straight_top = common[i - 4];

                for (let j = i - 4; j <= i; j++) {
                    if (hand[0].areEqual(common[j])) hand_involved.push(common[j]);
                    if (hand[1].areEqual(common[j])) hand_involved.push(common[j]);
                }

                if (hand_involved.length === 0) continue;

                break;
            }
        }

        hand_involved = hand_involved.sort((a, b) => b.value - a.value);

        if (hand_involved.length == 0) return null;
        if (hand_involved.length == 1) {
            if (hand_involved[0].value === hand[0].value) return [straight_top.value, hand[0].value, hand[1].value];
            if (hand_involved[0].value === hand[1].value) return [straight_top.value, hand[1].value, hand[0].value];
        }
        if (hand_involved.length == 2) {
            return [straight_top.value, hand_involved[0].value, hand_involved[1].value];
        }

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