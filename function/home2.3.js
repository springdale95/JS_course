/*3. Вывести четные и нечетные числа от 1 до 100*/

let begin = 1;
let end = 100;

function evenOrOddNumber(begin, end) {
    for (let i = begin; i <= end; i++) {
        if (i % 2 !== 0) console.log(`Число ${i} - нечетное`);
        else console.log(`Число ${i} - четное`);
    }
}

evenOrOddNumber(begin, end);