const name = "Elizaveta"

const student = {
    [name]: name
}

const number = student["name"]
    ? 35.73
    : 53.72

/*Какое значение получит переменная number?*/ //53.72, так как student["name"] = undefined