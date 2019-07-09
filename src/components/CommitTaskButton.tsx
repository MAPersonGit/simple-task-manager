
import React from 'react';


interface CommitTaskButtonProps {
    changed:boolean,
    clickHandler: (title: string, id: number) => void,
    id: number,
    title: string
}

export const CommitTaskButton:React.FC<CommitTaskButtonProps> = ({changed, clickHandler, id, title}) => {
    if (changed) {
        return (
            <button onClick={() => clickHandler(title, id)}>Сохранить</button>
        )
    }

    return (
        <button>Вернуться к списку</button>
    )
}