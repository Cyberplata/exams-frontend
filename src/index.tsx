const anxiety = {
    name: "Yana",
    scores: 1
}

const cousin = {
    ... anxiety,  scores:  anxiety.scores++
}


const scores  = cousin.scores

// Какое значение получит переменная scores? // 1

