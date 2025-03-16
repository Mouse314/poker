import Combinations from "./combinations.js"

const Game = {
    check_combination : (hand, table) => {
        const combs = Object.keys(Combinations);
    
        let _ind, _name, _result;

        combs.reverse().find((comb, ind) => {
            const result = Combinations[comb](hand, table);
            if (result) {
                _ind = combs.length - ind - 1;
                _name = comb;
                _result = result;
                return 1;
            }
        });

        return {ind: _ind, name: _name, result: _result};
    }
}

export default Game;