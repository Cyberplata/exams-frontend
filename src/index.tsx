const customer = {
    name: "Maria",
    age: 78,
    friends: ["Rita", "Natali", "Konstantin"]
}

const updatedCustomer = {
    ...customer,
    friends: customer.friends
}

console.log(customer.friends === updatedCustomer.friends) //true

/*Какое значение будет выведено в консоль?*/