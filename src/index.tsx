import React, { ChangeEvent, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const MIN_COMMENT_SIZE = 5

function LongCommentChecker() {
    const [comment, setComment] = useState<string>('')
    const isCommentReady = comment.length > MIN_COMMENT_SIZE

    const onClickSendComment = () => {
        if (isCommentReady) {
            setComment('')
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newComment = e.currentTarget.value

        setComment(newComment)
    }

    return (
        <main>
            <textarea
                placeholder={'Your comment must have more than 5 charters'}
                value={comment}
                onChange={onChangeHandler}
            />
            <div>
                <button
                    disabled={isCommentReady}
                    onClick={onClickSendComment}>
                    Send comment
                </button>
            </div>
        </main>
    )
}

ReactDOM.render(<LongCommentChecker/>, document.getElementById('root'))

/*
Вопрос:

Что нужно написать вместо XXX, чтобы кнопка отправки комментария отрабатывала верно:
первоначально кнопка должна быть в состоянии disable, а после успешного выполнения условия (комментарий должен быть больше 5 символов) должна раздизаблиться.
❗ Ответ необходимо дать на основании данных (переменных), которые уже есть в коде
*/