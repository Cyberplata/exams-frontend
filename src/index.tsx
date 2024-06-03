const user = {
    name: "Anastasiya",
    age: 88
}

const copyUser = {...user}

user.name = "Igor"

/*Чему равно copyUser.name после выполнения этого кода?*/
console.log(copyUser.name) // "Anastasiya"