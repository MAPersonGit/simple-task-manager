import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { task } from '../types';
import { Header } from './header';
import { DeleteButton } from './DeleteButton';

export function EditTask({ tasks, onClick, match, removeHandler }: any) {
    const task = tasks.find((task: task) => task.id == match.params.taskID)
    const [formValue, setFormValue] = useState(task.title)
    const [btnText, setBtnText] = useState('вернуться к списку')


    function inputHandler(e: React.FormEvent<HTMLInputElement>): void {
        const inputValue = e.currentTarget.value;

        setFormValue(inputValue);

        if (formValue !== task.title) {
            setBtnText('сохранить');
        } else {
            setBtnText('вернуться к списку');
        }
    }


    return (
        <div>
            <Header title={`Задача №${task.id}`}
                element={
                    <DeleteButton clickHandler={removeHandler} id={task.id} />
                } />
            <form>
                <label htmlFor="taskInput">Краткое описание</label>
                <input id="taskInput" type="text" value={formValue} onChange={inputHandler} />
            </form>
            <Link to='/'>
                <button onClick={() => onClick(formValue, task.id)}>{btnText}</button>
            </Link>
        </div>
    )
}

