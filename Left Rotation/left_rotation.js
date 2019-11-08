const array = [1, 2, 3, 4, 5]
const d = 4

let rotate = (array, d) => {
    let arr = []
    for (let i = 0; i < array.length; i++) {
        arr.push(array[i])
    }
    for (let j = 1; j <= d; j++) {
        arr.shift(arr.push(arr[0]))
    }
    return arr
}

console.log(rotate(array, d))