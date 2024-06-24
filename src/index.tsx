const userName = (user = "") => {
    let userName: any = "Daniil"
    userName += user
    return user;
    // console.log(user)
}

const student = userName() || "Lev"
console.log(student) // "Lev"
/*Какое значение получит переменная student? */