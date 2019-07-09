import React, { useState, useCallback } from 'react';
import { Link, RouteComponentProps } from "react-router-dom";
import { task } from '../types';
import { Header } from './header';
import { DeleteButton } from './DeleteButton';
import {CommitTaskButton} from './CommitTaskButton';


interface MatchParams {
    name: string;
    taskID: string
}

interface EditTaskProps extends RouteComponentProps<MatchParams> {
    tasks: Array<task>, 
    onClick: (title: string, id: number) => void,
    removeHandler: (id: number) => void 
}

export const EditTask:React.FC<EditTaskProps> = ({ tasks, onClick, match, removeHandler }) => {
    const {params} = match;
    const task = tasks.find((task: task) => task.id == Number(params.taskID)) || {title: 'sample', id: 0}
    const [formValue, setFormValue] = useState(task.title)
    const [taskChanged, setTaskChanged] = useState(false);
    
    const headerElement = (
        <Link to='/'>
            <DeleteButton clickHandler={removeHandler} id={task.id} />
        </Link>
    )


    function inputHandler({currentTarget}: React.FormEvent<HTMLInputElement>): void {
        const {value} = currentTarget;
        setFormValue(value);
        setTaskChanged(value !== task.title);
    }


    return (
        <div>
            <Header title={`Задача №${task.id}`} element={headerElement} />
            <form>
                <label htmlFor="taskInput">Краткое описание</label>
                <input id="taskInput" type="text" value={formValue} onChange={inputHandler} />
            </form>

            <Link to='/'>
                <CommitTaskButton changed={taskChanged} clickHandler={onClick} id={task.id} title={formValue}/>
            </Link>
        </div>
    )
}

