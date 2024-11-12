const value = 32

const getValue = (value: any) => {
    value += 49
    return value
}

const myResult= getValue("") || value

//Какое значение получит переменная myResult? "49"