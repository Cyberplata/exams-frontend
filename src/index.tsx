const students = [
    {name: "Bob"},
    {name: "Alex"},
    {name: "Donald"}
]
const filteredStudents = students.filter(s => s.name !== "Kate")
const lengthDiff = students.length - filteredStudents.length
const newValue = (lengthDiff && 70.97) || (52.36 && 69.16)

//Какое значение получит переменная newValue? 69.16