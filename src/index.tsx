const body = {
    name: "Mia",
    age: 45,
    technologies: ["HTML", "", "REACT"]
}

const [address = "FOO", celebration = "BOO", board = "DOO"] = body.technologies

if(!celebration){
    alert("HEY")
}

// Какую переменную следует указать вместо XXX, что бы была вызвана функция alert? // celebration