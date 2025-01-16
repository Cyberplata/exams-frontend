import axios from 'axios'
import React, {type ChangeEvent, useEffect, useState} from 'react'
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

type PostType = {
   title: string
   body: string
   userId: number
}

type UpdatePostType = {
   id: number,
} & PostType

// Api
const instance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'})

const jsonPlaceholderAPI = {
   getUsers() {
      return instance.get<UserType[]>('users')
   },
   createPosts(payload: { title: string, body: string, userId: number, id: number }) {
      const {title, body, userId, id} = payload
      return instance.post<UpdatePostType>('posts', {title, body, userId, id})
   },
   updatePost(payload: { id: number, title: string, body: string }) {
      const {id, title, body} = payload
      return instance.put<UpdatePostType>(`posts/${id}`, {title, body})
   },
   deletePost(payload: {id: number}) {
      const {id} = payload
      return instance.delete<UpdatePostType>(`posts/${id}`)
   }
}


// App
export const App = () => {
   const [users, setUsers] = useState<UserType[]>([])
   const [posts, setPosts] = useState<UpdatePostType[]>([]);
   const [editingPostId, setEditingPostId] = useState<number | null>(null);
   const [tempTitle, setTempTitle] = useState<string>("");

   useEffect(() => {
      jsonPlaceholderAPI.getUsers()
         .then((res) => {
            console.log(res.data)
            setUsers(res.data)
         })
   }, [])

   useEffect(() => {
      instance.get<UpdatePostType[]>('posts')
         .then((res) => {
            console.log(res.data);
            setPosts(res.data);
         });
   }, []);

   const createPostHandler = (title: string, body: string, userId: number, id: number) => {
      jsonPlaceholderAPI.createPosts({title, body, userId, id: 0})
         .then((res) => {
            console.log(res.data)
            const newPost = res.data
            setPosts([...posts, newPost])
         }).catch(err => {
         console.log("Ошибка при создании поста:", err)
      })
   }

   const handleDoubleClick = (post: UpdatePostType) => {
      setEditingPostId(post.id);
      setTempTitle(post.title);
   };

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setTempTitle(event.currentTarget.value)
   }

   const handleBlurOrEnter = (post: UpdatePostType) => {
      if (post.id > 100) {
         console.log('Обновление постов с ID > 100 не поддерживается.');
         return;
      }

      jsonPlaceholderAPI.updatePost({id: post.id, title: tempTitle, body: post.body})
         .then((res) => {
            setPosts(posts.map(p => p.id === post.id ? {...p, title: res.data.title} : p));
            setEditingPostId(null);
         }).catch(err => {
         console.log("Ошибка при обновлении поста:", err);
      });
   };

   const handleDeletePost = (id: number) => {
      jsonPlaceholderAPI.deletePost({id})
         .then(() => {
            setPosts(posts.filter((p) => p.id !== id))
      }).catch((err) => {
         console.log("Ошибка при удаление поста", err)
      })
   }

   return (
      <>
         <h1>📝 Список юзеров</h1>
         {
            users.map(c => {
               return <div key={c.id}><b>User</b>: {c.name} <b>City</b>: {c.address.city} </div>
            })
         }

         <h1>Создать пост</h1>
         <button onClick={() => createPostHandler('Test', 'This is a test post', 1, 1)}>Создать пост</button>

         {posts.length > 0 && (
            <div>
               <h2>Созданные посты с userId === 1:</h2>
               {posts.filter(p => p.userId === 1).map((p) => (
                  <div key={p.id} style={{marginBottom: '10px'}}>
                     {editingPostId === p.id ? (
                        <input
                           value={tempTitle}
                           onChange={handleInputChange}
                           onBlur={() => handleBlurOrEnter(p)}
                           onKeyDown={(e) => e.key === "Enter" && handleBlurOrEnter(p)}
                           autoFocus
                        />
                     ) : (
                        <div onDoubleClick={() => handleDoubleClick(p)}>
                           <b>Заголовок:</b> {p.title}
                        </div>
                     )}
                     <div><b>Тело:</b> {p.body}</div>
                     <div><b>UserID:</b> {p.userId}</div>
                     <div><b>ID:</b> {p.id}</div>
                     <button onClick={() => handleDeletePost(p.id)}>X</button>
                  </div>
               ))}
            </div>
         )}
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

