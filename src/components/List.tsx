import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { EditTask } from './EditTask'


export function List({ tasks, match, onClick }: any) {
    console.log(match);

    return (
        <div>
            <table>
                <tbody>
                    {tasks.map((task: any) => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>
                                <button onClick={() => onClick(task.id, 'DELETE')}>удалить</button>
                                <Link to={`/${task.id}`}>редактировать</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}