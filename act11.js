function counter(n){
    let current = n;    //define var to store current value

    return function() {
        return current++;     //return current value and increment it
    };
}
function generateArray(n, array) {
    const count = counter(n);
    return array.map(() => count());
}

const input1 = 10;
const array1 = ["arr", "arr", "arr", "arr", "arr"];
console.log(generateArray(input1, array1));

const input2 = -2;
const array2 = ["arr", "arr", "arr", "arr", "arr"];
console.log(generateArray(input2, array2));