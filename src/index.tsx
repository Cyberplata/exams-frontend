const customer = {
    name: "Sergey",
    age: 53,
    friends: ["Vanya", "Natali", "Liza"]
}

const newFriend = "Vladimir"

const friends = [...customer.friends, newFriend] // ...customer.friends - XXX

const updatedCustomer = {...customer, friends: friends}

/*Выполнено преобразование объекта: добавлен новый друг в список.
Что надо указать вместо XXX, что бы выполнить это действие иммутабельно?*/