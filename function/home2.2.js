/*2. Вывести факториал числа N*/

let n = 5;

function factorial(n) {
    if ((n == 0) || (n == 1)) return 1;

    let sum = 1;
    for (let i = 2; i <= n; i++) {
        sum *=i;
    }
    return sum;
}

console.log(factorial(n));
