const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 10, 11]
];

function transformMatrix(matrix) {
    const newMatrix = [];

    for (let col = 0; col < matrix[0].length; col++) {
        const newRow = [];
        for (let row = matrix.length - 1; row >= 0; row--) {
            newRow.push(matrix[row][col]);
        }
        newMatrix.push(newRow);
    }
    return newMatrix;
}

const transformedMatrix = transformMatrix(matrix);
console.log(transformedMatrix);