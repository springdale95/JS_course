/*4. Вывести проверку на простое число*/

let n = 6;

function isAPrimeNumber(n) {
    let count = 1;
    for (let i = 2; i <= n; i++) {
        if (n % i == 0) count++;
    }

    if (count == 2) console.log(`Число ${n} - простое`);
    else console.log(`Число ${n} - составное`);
}

isAPrimeNumber(n);