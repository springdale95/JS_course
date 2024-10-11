/* 1. Вывести сумму чисел от 1 до N*/

let n = 100;

function sum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sum(n));