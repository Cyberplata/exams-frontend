const student = {
    name: "Maxim",
    age: 7
}

const copyStudent = student

student.age = 42
console.log(copyStudent.age) // 42
/*Чему равно значение copyStudent.age после выполнения этого кода?*/