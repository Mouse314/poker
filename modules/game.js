import Combinations from "./combinations.js"
import Card from "./card.js";

function getCombinations(arr, k) {
    const result = [];
  
    // Вспомогательная рекурсивная функция
    function combine(start, current) {
      if (current.length === k) {
        result.push([...current]); // Добавляем комбинацию в результат
        return;
      }
  
      for (let i = start; i < arr.length; i++) {
        current.push(arr[i]); // Добавляем текущий элемент
        combine(i + 1, current); // Рекурсивно вызываем для следующего элемента
        current.pop(); // Удаляем последний элемент для backtracking
      }
    }
  
    combine(0, []); // Начинаем с индекса 0 и пустого массива
    return result;
}

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
    },

    combine_all_sets : (cards) => {
        return getCombinations(cards, 7);
    }


}

export default Game;