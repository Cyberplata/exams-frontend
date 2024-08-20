//@ts-ignore
const value = [0,[1,0]][1][0]
let quantity;

switch (value) {
    case 0:
        quantity = 87
        break;
    case 1:
        quantity = 66
        break;
    default:
        quantity = 6
        break;
}

// Какое значение получит переменная quantity? // 66