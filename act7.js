// recursive to convert nested arr to one dimension arr
const nestedArray = [1, [2, [3, [4, 5, 6, 7, 8, 9]]]];

function flattenArray(arr) {
    return arr.flat(Infinity);
 }

const array = flattenArray(nestedArray);
console.log(array);
