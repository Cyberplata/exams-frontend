import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UsersList() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
    console.log(typeof useState) //function

    return (
        <p>Тут будет список пользователей!</p>
    )
}

ReactDOM.render(
    <UsersList />, document.getElementById('root')
);

// Что вернёт выражение: typeof useState?
