const student = {
    name: "Artem"
}

const newStudent = student

const myFriend = {
    ...newStudent
}

const newUser = {
    name: "Masha"
}

const myFriendName =  student.name !== myFriend.name
    ? newUser.name
    : student.name

console.log(myFriendName) //"Artem"
/*Какое значение получит переменная "myFriendName"?*/