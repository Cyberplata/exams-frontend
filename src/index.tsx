let number = 3

if (number > 0) {
    let number = 86
    number++
}

const getNumber = (number: any) => {
    number *= 10
    return number
}

const bigValue= getNumber("number") || number

//Какое значение получит переменная bigValue? // 3