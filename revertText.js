let rawStr = "Hello CY VietNam";

function revertText(str){
    return str.split('').reverse().join('');
}

let revert = revertText(rawStr);

console.log("raw string:", rawStr);
console.log("reverted string:", revert);