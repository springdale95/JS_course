/*9. Проверка палиндрома для числа N*/

let n = 122221;
let centeri = 0;
let centerj = 0;
let length = n.toString().length;

function haveCenter(n) {  //Проверяем кол-во цифр в числе

    if (length % 2 !== 0) {             //Если количество цифр нечетное, циклы по i и j будут идти до одного числа
        centeri = centerj = Math.round(length / 2);
    } else {                            //Если количество цифр четное, циклы по i и j будут идти до разных чисел
        centeri = length / 2;
        centerj = (length / 2) + 1;
    }
}

function isPalindrom(n) {               //Проверяем число на полиндром
    haveCenter(n);                      //Вызываем проверку на кол-во чисел
    let str = n.toString();
    let count = 0;                      //Счетчик для совпавших значений

    for (let i = 0; i < centeri; i++) {                               //Цикл для чисел до середины числа n
        for (let j = length - 1; j >= centerj - 1; j--) {             //Цикл для чисел после середины числа n
            if ((i + j) == (length - 1)) {                            //Ограничение цикла. первое число сравнивается с последним, второе с предпоследним, и. т. д.
                if ((str.charAt(i) == str.charAt(j))) count++;        //Если символы совпали, к счетчику прибавляем 1
            }
        }
    }
    if (count == Math.round(length / 2)) console.log(`Число ${n} является палиндромом`);     //Если совпавших символов больше половины от длины числа
    else console.log(`Число ${n} не является палиндромом`);                                  //Если совпавших символов меньше половины от длины числа
}

isPalindrom(n);
