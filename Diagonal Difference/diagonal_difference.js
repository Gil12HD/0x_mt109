const matrix = [[1,2,3], [4,5,6], [7,8,9]]

let diference = (matrix) => {
    const length = matrix.length
    let d1 = 0
    let d2 = 0

    for (let i = 0; i <= length-1; i++) {
        d1 += matrix[i][i]
        d2 += matrix[i].reverse()[i]
    }
    return Math.abs(d1 - d2)
}

console.log(diference(matrix))