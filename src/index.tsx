const client = {
    name: "Egor",
    age: 98,
    scores: [72.17, 18.29, 71.90]
}

const [first, second, third = 35.45] = client.scores

switch(third){
    case 35.45:
        console.log("Nauru")
        break;
    case 18.29:
        console.log("Norway")
        break;
    default:
        console.log("Barbuda"); // "Barbuda"
}
/*Какую строку мы увидим в консоли?*/

