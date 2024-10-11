/*7. Обратное число*/

let n = 2412;

function reverse(n) {
    let length = n.toString().length;
    n = n.toString();
    let result = '';

    for (let i = length; i > 0; i--) {
        result += n.charAt(i - 1);
    }
    console.log(result);
}

reverse(n);