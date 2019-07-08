import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {task} from '../types';


export function EditTask({tasks, onClick, match}:any) {
    const task = tasks.find((task:task) => task.id == match.params.taskID)
    const [formValue, setFormValue] = useState(task.title)
    const [buttonBehavior, setButtonBehavior] = useState({title: 'remove', action: "DELETE"});

    function inputHandler(e:any) {
        const inputValue = e.currentTarget.value;

        setFormValue(inputValue);

        if ( inputValue === task.title ) {
            setButtonBehavior({title: 'back to list', action: ""});
        } else {
            setButtonBehavior({title: 'save', action: "EDIT"});
        }
    }



    return (
        <div>
            <h1>{`Задача № ${task.id}`}</h1>
            <form>
            <label htmlFor="taskInput">Краткое описание</label>
                <input id="taskInput" type="text" value={formValue} onChange={inputHandler}/>{task.title}
            </form>
            <Link to='/'>
                <button onClick={() => onClick(task.id, buttonBehavior.action)}>{buttonBehavior.title}</button>
            </Link>
        </div>
    )
}

