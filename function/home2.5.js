/*5. Вывести таблицу умножения для числа N*/

let n = 50;

function multiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} умножить на ${i} равно ${n * i}`);
    }
}

multiplicationTable(n);
