import React from 'react';
import { Link, Route } from "react-router-dom";

import {task} from '../types';


export function EditTask({tasks, onClick, match}:any) {
    const task = tasks.find((task:task) => task.id == match.params.taskID)
    return (
        <div>
            <h1>{`Задача № ${task.id}`}</h1>
            <form>
            <label htmlFor="taskInput">Краткое описание</label>
                <input id="taskInput" type="text"/>
            </form>
            <button onClick={() => onClick(task.id, "DELETE")}>удалить</button>
            <Link to='/'>back to list</Link>
        </div>
    )
}

