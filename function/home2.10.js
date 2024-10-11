/*10. Сумма квадратов чисел от 1 до N*/

let begin = 1;
let end = 2;

function sum(begin, end) {
    let sum = 0;
    for (let i = begin; i <= end; i++) {
        sum = sum + (i ** 2);
    }
    console.log(sum);
}

sum(begin, end);
