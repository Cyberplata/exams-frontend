import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Button() {
    return <button
        onClick={alert}
    >Click</button>
}


ReactDOM.render(
    <Button/>, document.getElementById('root')
);





// Что надо написать вместо ххх,
// что бы на странице появился пустой alert при клике по кнопке?








