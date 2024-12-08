import axios from 'axios'
import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client';


// Types
type StreetType = {
    suite: string
    city: string
    zipcode: string
    geo: string
    lat: string
    lng: string
}

type CompanyNameType = {
    name: string,
    catchPhrase: string,
    bs: string
}

type UserType = {
    id: string
    name: string
    username: string
    email: string
    address: StreetType
    phone: string
    website: string
    company: CompanyNameType

}

type BaseResponse = {
    title: string
    body: string
    userId: string
}

// Api
const instance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'})

const usersAPI = {
    getUsers() {
        return instance.get<UserType[]>('users')
    },
    createPosts(payload: {title: string, body: string, userId: 1}) {
        const {title, body, userId} = payload
        return instance.post<BaseResponse>('posts', {title, body, userId})
    },
}


// App
export const App = () => {

    const [users, setUsers] = useState<UserType[]>([])

    useEffect(() => {
        usersAPI.getUsers()
            .then((res) => {
                console.log(res.data)
                setUsers(res.data)
            })
    }, [])

    return (
        <>
            <h1>📝 Список юзеров</h1>
            {
                users.map(c => {
                    return <div key={c.id}><b>User</b>: {c.name} <b>City</b>: {c.address.city} </div>
                })
            }
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)

// 📜 Описание:
//    Задания для практики
// 1. GET-запрос
// Напиши функцию, которая получает список пользователей с https://jsonplaceholder.typicode.com/users, отобрази их имена на странице.
//
//  2. POST-запрос
// Отправь новый пост на https://jsonplaceholder.typicode.com/posts с параметрами {title: 'Test', body: 'This is a test post', userId: 1} и отобрази его ID и Title.
//
//  3. PUT-запрос
// Обнови пост с ID 1 на https://jsonplaceholder.typicode.com/posts/1, передав новое title и body.
//
//  4. DELETE-запрос
// Удали пост с ID 1 с помощью https://jsonplaceholder.typicode.com/posts/1 и проверь статус ответа.
//
//  5. Обработка ошибок
// Добавь обработку ошибок (catch) для всех запросов и отображай сообщение об ошибке на странице.
//
//  6. Прогресс-загрузка
// Добавь индикатор загрузки (loading), который показывает "Загрузка..." до завершения запроса.

