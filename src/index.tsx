const numbers = [68, 67, 72, 89]
const mapFunction = (el: number, index: number) => el * index
const mappedArray = numbers.map(mapFunction)
console.log(mappedArray)

const myNumber = mappedArray[0] && mappedArray[mappedArray.length - 1]
const bigCount = 71 + myNumber

//Какое значение получит переменная bigCount?// 71