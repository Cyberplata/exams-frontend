const customer = {
    name: "William",
    age: 44,
    friends: ["Igor", "Anastasiya", "Egor"]
}

const updatedCustomer = {...customer}

updatedCustomer.friends.push("Egor")

console.log(customer.friends[3])

/*Какое значение будет выведено в консоль?*/


