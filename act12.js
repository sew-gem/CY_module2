function findMedian(num1, num2) {
    // spread operator `...` -> merge into new arr & sort ascending order
    const merged = [...num1, ...num2].sort((a, b) => a - b);
    
    const length = merged.length;
    const middle = Math.floor(length / 2); //Math.floor -> round down nearest int -> so we get the middle index

    // check arr is odd/even
    if (length % 2 === 0) {
        // even: median = average of 2 middle element
        return (merged[middle - 1] + merged[middle]) / 2;
    } else {
        // odd: mediant = middle element
        return merged[middle];
    }
}

const a = [1, 3];
const b = [2];
console.log(findMedian(a, b)); 

const c = [1, 2];
const d = [3, 4];
console.log(findMedian(c, d));